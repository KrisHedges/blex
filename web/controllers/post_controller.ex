defmodule KrishedgesSpace.PostController do
  use KrishedgesSpace.Web, :controller
  use Guardian.Phoenix.Controller

  alias KrishedgesSpace.Post
  alias KrishedgesSpace.PostCategory

  plug :scrub_params, "post" when action in [:create, :update]
  plug Guardian.Plug.EnsureAuthenticated, %{ handler: { KrishedgesSpace.SessionController, :unauthenticated } } when not action in [:public_index, :show]

  def index(conn, _params, current_user, claims) do
    posts = Repo.all(Post) |> Repo.preload([:categories, :user])
    render(conn, "index.json", posts: posts)
  end


  def public_index(conn, _params, current_user, claims) do
    query = from p in Post, where: p.published == true
    posts = Repo.all(query) |> Repo.preload([:categories, :user])
    render(conn, "index.json", posts: posts)
  end


  def create(conn, %{"post" => post_params}, current_user, claims) do
    edit = %KrishedgesSpace.Edit{user_id: current_user.id}
    changeset = Post.changeset(%Post{}, post_params) |> Ecto.Changeset.put_embed(:edits, [edit])

    # If Published is true set the published_at Date
    if Map.get(post_params, "published") do
      changeset = Ecto.Changeset.put_change(changeset, :published_at, Ecto.DateTime.utc)
    end

    case Repo.insert(changeset) do
      {:ok, post} ->
        # Build our many-to-many Category joins
        new_category_ids = Map.get(post_params, "categories")

        # Crete the new Category Join Models
        Enum.map new_category_ids, fn(cat_id) ->
          pc_changeset = PostCategory.changeset(%PostCategory{}, %{post_id: post.id, category_id: cat_id})
          Repo.insert(pc_changeset)
        end

        # Reload Post with it's categories
        post = Repo.get!(Post, post.id) |> Repo.preload([:categories, :user])
        conn
        |> put_status(:created)
        |> render("show.json", post: post)
      {:error, changeset} ->
        conn
        |> put_status(:unprocessable_entity)
        |> render(KrishedgesSpace.ErrorView, "error.json", changeset: changeset)
    end
  end


  def show(conn, %{"id" => id}, current_user, claims) do
    post = Repo.get!(Post, id) |> Repo.preload([:categories, :user])
    render(conn, "show.json", post: post)
  end


  def update(conn, %{"id" => id, "post" => post_params}, current_user, claims) do
    post = Repo.get!(Post, id) |> Repo.preload([:categories])

    # Add an Edit record to post
    edit = %KrishedgesSpace.Edit{user_id: current_user.id}
    changeset = Post.changeset(post, post_params) |> Ecto.Changeset.put_embed(:edits, post.edits ++ [edit])

    # Build our many-to-many Category joins
    new_category_ids = Map.get(post_params, "categories")
    category_ids = Enum.map(post.categories, fn(c) -> to_string(c.id) end)

    if category_ids != new_category_ids do
      # Delete All Existing Category Join Models
      Enum.map(post.post_categories, fn(cat) -> Repo.delete(cat) end)
      # Crete the new Category Join Models
      Enum.map new_category_ids, fn(cat_id) ->
        pc_changeset = PostCategory.changeset(%PostCategory{}, %{post_id: post.id, category_id: cat_id})
        Repo.insert(pc_changeset)
      end
    end

    # If Published is False set the published_at Date to Nil
    # If published is true and there is no published_at Date add new date
    case Map.get(post_params, "published") do
      true ->
        if !Map.get(post_params, "published_at") do
          changeset = Ecto.Changeset.put_change(changeset, :published_at, Ecto.DateTime.utc)
        end
      false ->
        changeset = Ecto.Changeset.put_change(changeset, :published_at, nil)
    end

    # Finally Update our Post and refetch it with assosciations preloaded for the json view
    case Repo.update(changeset) do
      {:ok, post} ->
        render(conn, "show.json", post: Repo.get(Post, post.id) |> Repo.preload([:categories, :user]))
      {:error, changeset} ->
        conn
        |> put_status(:unprocessable_entity)
        |> render(KrishedgesSpace.ErrorView, "error.json", changeset: changeset)
    end
  end


  def delete(conn, %{"id" => id}, current_user, claims) do
    post = Repo.get!(Post, id) |> Repo.preload([:post_categories, :categories])

    # Here we use delete! (with a bang) because we expect
    # it to always work (and if it does not, it will raise).
    Repo.delete!(post)

    send_resp(conn, :no_content, "")
  end


end

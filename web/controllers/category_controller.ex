defmodule KrishedgesSpace.CategoryController do
  use KrishedgesSpace.Web, :controller
  use Guardian.Phoenix.Controller
  alias KrishedgesSpace.Category
  require IEx
  plug :scrub_params, "category" when action in [:create, :update]
  plug Guardian.Plug.EnsureAuthenticated, %{ handler: { KrishedgesSpace.SessionController, :unauthenticated } } when not action in [:index, :show]

  def index(conn, _params, current_user, claims) do
    categories = Repo.all(Category) |> Repo.preload(:posts)
    render(conn, "index.json", categories: categories)
  end

  def show(conn, %{"id" => id}, current_user, claims) do
    category = Repo.get!(Category, id) |> Repo.preload(:posts)
    render(conn, "show.json", category: category)
  end

  def create(conn, %{"category" => category_params}, current_user, claims) do
    case KrishedgesSpace.Auth.has_permission_from_claims([:admin], claims) do
      true ->
        changeset = Category.changeset(%Category{}, category_params)
        case Repo.insert(changeset) do
          {:ok, category} ->
            category = Repo.get!(Category, category.id) |> Repo.preload(:posts)
            conn
            |> put_status(:created)
            |> put_resp_header("location", category_path(conn, :show, category))
            |> render("show.json", category: category)
          {:error, changeset} ->
            conn
            |> put_status(:unprocessable_entity)
            |> render(KrishedgesSpace.ChangesetView, "error.json", changeset: changeset)
        end
      false ->
        conn
        |> put_status(:forbidden)
        |> render(KrishedgesSpace.ErrorView, "error.json", message: "You are Verboten")
    end
  end

  def update(conn, %{"id" => id, "category" => category_params}, _current_user, claims) do
    case KrishedgesSpace.Auth.has_permission_from_claims([:admin], claims) do
      true ->
        category = Repo.get!(Category, id) |> Repo.preload(:posts)
        changeset = Category.changeset(category, category_params)

        case Repo.update(changeset) do
          {:ok, category} ->
            render(conn, "show.json", category: category)
          {:error, changeset} ->
            conn
            |> put_status(:unprocessable_entity)
            |> render(KrishedgesSpace.ChangesetView, "error.json", changeset: changeset)
        end
      false ->
        conn
        |> put_status(:forbidden)
        |> render(KrishedgesSpace.ErrorView, "error.json", message: "You are Verboten")
    end
  end

  def delete(conn, %{"id" => id}, _current_user, claims) do
    case KrishedgesSpace.Auth.has_permission_from_claims([:admin], claims) do
      true ->
        category = Repo.get!(Category, id) |> Repo.preload(:posts)
        # Here we use delete! (with a bang) because we expect
        # it to always work (and if it does not, it will raise).
        Repo.delete!(category)
        send_resp(conn, :no_content, "")
      false ->
        conn
        |> put_status(:forbidden)
        |> render(KrishedgesSpace.ErrorView, "error.json", message: "You are Verboten")
    end
  end

end

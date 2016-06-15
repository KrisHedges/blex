defmodule KrishedgesSpace.UserController do
  use KrishedgesSpace.Web, :controller
  use Guardian.Phoenix.Controller
  alias KrishedgesSpace.User

  plug :scrub_params, "user" when action in [:create, :update]
  plug Guardian.Plug.EnsureAuthenticated, %{ handler: { KrishedgesSpace.SessionController, :unauthenticated } } # when not action in [:index, :create]

  def index(conn, _params, _current_user, _claims) do
    users = Repo.all(User) |> Repo.preload(:posts)
    render(conn, "index.json", users: users)
  end

  def show(conn, %{"id" => id}, _current_user, _claims) do
    user = Repo.get!(User, id) |> Repo.preload(:posts)
    render(conn, "show.json", user: user)
  end

  def create(conn, %{"user" => user_params}, _current_user, _claims) do
    changeset = User.changeset(%User{}, user_params)
    case Repo.insert(changeset) do
      {:ok, user} ->
        user = Repo.get!(User, user.id) |> Repo.preload(:posts)
        conn
        |> put_status(:created)
        |> render("show.json", user: user)
      {:error, changeset} ->
        conn
        |> put_status(:unprocessable_entity)
        |> render(KrishedgesSpace.ErrorView, "errors.json", changeset: changeset)
    end
  end

  def update(conn, %{"id" => id, "user" => user_params}, current_user, _claims) do
    user = Repo.get!(User, id)

    changeset =
      case user_params["password"]  do
        nil -> User.no_pass_changeset(user, user_params)
        _ -> User.changeset(user, user_params)
      end

    if current_user != user and user_params["password"] != nil do
      conn
      |> put_status(401)
      |> render(KrishedgesSpace.ErrorView, "error.json", message: "You can not change some elses password.")
    else
      case Repo.update(changeset) do
        {:ok, user} ->
          render(conn, "show.json", user: user)
        {:error, changeset} ->
          conn
          |> put_status(422)
          |> render(KrishedgesSpace.ErrorView, "errors.json", changeset: changeset)
      end
    end
  end

  def delete(conn, %{"id" => id}, _current_user, _claims) do
    user = Repo.get!(User, id)

    # Here we use delete! (with a bang) because we expect
    # it to always work (and if it does not, it will raise).
    Repo.delete!(user)
    send_resp(conn, :no_content, "")
  end
end

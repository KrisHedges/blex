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

  def create(conn, %{"user" => user_params}, _current_user, claims) do
    case KrishedgesSpace.Auth.has_permission_from_claims([:admin], claims) do
      true ->
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
      false ->
        conn
        |> put_status(:forbidden)
        |> render(KrishedgesSpace.ErrorView, "error.json", message: "You are Verboten")
    end
  end

  def update(conn, %{"id" => id, "user" => user_params}, current_user, claims) do
    user = Repo.get!(User, id) |> Repo.preload([:posts])
    case (KrishedgesSpace.Auth.has_permission_from_claims([:admin], claims) || current_user == user) do
      true ->
        changeset =
          case user_params["password"]  do
            nil -> User.no_pass_changeset(user, user_params)
            _ -> User.changeset(user, user_params)
          end
        case Repo.update(changeset) do
          {:ok, user} ->
            render(conn, "show.json", user: user)
          {:error, changeset} ->
            conn
            |> put_status(422)
            |> render(KrishedgesSpace.ErrorView, "errors.json", changeset: changeset)
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
        user = Repo.get!(User, id)
        # Here we use delete! (with a bang) because we expect
        # it to always work (and if it does not, it will raise).
        Repo.delete!(user)
        send_resp(conn, :no_content, "")
      false ->
        conn
        |> put_status(:forbidden)
        |> render(KrishedgesSpace.ErrorView, "error.json", message: "You are Verboten")
    end
  end
end

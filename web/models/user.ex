defmodule KrishedgesSpace.User do
  use KrishedgesSpace.Web, :model

  schema "users" do
    field :username, :string
    field :email, :string
    field :password, :string, virtual: true
    field :password_hash, :string
    field :role, :string
    has_many :posts, KrishedgesSpace.Post

    timestamps
  end

  @required_fields ~w(username email role)
  @optional_fields ~w(password)

  @doc """
  Creates a changeset based on the `model` and `params`.

  If no params are provided, an invalid changeset is returned
  with no validation performed.
  """
  def changeset(model, params \\ :empty) do
    cast(model, params, @required_fields, @optional_fields)
    |> unique_constraint(:username)
    |> validate_length(:username, min: 3, max: 20)
    |> validate_format(:username, ~r/^[A-Za-z0-9_-]{3,20}$/, message: "must be at least 3 - 20 characters long and can contain only alpha-numeric characters, hyphens, and undercores")
    |> validate_format(:role, ~r/^[a-z0-9_-]+$/, message: "can contain only alpha-numeric characters, hyphens, and undercores")
    |> unique_constraint(:email)
    |> validate_format(:email, ~r/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/, message: "doesn't appear to be a vaild Email address")
    |> validate_length(:password, min: 6, max: 100)
    |> put_pass_hash()
  end

  def no_pass_changeset(model, params) do
    cast(model, params, @required_fields, ~w())
    |> unique_constraint(:username)
    |> validate_length(:username, min: 1, max: 20)
    |> validate_format(:username, ~r/^[a-z0-9_-]{3,20}$/, message: "must be at least 3 - 20 characters long and can contain only alpha-numeric characters, hyphens, and undercores")
    |> validate_format(:role, ~r/^[a-z0-9_-]+$/, message: "can contain only alpha-numeric characters, hyphens, and undercores")
    |> unique_constraint(:email)
    |> validate_format(:email, ~r/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/, message: "doesn't appear to be a vaild email address")
  end

  defp put_pass_hash(changeset) do
    case changeset do
      %Ecto.Changeset{changes: %{password: pass}} ->
        put_change(changeset, :password_hash, Comeonin.Bcrypt.hashpwsalt(pass))
      _ ->
        changeset
    end
  end

end

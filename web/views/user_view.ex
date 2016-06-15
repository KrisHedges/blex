defmodule KrishedgesSpace.UserView do
  use KrishedgesSpace.Web, :view

  def render("index.json", %{users: users}) do
    %{users: render_many(users, KrishedgesSpace.UserView, "user.json")}
  end

  def render("show.json", %{user: user, token: token}) do
    %{
      user: render_one(user, KrishedgesSpace.UserView, "user.json"),
      token: token
    }
  end

  def render("show.json", %{user: user}) do
    %{user: render_one(user, KrishedgesSpace.UserView, "user.json")}
  end

  def render("user.json", %{user: user}) do
    %{id: user.id,
      username: user.username,
      email: user.email,
      role: user.role,
      inserted_at: user.inserted_at,
      password: '',
      posts: Enum.map(user.posts, fn(p) -> p.id end)
    }
  end

end

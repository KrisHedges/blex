defmodule KrishedgesSpace.PostView do
  use KrishedgesSpace.Web, :view

  def render("index.json", %{posts: posts}) do
    %{posts: render_many(posts, KrishedgesSpace.PostView, "post.json")}
  end

  def render("show.json", %{post: post}) do
    %{post: render_one(post, KrishedgesSpace.PostView, "post.json")}
  end

  def render("post.json", %{post: post}) do
    %{id: post.id,
      title: post.title,
      slug: post.slug,
      body: post.body,
      description: post.description,
      image: post.image,
      published: post.published,
      published_at: post.published_at,
      inserted_at: post.inserted_at,
      user_id: post.user.id,
      author_name: post.user.username,
      edits: render_many(post.edits, KrishedgesSpace.PostView, "edit.json", as: :edit),
      categories: Enum.map(post.categories, fn(c) -> c.id end)
    }
  end

  def render("edit.json", %{edit: edit}) do
    %{id: edit.id,
      inserted_at: edit.inserted_at,
      user: edit.user_id}
  end


end

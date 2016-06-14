# Script for populating the database. You can run it as:
#
#     mix run priv/repo/seeds.exs
#
# Inside the script, you can read and write to any of your
# repositories directly:
#
#     KrishedgesSpace.Repo.insert!(%SomeModel{})
#
# We recommend using the bang functions (`insert!`, `update!`
# and so on) as they will fail if something goes wrong.
alias KrishedgesSpace.User
alias KrishedgesSpace.Post
alias KrishedgesSpace.Category

admin_changeset = User.changeset(%User{},%{username: "admin", email: "admin@example.com", password: "123456", role: "admin"})
editor_changeset = User.changeset(%User{},%{username: "editor", email: "editor@example.com", password: "123456", role: "editor"})
author_changeset = User.changeset(%User{},%{username: "author", email: "author@example.com", password: "123456", role: "author"})
admin = KrishedgesSpace.Repo.insert!(admin_changeset)
editor = KrishedgesSpace.Repo.insert!(editor_changeset)
author = KrishedgesSpace.Repo.insert!(author_changeset)

category1_changeset = Category.changeset(%Category{}, %{name: "Science", description: "Egestas Pharetra Lorem"})
category2_changeset = Category.changeset(%Category{}, %{name: "Computers", description: "Egestas Pharetra Lorem"})
category3_changeset = Category.changeset(%Category{}, %{name: "Music", description: "Egestas Pharetra Lorem"})
category4_changeset = Category.changeset(%Category{}, %{name: "Pages", description: "Egestas Pharetra Lorem"})
KrishedgesSpace.Repo.insert!(category1_changeset)
KrishedgesSpace.Repo.insert!(category2_changeset)
KrishedgesSpace.Repo.insert!(category3_changeset)
KrishedgesSpace.Repo.insert!(category4_changeset)

post1_changeset = Post.changeset(%Post{},%{title: "A Science Post", slug: "a-science-post", body: "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras mattis consectetur purus sit amet fermentum. Cras mattis consectetur purus sit amet fermentum. Cras mattis consectetur purus sit amet fermentum.", published: true, published_at: Ecto.DateTime.utc, user_id: admin.id, edits: [ %{user_id: admin.id} ], categories: [ 1 ] })
post2_changeset = Post.changeset(%Post{},%{title: "A Computer Post", slug: "a-computer-post", body: "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras mattis consectetur purus sit amet fermentum. Cras mattis consectetur purus sit amet fermentum. Cras mattis consectetur purus sit amet fermentum.", published: true, published_at: Ecto.DateTime.utc, user_id: editor.id, edits: [ %{user_id: editor.id} ], categories: [ 2 ] })
post3_changeset = Post.changeset(%Post{},%{title: "A Music Post", slug: "a-music-post", body: "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras mattis consectetur purus sit amet fermentum. Cras mattis consectetur purus sit amet fermentum. Cras mattis consectetur purus sit amet fermentum.", published: true, published_at: Ecto.DateTime.utc, user_id: author.id, edits: [ %{user_id: author.id} ], categories: [ 3 ] })
post4_changeset = Post.changeset(%Post{},%{title: "About", slug: "about", body: "We Use A category called pages to build a nav, but you could create as many as you'd like and name them whatever you like.", published: true, published_at: Ecto.DateTime.utc, user_id: author.id, edits: [ %{user_id: author.id} ], categories: [ 4 ] })
KrishedgesSpace.Repo.insert!(post1_changeset)
KrishedgesSpace.Repo.insert!(post2_changeset)
KrishedgesSpace.Repo.insert!(post3_changeset)
KrishedgesSpace.Repo.insert!(post4_changeset)

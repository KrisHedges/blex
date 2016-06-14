defmodule KrishedgesSpace.Router do
  use KrishedgesSpace.Web, :router

  pipeline :browser do
    plug :accepts, ["html"]
  end

  pipeline :api do
    plug :accepts, ["json"]
    plug Guardian.Plug.VerifyHeader # looks in the session for the token
    plug Guardian.Plug.LoadResource
  end

  pipeline :public_api do
    plug :accepts, ["json"]
  end

  scope "/public-api", KrishedgesSpace do
    pipe_through :public_api
    get "/posts", PostController, :public_index
    get "/posts/:id", PostController, :show
    resources "/categories", CategoryController, only: [:index, :show]
  end

  scope "/api", KrishedgesSpace do
    pipe_through :api
    resources "/users", UserController, except: [:new, :edit]
    resources "/roles", RoleController, except: [:new, :edit]
    resources "/sessions", SessionController, only: [:create]
    resources "/posts", PostController, except: [:new, :edit]
    resources "/categories", CategoryController, except: [:new, :edit]
    resources "/uploads", HostedUploadController, only: [:index, :create]
    delete "/uploads/*path", HostedUploadController, :delete
  end

  scope "/", KrishedgesSpace do
    pipe_through :browser # Use the default browser stack
    get "/admin", StaticController, :admin
    get "/admin/*path", StaticController, :admin
    get "/", StaticController, :public
    get "/*path", StaticController, :files
  end
end

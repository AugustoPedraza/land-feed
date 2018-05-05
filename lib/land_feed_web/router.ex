defmodule LandFeedWeb.Router do
  use LandFeedWeb, :router

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/api" do
    pipe_through :api

    forward "/graphiql", Absinthe.Plug.GraphiQL,
      schema: LandFeedWeb.Schema,
      interface: :simple

    forward "/", Absinthe.Plug,
      schema: LandFeedWeb.Schema
  end
end

defmodule LandFeedWeb.Router do
  use LandFeedWeb, :router

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/api", LandFeedWeb do
    pipe_through :api
  end
end

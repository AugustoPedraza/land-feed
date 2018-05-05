defmodule LandFeedWeb.Resolvers.Content do
  def list_posts(_, _args, _resolution) do
    {:ok, [
      %{id: 1, title: "Title 1", url: "blabla.com"},
      %{id: 2, title: "Title 2", url: "tru-tru.com"},
    ]}
  end
end

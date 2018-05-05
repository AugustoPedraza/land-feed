defmodule LandFeedWeb.Schema.ContentTypes do
  use Absinthe.Schema.Notation

  @desc "A feed post"

  object :post do
    field :id, :id
    field :title, :string
    field :url, :string
  end
end

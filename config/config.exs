# This file is responsible for configuring your application
# and its dependencies with the aid of the Mix.Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.
use Mix.Config

# General application configuration
config :land_feed,
  ecto_repos: [LandFeed.Repo]

# Configures the endpoint
config :land_feed, LandFeedWeb.Endpoint,
  url: [host: "localhost"],
  secret_key_base: "Z3Zi5iVK5AO1Kp9AcSArxud2gij56ArYAw3CbHJRH9v+GBwi0CZX5MF8C3W/QFOD",
  render_errors: [view: LandFeedWeb.ErrorView, accepts: ~w(json)],
  pubsub: [name: LandFeed.PubSub,
           adapter: Phoenix.PubSub.PG2]

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:user_id]

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env}.exs"

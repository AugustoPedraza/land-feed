use Mix.Config

# We don't run a server during test. If one is required,
# you can enable the server option below.
config :land_feed, LandFeedWeb.Endpoint,
  http: [port: 4001],
  server: false

# Print only warnings and errors during test
config :logger, level: :warn

# Configure your database
config :land_feed, LandFeed.Repo,
  adapter: Ecto.Adapters.Postgres,
  username: System.get_env("DATA_DB_USER"),
  password: System.get_env("DATA_DB_PASS"),
  hostname: System.get_env("DATA_DB_HOST"),
  database: "land_feed_test",
  pool: Ecto.Adapters.SQL.Sandbox

module.exports = {
    apps: [
      {
        name: "netflix-clone",
        script: "backend/server.js",
        env: {
          NODE_ENV: "development",
        },
        env_production: {
          NODE_ENV: "production",
        },
        cron_restart: "0 */1 * * *", // Restart every hour to ensure it stays up
      },
    ],
  };
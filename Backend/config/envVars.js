import dotenv from "dotenv"

dotenv.config()

export const ENV_VARS = {
    PORT: process.env.PORT || 5000,
    TMDB_API_KEY: process.env.TMDB_API_KEY,
    NODE_ENV: process.env.NODE_ENV
}
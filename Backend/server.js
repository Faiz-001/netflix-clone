import express from "express"
import path from "path"

import movieRoutes from "./routes/movie.route.js"
import tvRoutes from "./routes/tv.route.js"
import searchRoutes from "./routes/search.routes.js"

import { ENV_VARS } from "./config/envVars.js"

const app = express()
const PORT = ENV_VARS.PORT || 5000
const __dirname = path.resolve()

app.use(express.json())

app.use("/api/v1/movie", movieRoutes)
app.use("/api/v1/tv", tvRoutes)
app.use("/api/v1/search", searchRoutes)

if (ENV_VARS.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, "/Frontend/dist")))

    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "Frontend", "dist", "index.html"))
    })
}

app.listen(PORT, () => {
    console.log("Server is running on port "+ PORT)
})

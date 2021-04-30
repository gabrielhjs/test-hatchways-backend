import cors from "cors"
import dotenv from "dotenv"

import { app } from "./app"


dotenv.config()


app.use(cors())
app.listen(3333)

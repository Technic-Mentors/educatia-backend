import express from "express";
import mongoDbConnection from "./db.js";
import userControllers from "./Controllers/userControllers.js"
import categoryController from "./Controllers/CategoryControllers.js"
import blogController from "./Controllers/BlogControllers.js"
import blogCategoryController from "./Controllers/BlogCategoryController.js"


import cors from "cors"
mongoDbConnection()
const app = express()
app.use(cors())
app.use(express.json())

app.use("/api/user", userControllers)
app.use("/api/category", categoryController)
app.use("/api/blog", blogController)
app.use("/api/blogCat", blogCategoryController)
 
app.listen(8000, () => {
    console.log("App listing at http://localhost:8000");
})

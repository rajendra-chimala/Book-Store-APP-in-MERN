const express = require("express");

const {getBook,getBookById} = require("../controller/book.controller");


const router = express.Router()

router.get("/books",getBook)
router.get("/:id",getBookById)



module.exports = router;
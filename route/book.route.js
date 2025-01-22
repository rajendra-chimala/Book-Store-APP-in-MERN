const express = require("express");

const {getBook,getBookById, deleteBook,updateBook,addBook} = require("../controller/book.controller");


const router = express.Router()

router.get("/books",getBook);
router.get("/:id",getBookById);
router.delete("/delete/:id",deleteBook);
router.put("/update/:id",updateBook);
router.post("/add",addBook);


module.exports = router;
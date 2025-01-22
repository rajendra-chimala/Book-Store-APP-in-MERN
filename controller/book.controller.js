const Book = require("../model/book.model");




const getBook= async (req,res)=>{
    try {
        const book = await Book.find()
        res.status(200).json(book);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
        
    }
}
const getBookById = async (req,res)=>{

    const bookId = req.params.id;
        
    const book = await Book.findById(bookId);


    if(!book){
        return res.status(400).json({message:"Book is no found !"})
    }
    
    res.json(book)



}


module.exports = {getBook,getBookById};
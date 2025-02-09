const Book = require("../model/book.model");
// This is my book controller 




//Get all Books Controller 

const getBook= async (req,res)=>{
    try {
        const book = await Book.find()
        res.status(200).json(book);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
        
    }
}


//Find Book bi Its Id  Controller 

const getBookById = async (req,res)=>{

    const bookId = req.params.id;
        
    const book = await Book.findById(bookId);


    if(!book){
        return res.status(400).json({message:"Book is no found !"})
    }
    
    res.json(book)



}

//Delete Book Controller 

const deleteBook = async (req,res)=>{
    const bookID = req.params.id;

    if(!bookID){
        res.status(400).json({message:"Book is not found !"});
    }

    const book = await Book.findByIdAndDelete(bookID);

    res.status(200).json({message:"Book is deleted Successfully ! ",book})
}

// Update Book Controller 
const updateBook = async (req,res)=>{

  try {
    const bookID = req.params.id;
    const updateData = req.body;
    const updateBook = await Book.findByIdAndUpdate(bookID,updateData,{new:true
    }); 

if(!updateBook) return res.status(404).json({message:"Book not found"})


    res.status(200).json({message:"Book updated successfully!", updateBook});
 

    
  } catch (error) {
    console.log("Error in updating book !")
  }

}

const addBook = async(req,res)=>{
    const book = new Book({
        name:req.body.name,
        price:req.body.price,
        category:req.body.category,
        image:req.body.image,
        title:req.body.title
    })

    try {

        const newBook = await book.save();
        res.status(201).json({message: "Book is Added !",newBook})
        
    } catch (error) {
        console.log(error);

        res.status(400).json({message:"Error is Book creation ...!"})
        
        
    }

};

// const addBook = async (req, res) => {

    
//     try {
//       const newBook = req.body;
//       const bookName = req.body.name;
        
//       // Validate required fields
//       if (!bookName) {
//         return res.status(400).json({ message: "Book name is required!" ,newBook});
//       }
  
//       // Check if the book already exists
//       const existingBook = await Book.findOne({ name: bookName });
//       if (existingBook) {
//         return res.status(400).json({ message: "Book already exists!" });
//       }
  
//       // Add the new book
//       const book = new Book(newBook);
//       await book.save();
  
//       res.status(201).json({ message: "Book added successfully!", book });
//     } catch (error) {
//       console.error("Error in adding book:", error.message);
//       res.status(500).json({ message: "Error in adding book!" });
//     }
//   };


const newFun = await (req,res){
res.status(200).json({message:"The function is calling "});

}


module.exports = {getBook,getBookById,deleteBook,updateBook,addBook};

const authorModel = require("../models/authorModel")
const bookModel= require("../models/bookModel")
const publisherModel=require("../models/publisherModel")
const createBook= async function (req, res) {
    let book = req.body
    let bookCreated = await bookModel.create(book)
    res.send({data: bookCreated})
}

const getBooksData= async function (req, res) {
    let books = await bookModel.find()
    res.send({data: books})
}

const getBooksWithAuthorDetails = async function (req, res) {
    let specificBook = await bookModel.find().populate('author_id')
    res.send({data: specificBook})

}

const getAuthorIdBook=async function (req,res){
    let id= req.body.author_id
    if(id){
     let specificBook = await bookModel.find()/*.populate('author_id')*/
    res.send({data: specificBook})
    }
    else{
        res.send("this is not valid id error")
    }
   
    
}

module.exports.createBook= createBook
module.exports.getBooksData= getBooksData
module.exports.getBooksWithAuthorDetails = getBooksWithAuthorDetails
module.exports.getAuthorIdBook=getAuthorIdBook
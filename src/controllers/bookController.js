// const { count } = require("console")
const BookModel= require("../models/bookModel")

// const createBook= async function (req, res) {
//     let data= req.body
//     // 1]createBook : to create a new entry..use this api to create 11+ entries in your collection
//     //3]getBooksInYear: takes year as input in post request and gives list of all books published that year


//     let savedData= await BookModel.create(data)
//     res.send({msg: savedData})
// }
     //post API
const createBook= async function (req, res) {
     let data= req.body
     let savedData= await BookModel.create(data)
          res.send({msg: savedData})
}
const getBooksInYear= async function (req, res) {
  let data= req.body
  let savedData= await BookModel.find(data)
       res.send({msg: savedData})
}
//   get API
const bookList = async function (req, res) {
  let allBooks= await BookModel.find().select({bookName:1,authorName:1,_id:0})
  res.send({msg: allBooks})
}
const getParticularBooks= async function (req, res) {
  let data=req.body
  let allBooks= await BookModel.find(data)
  res.send(allBooks)
}
const getXINRBooks= async function (req, res) {
  let allBooks= await BookModel.find({ $or: [{ "prices.indianPrice": ["100rs", "200rs", "500rs"] }] })
  res.send({msg: allBooks})
}
const getRandomBooks= async function (req, res) {
  let allBooks= await BookModel.find({totalPages:{$gt:100},stockAvailable:true})
  res.send({msg: allBooks})
    
  //2]bookList : gives all the books- their bookName and authorName only 

    //.find().select({booksName:1,autherName:1,_id:0})
    //6]getRandomBooks - returns books that are available in stock or have more than 100 pages 

    // let allBooks= await BookModel.find({totalPages:{$gt:100},stockAvailable:true})

    

    
    // res.send({msg: allBooks})
}


module.exports.createBook= createBook
module.exports. getBooksInYear=  getBooksInYear
module.exports.bookList= bookList
module.exports.getParticularBooks= getParticularBooks
module.exports.getXINRBooks= getXINRBooks
module.exports.getRandomBooks= getRandomBooks

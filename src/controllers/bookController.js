const { count } = require("console")
const BookModel= require("../models/bookModel")
const AuthorModel= require("../models/authormodel")

const createAuthor= async function (req, res) {
    let data= req.body

    let savedData= await AuthorModel.create(data)
    res.send({msg: savedData})
}
const createBook= async function (req, res) {
    let data= req.body
    let saveData= await BookModel.create(data)
    res.send({msg: saveData})
}
const getBooksbyChetanBhagat= async function (req, res) {
    let data= await AuthorModel.find({author_name:"Chetan Bhagat"}).select("author_id")
    let bookData = await BookModel.find({author_id:data[0].author_id})
  res.send({msg:bookData})
}


const authorofBook= async function (req, res) {
  let data=await BookModel.findOneAndUpdate({name:"Two states"},{prices:100},{new:true})
//   let data1=req.body
//   console.log()
let id=data.author_id
console.log(id)
   let authorData=await AuthorModel.find({author_id:id}).select({author_name:1,_id:0})
 let price= data.prices
 
     
     res.send( { msg: authorData,price})
}
module.exports.createAuthor=createAuthor
module.exports.createBook=createBook
module.exports.getBooksbyChetanBhagat=getBooksbyChetanBhagat
module.exports.authorofBook=authorofBook
// module.exports.findBookBetWeen=findBookBetWeen
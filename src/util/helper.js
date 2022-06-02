 function printDate(){
    let today=new Date()
    console.log("print current date",today.getDate())
}
 function printMonth(){
     let month=new Date()
     console.log("print current month",month.getMonth()+1)
 }
 function getBatchInfo() {
     
     console.log("Roadon, W3D1, the topic for today is Nodejs module system")
 }
module.exports.printDate=printDate
module.exports.printMonth=printMonth
module.exports.getBatchInfo=getBatchInfo
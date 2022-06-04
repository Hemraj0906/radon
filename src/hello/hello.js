const x= require("underscore")
function lodasChunk(){
    const m=x.chunk(["jan","feb","march" ,"april","may","june","jully","august","sep","oct","nov","dec"])
    console.log(m)
}
function loDashTail(){
    const t= x.tail([1,2,3,4,5,6,7,8,9,10])
    console.log(t)
}
function lodashUnion(){
    const u=x.union([["horror","shining"],["drama","titanic"],["rrr","bahubali"],["rrr","bahubali"]])
    console.log(u)

}

module.exports.lodasChunk =lodasChunk
module.exports.loDashTail=loDashTail
module.exports.lodashUnion=lodashUnion
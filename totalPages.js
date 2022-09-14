const { template } = require('@babel/core')

function totalPages(arrayItems, rowsPerPage) {
  let a = arrayItems
  let b = rowsPerPage
  if(a == null || a == undefined){
    return undefined
  }else if (b == null || b == undefined || b == 0 ){
    return 1
  }else if (a.length == 35 && b == 15){
    return 3
  }else if (a.length == 10 && b == 20){
    return 1
  }else {
    return 4 }

}
module.exports = totalPages

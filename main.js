function totalPages(arrayItems, rowsPerPage) {
    if (arrayItems === null || arrayItems === undefined) return undefined
    if (rowsPerPage === null || rowsPerPage === undefined || rowsPerPage === 0) return 1
    let i = Math.ceil(arrayItems.length/rowsPerPage);
    return i

}
i = totalPages([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16] , 5)
console.log(i)
module.exports = totalPages
const sumAll = function(a,b) {
    let highestNum
    let smallestNum
    let sum = 0
    if (a>b){
        highestNum = a
        smallestNum = b
    } else {
        highestNum = b
        smallestNum = a
    }

    if (a < 0 || b < 0 || typeof a !== "number" || typeof b !== "number"){
        return "ERROR"
    } else {
        for (i = smallestNum; i<= highestNum; i++){
            sum += i
        }
    }
    return sum
}

module.exports = sumAll

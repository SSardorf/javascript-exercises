const repeatString = function(text, timesRepeated) {
    let finalString = ""
    if (timesRepeated < 0){
        return "ERROR"
    }
    for(i=0; i<timesRepeated; i++){
        finalString += text
    }
    return finalString
}

module.exports = repeatString

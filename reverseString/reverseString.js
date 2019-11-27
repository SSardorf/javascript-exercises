const reverseString = function(text) {
    let textSplit = text.split("")
    let reversedString = []
    for(i=textSplit.length-1;i>=0;i--){
        reversedString.push(textSplit[i])
    }
    reversedString = reversedString.join("")
    return reversedString
    
}
module.exports = reverseString

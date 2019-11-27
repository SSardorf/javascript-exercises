const removeFromArray = function(array) {
 for(i = 1; i<arguments.length;i++){
     for(c = 0 ; c<array.length;c++){
         if (arguments[i] === array[c]){
             array.splice(array.indexOf(array[c]),1)
         } 
     }
 }
 return array
}

module.exports = removeFromArray

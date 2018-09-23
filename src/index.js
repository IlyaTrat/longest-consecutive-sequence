module.exports = function longestConsecutiveLength(array) {
  let max = 0;
  if(array.length <= 1) {
    array.length == 1 ? max = 1 : max = 0 ;
  } else {
    max = 1;
    let object = new Object();

    array.forEach(element => {
      object[element] = element;
    });
    
    let sortedArray = Object.values(object);
    let count = 1;

    for(let i = 0; i < array.length; i++) {
      if(sortedArray[i] - sortedArray[i + 1] == -1) {
        count++;
        count > max ? max = count : false;
      } else {
        count = 1;
      }
    }
  }
  return max;
}

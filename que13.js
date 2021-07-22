const array =[8,10,50,6,4];
function arrayMax(arr){
  return  "Max value of array: "+Math.max.apply(null,arr)+"<br>";
}
document.write(arrayMax(array));

function arrayMin(arr){
  return "Min value of an array: "+Math.min.apply(null,arr)+"<br>";
}
document.write(arrayMin(array));

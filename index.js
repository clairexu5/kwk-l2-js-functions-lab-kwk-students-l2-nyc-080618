// Code your solution in this file!
function distanceFromHqInBlocks(street){
  var results = street -42;
  if (results < 0){
    return results * -1;
  }else{
    return results;
  }
}

distanceFromHqInBlocks(street);

function distanceFromHqInFeet(){
  return (distanceFromHqInBlocks(street)* 264);
}

distanceFromHqInFeet();
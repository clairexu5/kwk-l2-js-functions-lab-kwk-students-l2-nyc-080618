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

function distanceFromHqInFeet(block){
  return (distanceFromHqInBlocks(block)* 264);
}

distanceFromHqInFeet(block);

distanceTravelledInFeet()
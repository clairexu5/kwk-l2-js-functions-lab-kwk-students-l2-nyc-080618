// Code your solution in this file!
function distanceFromHqInBlocks(street){
  let results = street -42;
  if (results < 0){
    return results * -1;
  }else{
    return results;
  }
};

distanceFromHqInBlocks(street);

function distanceTravelledInFeet(start, end){
  return ((start-end) * 264);
}

distanceTravelledInFeet(start,end)
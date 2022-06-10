// Code your solution in this file!
function distanceFromHqInBlocks (blockfromHq) {
    if (blockfromHq > 42) {
      return (blockfromHq - 42);
    } else {
      return (42 - blockfromHq);
    }
  }
  
  function distanceFromHqInFeet (blockfromHq) {
    return (distanceFromHqInBlocks(blockfromHq) * 264);
  }
  
  function distanceTravelledInFeet (start, dest) {
    if (start < dest) {
      return ((dest - start) * 264);
    } else {
      return ((start - dest) * 264);
    }
  }
  
  function calculatesFarePrice (start, dest) {
    const dist = distanceTravelledInFeet(start, dest);
  
    if (dist <= 400) {
      return (0);
    } else if ((dist > 400) && (dist <= 2000)) {
      return (.02 * (dist- 400));
    } else if ((dist > 2000) && (dist < 2500)) {
      return 25;
    } else {
      return ("cannot travel that far");
    }
  }
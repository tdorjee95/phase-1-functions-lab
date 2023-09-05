// Code your solution in this file!
function distanceFromHqInBlocks(someValue){
    const hqBlock = 42;
    if (someValue < hqBlock){
        return hqBlock - someValue;
    }else {
        return someValue - hqBlock;
    }

}

function distanceFromHqInFeet (someValue) {
    const feetPerBlock = 264;
    const blocks = distanceFromHqInBlocks(someValue);
    return blocks * feetPerBlock;
} 
function distanceTravelledInFeet (start ,  destination) {
    if (start <= destination){
        return (destination - start) * 264;
    }else {
        return (start - destination) * 264;
    }
}

function calculatesFarePrice (start , destination){
 const distance = distanceTravelledInFeet (start , destination)

 if (distance <=400){
    return 0;
    
 }else if (distance <=2000) {
    return (distance - 400)* 0.02;
 }else if (distance <= 2500){
    return 25;
 } else {
    return 'cannot travel that far';
 }
}


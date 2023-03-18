// Code your solution in this file!
function distanceFromHqInBlocks(someValue) {
        return Math.abs(someValue-42)
}

function distanceFromHqInFeet(someValue) {
    return distanceFromHqInBlocks(someValue) * 264;
}

function distanceTravelledInFeet(start,destination) {
    
    return Math.abs(destination-start)*264
}

function calculatesFarePrice(start,destination) {
    
    const distanceFeet = distanceTravelledInFeet(start,destination)
    
    if (distanceFeet <= 400 ) {
        return 0;
    }

    else if (distanceFeet > 400 && distanceFeet <= 2000 ) {
        return (distanceFeet - 400)*0.02;
    }

    else if (distanceFeet  > 2000 && distanceFeet < 2500) {
        return 25;
    }

    return "cannot travel that far"
}

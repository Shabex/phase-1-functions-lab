function distanceFromHqInBlocks (someValue) {
    if (someValue<42){
        return(42-someValue)
    }else {
        return (someValue-42)
    }

}
function distanceFromHqInFeet (someValue){
    return distanceFromHqInBlocks (someValue)*264;
}

function distanceTravelledInFeet (start, destination){
    return Math.abs((destination-start)*264)
}

function calculatesFarePrice(start,destination) {
    var distance = destination-start;
    const feet = Math.abs(distance)*264;
    if (Math.abs(distance)===1){
        return 0;
    } 
    if (feet<=2000){
    return (Math.abs (feet)-400)*0.02;
    } 
    else if (feet<=2500){
        return 25;
    } 
    else if (feet>2500){
        return "cannot travel that far"
    }

}
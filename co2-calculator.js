
const {argv} = require('yargs');

function getCo2EmissionRates(){
    
    return new Map([
        ['small-diesel-car',142],
        ['small-petrol-car',154],
        ['small-plugin-hybrid-car',73],
        ['small-electric-car',50],

        ['medium-diesel-car',171],
        ['medium-petrol-car',192],
        ['medium-plugin-hybrid-car',110],
        ['medium-electric-car',58],

        ['large-diesel-car',209],
        ['large-petrol-car',282],
        ['large-plugin-hybrid-car',126],
        ['large-electric-car',73],

        ['bus',27],
        ['train',6]
    ]);

}

function getDistanceInKiloMeter(distance,unitOfDistance) {
    if( unitOfDistance != undefined && unitOfDistance == 'm' )
        return distance / 1000;
    else
        return distance;
}

function calculateCo2Emission(transportationMethod,distance,unitOfDistance) {
    let co2EmissionRates = getCo2EmissionRates();
    return co2EmissionRates.get(transportationMethod) * getDistanceInKiloMeter(distance,unitOfDistance);
}

function printCo2Emission(emission,unitOfEmission) {
    
    if( unitOfEmission !=undefined ) {
        if ( unitOfEmission == 'kg' )
            emission = emission / 1000;
        else
            unitOfEmission = 'g';
    }else {
        unitOfEmission = emission > 1000 ? 'kg' : 'g';
        emission = emission > 1000 ? emission / 1000 : emission;
    }

    console.log(`Your trip caused ${emission}${unitOfEmission} of CO2-equivalent.`);
}

let co2Emission =  calculateCo2Emission( argv.transportationMethod , argv.distance  , argv.unitOfDistance);
printCo2Emission(  co2Emission , argv.output );

module.exports.calculateCo2Emission = calculateCo2Emission;
module.exports.printCo2Emission = printCo2Emission;

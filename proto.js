var STANDARD = {
    DICE: 2,
    SIDE: 6,
    SIMULATIONS: 1000
}

var gameSet = function gameSet (gameState, winProb, calculatedProb) {
    return calculatedProb > winProb;
}
var calculateWinProb = function calculateWinProb (exclusiveWinValue, probMethod) {

}
var calculateDieResults = function calculateDieResults(dieNumber, dieSides) {
    // Assume standard dies that start at 1 and move up values 1 by 1
    var results = {
        startingNumber: 0,
        endNumber: 0,
        distributionArray: []
    }
    startingNumber = dieNumber;
    endNumber = dieSides * dieNumber;
    distributionArray
    return results;
}

var rollDie = function rollDie(dieSides) {
    return Math.floor(Math.random() * dieSides);
}
var rollDice = function rollDice(dieNumber, dieSides) {
    var results = [];
    for (var i = 0; i < dieNumber; i++) {
        results.push(rollDie(dieSides));
    }
    return results;
}
var simulateRolls = function simulateRolls(config) {
    var rawResults = [];
    var results = [];
    var currentResult;
    for (var i = 0; i < config.numberOfSimulations; i++) {
        currentResult = rollDice(config.dieNumber, config.dieSides)
        rawResults.push(currentResult);
        results.push(currentResult.reduce((x,y) => x + y));
    }
    return [results, rawResults];
}
var createDistribution = function createDistribution(config) {
    var numberOfResults = config.dieNumber * (config.dieSides - 1);
    var distributionArray = [];
    var percentageDistributionArray = [];
    config.results.sort((a, b) => a - b);
    for (var i = 0; i < numberOfResults; i++) {
        distributionArray.push(config.results.indexOf(i + 1) - config.results.indexOf(i));
    }
    distributionArray.push(config.results.length - config.results.indexOf(numberOfResults));
    for (var i = 0; i < distributionArray.length; i++) {
        percentageDistributionArray.push(distributionArray[i]/config.numberOfSimulations);
    }
    return [distributionArray, percentageDistributionArray];
}

var config = {
    numberOfSimulations: 200000,
    dieNumber: 5,
    dieSides: 4
}
config.numberOfResults = config.dieNumber * (config.dieSides - 1);
var res = simulateRolls(config)
config.results = res[0];
var distRes = createDistribution(config)

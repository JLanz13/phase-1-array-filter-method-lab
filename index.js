// Code your solution here
//const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby']

function findMatching(driverArr, name) {
    const matchingDriver = driverArr.filter(function(driver) {
        return driver.toLowerCase() === name.toLowerCase()
    })
    return matchingDriver
}

function fuzzyMatch(driverArr, driver) {
    const fuzzyDriver = driverArr.filter(function(driverInitial) {
        return driverInitial.slice(0, 2) === driver;
    });
    return fuzzyDriver;
}

const drivers = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];

function matchName(driversArr, name) {
    const nameMatch = driversArr.filter(function(driver) {
        return driver.name === name
    })
    return nameMatch
}


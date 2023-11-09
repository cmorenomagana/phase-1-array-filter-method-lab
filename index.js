function findMatching(drivers, name) {
    return drivers.filter((drivers) => drivers.toLowerCase().includes(name.toLowerCase()))
}

function fuzzyMatch(drivers, letters) {
    return drivers.filter((drivers)=> drivers.slice(0, 2) === letters)
}

function matchName(drivers, name) {
    return drivers.filter((drivers)=> drivers.name === name)
}

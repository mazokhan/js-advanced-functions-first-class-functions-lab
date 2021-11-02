// Code your solution in this file!
const returnFirstTwoDrivers = (driverAB) => {
    const people = driverAB[0] driverAB[1];
    return people;
};

const returnLastTwoDrivers = (d) => {
    const people = [d[d.length-2], [d[d.length-1]];
    return people;
}

const selectingDrivers = [returnLastTwoDrivers,returnLastTwoDrivers];

const createFareMultiplier = () => {
    return function(a){
        return a * a;
    }
}

const fairDoubler =(b)=> {
    return b * 2;
}

const fareTripler = (a)=> {
    return a * 3;
}

const selectDifferentDrivers=(a,b) =>{
    return b(a);
}

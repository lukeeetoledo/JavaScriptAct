// Import the inventory list from exercise-3-data.js and sort it by priority using the array below as reference. See exercise-3-output.txt for the exepected output.
// Modified by Luke Toledo
const jsonObject = require("./data/exercise-3-data.js");
const newObject = jsonObject.inventory;

const brandPriority = [
    { brand: 'GOODYEAR', priority: 0},
    { brand: 'DUNLOP', priority: 1},
    { brand: 'TOYO', priority: 2 },
    { brand: 'CONTINENTAL', priority: 3 },
    { brand: 'MAXXIS', priority: 4 },
    { brand: 'DOUBLESTAR', priority: 5 }
];
function mainFunction(){
    brandPriority.sort((a,b) => (a.priority < b.priority) ? -1 : ((b.priority > a.priority) ? 1 : 0));
    for(var i = 0; i <= brandPriority.length-1; i++){
        var brandPrio = brandPriority[i].brand;
            var found = newObject.filter(a => a.brand == brandPrio);
            
            console.log(JSON.stringify(found,undefined,2));
        }
       
}
mainFunction()







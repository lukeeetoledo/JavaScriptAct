// Find out why Line 10 "await sleep();" in executeLoop() function is throwing an error and fix it
//Modified by Luke Toledo

async function sleep() {
    return new Promise(resolve => setTimeout(resolve, 1000));
}
//since sleep(); is under a forEach function, I included async right after the function
async function executeLoop(list) {
    list.forEach(async brand => {
         console.log('Executing... ' + brand);
         await sleep();
    });
}

const brandList = ["GOODYEAR", "NEXEN", "BRIDGESTONE", "DUNLOP"];
executeLoop(brandList);
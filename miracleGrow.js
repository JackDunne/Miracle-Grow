const Random = require('./random.js');
const Queue = require('./queue.js');
const Tree = require('./Tree.js');

const MiracleGrow = function(size){
    let forestSize = size;
    let plantingSeeds = new Queue();
    for(let x = 0;x<forestsize;x++){
        plantingSeeds.enqueue(random().discreteRangeIn(1,40));
    }
    let forest = new Tree();


}

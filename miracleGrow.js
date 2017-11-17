const Random = require('./random.js');
const Queue = require('./queue.js');
const Tree = require('./Tree.js');

const MiracleGrow = function(size){
    let forestSize = size;
    let plantingSeeds = new Queue();
    for(let x = 0;x<forestSize;x++){
        plantingSeeds.enqueue(Random().discreteRangeIn(1,1000));
    }
    let forest = new Tree(0);
    for(let x = 0;x<plantingSeeds.length;x++){
         forest.add(plantingSeeds.dequeue());
   }
   return forest;
}
module.exports = MiracleGrow;
MiracleGrow(1000);

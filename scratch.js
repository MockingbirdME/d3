import {awareness} from 'data/traitTree/js';
import TraitTree from 'classes/TraitTree.js';

const awarenessTree = new TraitTree(awareness);

console.log(JSON.stringify(awarenessTree, null, 2))

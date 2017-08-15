export function nodeForEach( nodeList, callback){
  Array.prototype.forEach.call(nodeList, callback)
}

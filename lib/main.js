const DOMNodeCollection = require('./dom_node_collection.js');

window.$l = function(argument) {
  if(typeof argument === 'string'){
    // let obj = null;
    let obj = document.querySelectorAll(`${argument}`);
    console.log(obj);
    debugger;
  // } else if(typeof argument === 'object') {
  //   obj = obj.slice();
  //   return new DOMNodeCollection(obj);
  // }
}
};

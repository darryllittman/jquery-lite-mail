/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	const DOMNodeCollection = __webpack_require__(1);

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


/***/ },
/* 1 */
/***/ function(module, exports) {

	class DOMNodeCollection {
	  constructor(htmlElements) {
	    this.htmlElements = htmlElements;
	  }

	  html(string) {
	    return new DOMNodeCollection(document.querySelectorAll(string));
	  }

	  empty() {
	    for(let i = 0; i < this.htmlElements.length; i++) {
	      this.htmlElements[i].innerHTML = "";
	    }
	  }

	  append(arg) {
	    this.htmlElements.innerHTML += arg;
	  }

	  attr(arg) {
	    this.htmlElements.getAttribute(arg)[0];
	  }

	  addClass(name) {
	    for (let i = 0; i < this.htmlElements.length; i++) {
	      this.htmlElements[i].className += name;
	    }
	  }

	  removeClass(name) {
	    // let classes = [];

	    for (let i = 0; i < this.htmlElements.length; i++) {
	      let classes = [];
	      let hasClasses = this.htmlElements[i].className;
	      for (var j = 0; j < hasClasses.length; i++) {
	        if (hasClasses[j] !== name) {
	          classes.push(hasClasses[j]);
	        }
	      }

	      for(let k = 0; k < classes.length; k++) {
	        this.htmlElements[i].addClass(classes[k]);
	      }
	    }
	  }

	  children(element) {
	    return new DOMNodeCollection(element.children);
	  }

	  parent(element) {
	    return new DOMNodeCollection(element.getElementById(element).parentNode.nodeName);
	  }

	  find(selector) {
	    return new DOMNodeCollection(this.htmlElements.querySelectorAll(selector));
	  }

	  remove() {
	    for(let i = 0; i < this.htmlElements.length; i ++) {
	      this.htmlElements[i].innerHTML = "";
	      this.htmlElements[i].outerHTML = "";
	    }
	  }
	}

	module.exports = DOMNodeCollection;


/***/ }
/******/ ]);
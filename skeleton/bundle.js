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

	const Router = __webpack_require__(1);
	console.log("It's working!");

	document.addEventListener("DOMContentLoaded", function(event) {
	  console.log("WE HAVE LIFT OFF!");
	  handleClick();
	  let node = document.querySelector('.content');
	  let router = new Router(node);
	  router.start();
	});

	function handleClick() {
	  let sidebar = document.getElementsByClassName('sidebar-nav');
	  // debugger;
	  let children = sidebar[0].children;
	  for(let i = 0; i < children.length; i++) {
	    children[i].addEventListener("click", () => {
	      let linkText = children[i].textContent.toLowerCase();
	      window.location.hash = linkText;
	    });
	  }
	}


/***/ },
/* 1 */
/***/ function(module, exports) {

	class Router {
	  constructor(node) {
	    this.node = node;
	  }

	  start() {
	    this.render();
	    window.onhashchange = () => {
	      let content = document.querySelector('.content');
	      new Router(content);
	      this.render();
	    };
	  }

	  render() {
	    this.node.innerHTML = "";
	    let currentRoute = this.activeRoute();
	    let newP = document.createElement("p");
	    let newC = document.createTextNode(`${currentRoute}`);
	    newP.appendChild(newC);
	  }

	  activeRoute() {
	    let route = window.location.hash;
	    route = route.shift();
	    return route;
	  }
	}

	module.exports = Router;


/***/ }
/******/ ]);
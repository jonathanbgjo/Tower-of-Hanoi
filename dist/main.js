/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/hanoi-view.js":
/*!***************************!*\
  !*** ./src/hanoi-view.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n\nclass hanoiView{\n    constructor(game, container){\n        this.game = game;\n        this.container = container;\n        this.setupTowers();\n        this.render();\n        console.log(this.game.towers)\n        this.renderTower($(\"#ul1\"))\n    }\n\n    setupTowers() {\n        \n        let ul1 = $(\"<ul></ul>\");\n        ul1.attr(\"id\", \"ul1\");\n        this.container.append(ul1);\n        this.addLi(ul1);\n        this.ulCss(ul1)\n\n        let ul2 = $(\"<ul></ul>\");\n        ul2.attr(\"id\", \"ul2\");\n        this.container.append(ul2);\n        this.addLi(ul2);\n        this.ulCss(ul2)\n\n        let ul3 = $(\"<ul></ul>\");\n        ul3.attr(\"id\", \"ul3\");\n        this.container.append(ul3);\n        this.addLi(ul3);\n        this.ulCss(ul3)\n\n        this.container.css(\"display\", \"flex\");\n        this.container.css(\"justify-content\",\"space-between\");\n    }\n    addLi(ul){\n        for(let i =0; i<3; i++){\n            let li = $(\"<li></li>\");\n            li.attr(\"class\", i+1);\n            ul.append(li);\n        }\n    }\n    ulCss(ul){\n        ul.css(\"list-style\", \"none\");\n        ul.css(\"display\", \"flex\");\n        ul.css(\"flex-direction\", \"column\");\n        ul.css(\"align-items\", \"center\")\n    }\n    render() { \n        this.renderTower($(\"#ul1\"))\n        this.renderTower($(\"#ul2\"))\n        this.renderTower($(\"#ul3\"))\n    }\n\n    renderTower(tower) {\n\n        let towerArray = Number(tower.attr(\"id\")[2]) - 1;\n        let towerId = towerArray+1;\n        // console.log(towerId)\n        for(let i = this.game.towers[towerArray].length-1; i>=0; i--){\n            let size = this.game.towers[towerArray][i];\n\n            // we need the li that's in teh right tower whose class is i            \n            // \"#towerId .i\"\n            let li = $(\"#ul\"+towerId +\" .\"+(3-i)); // 3-i = 1, 2, 3        [3,2,1]\n            console.log(li)\n            li.css(\"width\", 50 * size)\n            li.css(\"height\", 50)\n            // li.css(\"width\", 200)\n            li.css(\"border-radius\", 10)\n            li.css(\"background-color\", \"red\")\n        }\n\n\n        // according to game state, should therbe disc at this level?\n        // if no, move on\n        // if yes, get the right li\n        // append right shape to li\n\n\n        // if top disc, render it\n        // if middle disc, render it\n        // if bottom disc, render it\n    }\n\n    // #rectangle {\n    // width: 200px;\n    // height: 100px;\n    // background: red;\n    // border-radius: 25px;\n        // }\n}\nmodule.exports = hanoiView;\n\n//# sourceURL=webpack:///./src/hanoi-view.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const HanoiGame = __webpack_require__(/*! ../toh_solution/game.js */ \"./toh_solution/game.js\")\nconst HanoiView = __webpack_require__(/*! ./hanoi-view.js */ \"./src/hanoi-view.js\")\n$(() => {\n  const container = $('.hanoi');\n  const game = new HanoiGame();\n  new HanoiView(game, container);\n  // console.log(game.towers)\n  console.log(\"hello\")\n});\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./toh_solution/game.js":
/*!******************************!*\
  !*** ./toh_solution/game.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class Game {\n  constructor() {\n    this.towers = [[3, 2, 1], [2,1], [3,1]];\n    }\n\n  isValidMove(startTowerIdx, endTowerIdx) {\n      const startTower = this.towers[startTowerIdx];\n      const endTower = this.towers[endTowerIdx];\n\n      if (startTower.length === 0) {\n        return false;\n      } else if (endTower.length == 0) {\n        return true;\n      } else {\n        const topStartDisc = startTower[startTower.length - 1];\n        const topEndDisc = endTower[endTower.length - 1];\n        return topStartDisc < topEndDisc;\n      }\n  }\n\n  isWon() {\n      // move all the discs to the last or second tower\n      return (this.towers[2].length == 3) || (this.towers[1].length == 3);\n  }\n\n  move(startTowerIdx, endTowerIdx) {\n      if (this.isValidMove(startTowerIdx, endTowerIdx)) {\n        this.towers[endTowerIdx].push(this.towers[startTowerIdx].pop());\n        return true;\n      } else {\n        return false;\n      }\n  }\n\n  print() {\n      console.log(JSON.stringify(this.towers));\n  }\n\n  promptMove(reader, callback) {\n      this.print();\n      reader.question(\"Enter a starting tower: \", start => {\n        const startTowerIdx = parseInt(start);\n        reader.question(\"Enter an ending tower: \", end => {\n          const endTowerIdx = parseInt(end);\n          callback(startTowerIdx, endTowerIdx);\n        });\n      });\n  }\n\n  run(reader, gameCompletionCallback) {\n      this.promptMove(reader, (startTowerIdx, endTowerIdx) => {\n        if (!this.move(startTowerIdx, endTowerIdx)) {\n          console.log(\"Invalid move!\");\n        }\n\n        if (!this.isWon()) {\n          // Continue to play!\n          this.run(reader, gameCompletionCallback);\n        } else {\n          this.print();\n          console.log(\"You win!\");\n          gameCompletionCallback();\n        }\n      });\n  }\n}\n\nmodule.exports = Game;\n\n\n//# sourceURL=webpack:///./toh_solution/game.js?");

/***/ })

/******/ });
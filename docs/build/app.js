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
/******/ 	__webpack_require__.p = "/build/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./source/assets/js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./source/assets/css/app.scss":
/*!************************************!*\
  !*** ./source/assets/css/app.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./source/assets/js/app.js":
/*!*********************************!*\
  !*** ./source/assets/js/app.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../css/app.scss */ "./source/assets/css/app.scss");
document.addEventListener("DOMContentLoaded", function () {
  function badgeFilterOnClick() {
    var filterText = this.getAttribute('data-title');
    var filterGroup = this.getAttribute('data-group');
    document.querySelector('.js-on-click-filter-' + filterGroup + '[title="' + filterText + '"]').classList.remove('border-marked');
    this.remove();
    if (listSetFilters[filterGroup].indexOf(filterText) !== -1) {
      listSetFilters[filterGroup].splice(listSetFilters[filterGroup].indexOf(filterText), 1);
    }
    renderCardSetFilter();
  }
  function renderAddFilter(el) {
    var filterText = el.getAttribute('title');
    var filterGroup = el.closest('div[data-filter-group]').getAttribute('data-filter-group');
    if (el.classList.contains('border-marked')) {
      el.classList.remove('border-marked');
      if (listSetFilters[filterGroup].indexOf(filterText) !== -1) {
        listSetFilters[filterGroup].splice(listSetFilters[filterGroup].indexOf(filterText), 1);
      }
      listFilters.querySelector('.badge-filter[data-group="' + filterGroup + '"][data-title="' + filterText + '"]').remove();
    } else {
      el.classList.add('border-marked');
      if (!listFilters.querySelector('.badge-filter[data-group="' + filterGroup + '"][data-title="' + filterText + '"]')) {
        var tmp = document.createElement('template');
        tmp.innerHTML = templateFilter.split('{text}').join(filterText).replace(/\{group\}/i, filterGroup);
        listFilters.append(tmp.content);
        listSetFilters[filterGroup].push(filterText);
        document.querySelector('.badge-filter[data-group="' + filterGroup + '"][data-title="' + filterText + '"]').addEventListener('click', badgeFilterOnClick);
      }
    }
    renderCardSetFilter();
  }
  function renderCardSetFilter() {
    var listCard = document.querySelectorAll('.js-card-filter');
    var badgeFilter = listFilters.querySelectorAll('.badge-filter');
    if (badgeFilter.length) {
      listCard.forEach(function (item) {
        item.style.display = 'none';
      });
      var stringFilters = {};
      for (var key in listSetFilters) {
        if (listSetFilters[key].length) {
          stringFilters[key] = listSetFilters[key];
        }
      }
      listCard.forEach(function (item) {
        var foundFilterCount = 0;
        for (var key in stringFilters) {
          if (typeof Array.from(item.querySelectorAll("p." + key + " span")).find(function (el) {
            return stringFilters[key].indexOf(el.textContent) !== -1;
          }) !== 'undefined') foundFilterCount++;
        }
        if (foundFilterCount === Object.keys(stringFilters).length) {
          item.style.display = '';
        }
      });
    } else {
      listCard.forEach(function (item) {
        item.style.display = '';
      });
    }
    document.querySelector('html, body').scrollTop = 0;
  }
  var listFilters = document.querySelector('.js-list-applied-filters');
  if (listFilters) {
    listFilters.querySelector('.badge-filter').classList.remove('display-none');
    var templateFilter = listFilters.innerHTML;
    listFilters.querySelector('.badge-filter').remove();
    var listSetFilters = {};
    document.querySelectorAll('div[data-filter-group]').forEach(function (item) {
      listSetFilters[item.getAttribute('data-filter-group')] = [];
    });
    document.querySelectorAll('.js-on-click-filter-categories').forEach(function (item) {
      item.addEventListener('click', function (e) {
        e.preventDefault();
        renderAddFilter(this);
      });
    });
    document.querySelectorAll('.js-on-click-filter-tags').forEach(function (item) {
      item.addEventListener('click', function (e) {
        e.preventDefault();
        renderAddFilter(this);
      });
    });
  }
});

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2Fzc2V0cy9jc3MvYXBwLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2Fzc2V0cy9qcy9hcHAuanMiXSwibmFtZXMiOlsicmVxdWlyZSIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImJhZGdlRmlsdGVyT25DbGljayIsImZpbHRlclRleHQiLCJnZXRBdHRyaWJ1dGUiLCJmaWx0ZXJHcm91cCIsInF1ZXJ5U2VsZWN0b3IiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJsaXN0U2V0RmlsdGVycyIsImluZGV4T2YiLCJzcGxpY2UiLCJyZW5kZXJDYXJkU2V0RmlsdGVyIiwicmVuZGVyQWRkRmlsdGVyIiwiZWwiLCJjbG9zZXN0IiwiY29udGFpbnMiLCJsaXN0RmlsdGVycyIsImFkZCIsInRtcCIsImNyZWF0ZUVsZW1lbnQiLCJpbm5lckhUTUwiLCJ0ZW1wbGF0ZUZpbHRlciIsInNwbGl0Iiwiam9pbiIsInJlcGxhY2UiLCJhcHBlbmQiLCJjb250ZW50IiwicHVzaCIsImxpc3RDYXJkIiwicXVlcnlTZWxlY3RvckFsbCIsImJhZGdlRmlsdGVyIiwibGVuZ3RoIiwiZm9yRWFjaCIsIml0ZW0iLCJzdHlsZSIsImRpc3BsYXkiLCJzdHJpbmdGaWx0ZXJzIiwia2V5IiwiZm91bmRGaWx0ZXJDb3VudCIsIkFycmF5IiwiZnJvbSIsImZpbmQiLCJ0ZXh0Q29udGVudCIsIk9iamVjdCIsImtleXMiLCJzY3JvbGxUb3AiLCJlIiwicHJldmVudERlZmF1bHQiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxn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Q0FBQyxDQUFDRyxPQUFPLENBQUMsVUFBVUMsSUFBSSxFQUFFO01BQ3hFekIsY0FBYyxDQUFDeUIsSUFBSSxDQUFDOUIsWUFBWSxDQUFDLG1CQUFtQixDQUFDLENBQUMsR0FBRyxFQUFFO0lBQy9ELENBQUMsQ0FBQztJQUVGSixRQUFRLENBQUM4QixnQkFBZ0IsQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDRyxPQUFPLENBQUMsVUFBVUMsSUFBSSxFQUFFO01BQ2hGQSxJQUFJLENBQUNqQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUMsVUFBUzhDLENBQUMsRUFBRTtRQUN0Q0EsQ0FBQyxDQUFDQyxjQUFjLEVBQUU7UUFDbEJuQyxlQUFlLENBQUMsSUFBSSxDQUFDO01BQ3pCLENBQUMsQ0FBQztJQUNOLENBQUMsQ0FBQztJQUVGYixRQUFRLENBQUM4QixnQkFBZ0IsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDRyxPQUFPLENBQUMsVUFBVUMsSUFBSSxFQUFFO01BQzFFQSxJQUFJLENBQUNqQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUMsVUFBUzhDLENBQUMsRUFBRTtRQUN0Q0EsQ0FBQyxDQUFDQyxjQUFjLEVBQUU7UUFDbEJuQyxlQUFlLENBQUMsSUFBSSxDQUFDO01BQ3pCLENBQUMsQ0FBQztJQUNOLENBQUMsQ0FBQztFQUNOO0FBQ0osQ0FBQyxDQUFDLEMiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvYnVpbGQvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc291cmNlL2Fzc2V0cy9qcy9hcHAuanNcIik7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJyZXF1aXJlKCcuLi9jc3MvYXBwLnNjc3MnKTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24oKSB7XG4gICAgZnVuY3Rpb24gYmFkZ2VGaWx0ZXJPbkNsaWNrKCkge1xuICAgICAgICBsZXQgZmlsdGVyVGV4dCA9IHRoaXMuZ2V0QXR0cmlidXRlKCdkYXRhLXRpdGxlJyk7XG4gICAgICAgIGxldCBmaWx0ZXJHcm91cCA9IHRoaXMuZ2V0QXR0cmlidXRlKCdkYXRhLWdyb3VwJyk7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy1vbi1jbGljay1maWx0ZXItJyArIGZpbHRlckdyb3VwICsgJ1t0aXRsZT1cIicgKyBmaWx0ZXJUZXh0ICsgJ1wiXScpLmNsYXNzTGlzdC5yZW1vdmUoJ2JvcmRlci1tYXJrZWQnKTtcbiAgICAgICAgdGhpcy5yZW1vdmUoKTtcbiAgICAgICAgaWYgKGxpc3RTZXRGaWx0ZXJzW2ZpbHRlckdyb3VwXS5pbmRleE9mKGZpbHRlclRleHQpICE9PSAtMSkge1xuICAgICAgICAgICAgbGlzdFNldEZpbHRlcnNbZmlsdGVyR3JvdXBdLnNwbGljZShsaXN0U2V0RmlsdGVyc1tmaWx0ZXJHcm91cF0uaW5kZXhPZihmaWx0ZXJUZXh0KSwgMSk7XG4gICAgICAgIH1cblxuICAgICAgICByZW5kZXJDYXJkU2V0RmlsdGVyKCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVuZGVyQWRkRmlsdGVyKGVsKSB7XG4gICAgICAgIGxldCBmaWx0ZXJUZXh0ID0gZWwuZ2V0QXR0cmlidXRlKCd0aXRsZScpO1xuICAgICAgICBsZXQgZmlsdGVyR3JvdXAgPSBlbC5jbG9zZXN0KCdkaXZbZGF0YS1maWx0ZXItZ3JvdXBdJykuZ2V0QXR0cmlidXRlKCdkYXRhLWZpbHRlci1ncm91cCcpO1xuXG4gICAgICAgIGlmIChlbC5jbGFzc0xpc3QuY29udGFpbnMoJ2JvcmRlci1tYXJrZWQnKSkge1xuICAgICAgICAgICAgZWwuY2xhc3NMaXN0LnJlbW92ZSgnYm9yZGVyLW1hcmtlZCcpO1xuICAgICAgICAgICAgaWYgKGxpc3RTZXRGaWx0ZXJzW2ZpbHRlckdyb3VwXS5pbmRleE9mKGZpbHRlclRleHQpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgIGxpc3RTZXRGaWx0ZXJzW2ZpbHRlckdyb3VwXS5zcGxpY2UobGlzdFNldEZpbHRlcnNbZmlsdGVyR3JvdXBdLmluZGV4T2YoZmlsdGVyVGV4dCksIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGlzdEZpbHRlcnMucXVlcnlTZWxlY3RvcignLmJhZGdlLWZpbHRlcltkYXRhLWdyb3VwPVwiJyArIGZpbHRlckdyb3VwICsgJ1wiXVtkYXRhLXRpdGxlPVwiJyArIGZpbHRlclRleHQgKyAnXCJdJykucmVtb3ZlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlbC5jbGFzc0xpc3QuYWRkKCdib3JkZXItbWFya2VkJyk7XG4gICAgICAgICAgICBpZiAoIWxpc3RGaWx0ZXJzLnF1ZXJ5U2VsZWN0b3IoJy5iYWRnZS1maWx0ZXJbZGF0YS1ncm91cD1cIicgKyBmaWx0ZXJHcm91cCArICdcIl1bZGF0YS10aXRsZT1cIicgKyBmaWx0ZXJUZXh0ICsgJ1wiXScpKSB7XG4gICAgICAgICAgICAgICAgdmFyIHRtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RlbXBsYXRlJyk7XG4gICAgICAgICAgICAgICAgdG1wLmlubmVySFRNTCA9IHRlbXBsYXRlRmlsdGVyLnNwbGl0KCd7dGV4dH0nKS5qb2luKGZpbHRlclRleHQpLnJlcGxhY2UoL1xce2dyb3VwXFx9L2ksIGZpbHRlckdyb3VwKTtcbiAgICAgICAgICAgICAgICBsaXN0RmlsdGVycy5hcHBlbmQodG1wLmNvbnRlbnQpO1xuICAgICAgICAgICAgICAgIGxpc3RTZXRGaWx0ZXJzW2ZpbHRlckdyb3VwXS5wdXNoKGZpbHRlclRleHQpO1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5iYWRnZS1maWx0ZXJbZGF0YS1ncm91cD1cIicgKyBmaWx0ZXJHcm91cCArICdcIl1bZGF0YS10aXRsZT1cIicgKyBmaWx0ZXJUZXh0ICsgJ1wiXScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYmFkZ2VGaWx0ZXJPbkNsaWNrKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZW5kZXJDYXJkU2V0RmlsdGVyKCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVuZGVyQ2FyZFNldEZpbHRlcigpIHtcbiAgICAgICAgbGV0IGxpc3RDYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmpzLWNhcmQtZmlsdGVyJyk7XG4gICAgICAgIGxldCBiYWRnZUZpbHRlciA9IGxpc3RGaWx0ZXJzLnF1ZXJ5U2VsZWN0b3JBbGwoJy5iYWRnZS1maWx0ZXInKTtcbiAgICAgICAgaWYgKGJhZGdlRmlsdGVyLmxlbmd0aCkge1xuICAgICAgICAgICAgbGlzdENhcmQuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgICAgIGl0ZW0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgbGV0IHN0cmluZ0ZpbHRlcnMgPSB7fTtcbiAgICAgICAgICAgIGZvciAobGV0IGtleSBpbiBsaXN0U2V0RmlsdGVycykge1xuICAgICAgICAgICAgICAgIGlmIChsaXN0U2V0RmlsdGVyc1trZXldLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICBzdHJpbmdGaWx0ZXJzW2tleV0gPSBsaXN0U2V0RmlsdGVyc1trZXldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxpc3RDYXJkLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICBsZXQgZm91bmRGaWx0ZXJDb3VudCA9IDA7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIga2V5IGluIHN0cmluZ0ZpbHRlcnMpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBBcnJheS5mcm9tKGl0ZW0ucXVlcnlTZWxlY3RvckFsbChcInAuXCIgKyBrZXkgKyBcIiBzcGFuXCIpKS5maW5kKGZ1bmN0aW9uIChlbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHN0cmluZ0ZpbHRlcnNba2V5XS5pbmRleE9mKGVsLnRleHRDb250ZW50KSAhPT0gLTE7XG4gICAgICAgICAgICAgICAgICAgIH0pICE9PSAndW5kZWZpbmVkJykgZm91bmRGaWx0ZXJDb3VudCsrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoZm91bmRGaWx0ZXJDb3VudCA9PT0gT2JqZWN0LmtleXMoc3RyaW5nRmlsdGVycykubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uc3R5bGUuZGlzcGxheSA9ICcnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGlzdENhcmQuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgICAgIGl0ZW0uc3R5bGUuZGlzcGxheSA9ICcnO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaHRtbCwgYm9keScpLnNjcm9sbFRvcCA9IDA7XG4gICAgfVxuXG4gICAgdmFyIGxpc3RGaWx0ZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzLWxpc3QtYXBwbGllZC1maWx0ZXJzJyk7XG4gICAgaWYgKGxpc3RGaWx0ZXJzKSB7XG4gICAgICAgIGxpc3RGaWx0ZXJzLnF1ZXJ5U2VsZWN0b3IoJy5iYWRnZS1maWx0ZXInKS5jbGFzc0xpc3QucmVtb3ZlKCdkaXNwbGF5LW5vbmUnKTtcbiAgICAgICAgdmFyIHRlbXBsYXRlRmlsdGVyID0gbGlzdEZpbHRlcnMuaW5uZXJIVE1MO1xuICAgICAgICBsaXN0RmlsdGVycy5xdWVyeVNlbGVjdG9yKCcuYmFkZ2UtZmlsdGVyJykucmVtb3ZlKCk7XG4gICAgICAgIHZhciBsaXN0U2V0RmlsdGVycyA9IHt9O1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdkaXZbZGF0YS1maWx0ZXItZ3JvdXBdJykuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgbGlzdFNldEZpbHRlcnNbaXRlbS5nZXRBdHRyaWJ1dGUoJ2RhdGEtZmlsdGVyLWdyb3VwJyldID0gW107XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5qcy1vbi1jbGljay1maWx0ZXItY2F0ZWdvcmllcycpLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgcmVuZGVyQWRkRmlsdGVyKHRoaXMpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5qcy1vbi1jbGljay1maWx0ZXItdGFncycpLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgcmVuZGVyQWRkRmlsdGVyKHRoaXMpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbn0pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==
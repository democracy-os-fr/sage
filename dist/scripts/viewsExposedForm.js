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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "/themes/contrib/sage/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

module.exports = jQuery;

/***/ }),

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery) {/*eslint no-unused-vars: "off"*/
/* global Drupal drupalSettings */

(function ($, Drupal) {

  'use strict';

  /**
   * @type {Drupal~behavior}
   */

  Drupal.behaviors.exposedfilter_buttons = {
    attach: function(context, settings) {
      $('.views-exposed-form label.filter-sort').on('click', function (e) {
        // console.dir(e); // eslint-disable-line no-console
        var state = $(e.currentTarget).attr('data-filter-toggle');
        if( state == 'on' ) {
          $(e.currentTarget).find('.filter-sort-order').toggleClass('toggle-active');
        } else {
          $('.views-exposed-form label.filter-sort').attr('data-filter-toggle', 'off');
          $(e.currentTarget).attr('data-filter-toggle', 'on');
        }

        // Update hidden field
        // console.dir(context); // eslint-disable-line no-console
        // console.dir(e.currentTarget.form); // eslint-disable-line no-console
        var sortBy = $(e.currentTarget).attr('data-filter-sort') ;
        var sortOrder = $(e.currentTarget).find('span.filter-sort-order.toggle-active').attr('data-filter-sort') ;
        // console.dir(sortBy); // eslint-disable-line no-console
        // console.dir(sortOrder); // eslint-disable-line no-console

        $(e.currentTarget.form).find('input[name="sort_by"]').val(sortBy);
        $(e.currentTarget.form).find('input[name="sort_order"]').val(sortOrder);

      });
    },
  };

  /**
   * @type {Drupal~behavior}
   */
  Drupal.behaviors.ViewsExposedForm = {
    attach: function (context) {

      // Flat mode
      // $('.views-exposed-form .js-form-type-checkbox input',context).once('ViewsExposedForm').iCheck({
      //   checkboxClass: 'icheckbox_flat-red',
      //   radioClass: 'iradio_flat-red',
      // });

      // Line mode

      var mapping = {
        '1': 'red',
        '2': 'blue',
        '3': 'yellow',
        '4': 'green',
        '5': 'grey',
        'shared': 'aero',
        'standalone': 'aero',
        'now': 'aero',
        'soon': 'aero',
        'tdb': 'aero',
        'acteur': 'grey',
        'arc_actor': 'blue',
        'arc_proposal': 'blue',
        'project': 'yellow',
      };

      $('.views-exposed-form .js-form-type-checkbox input',context).once('ViewsExposedForm').each(function(){
        var self = $(this);
        var label = self.parent();
        var label_text = label.text();

        label.replaceWith(self);
        self.iCheck({
          checkboxClass: 'icheckbox_line-' + 'blue', // + mapping[self.val()],
          radioClass: 'iradio_line-' + 'blue', // + mapping[self.val()],
          uncheckedClass: 'pseudo-disabled',
          indeterminateClass: 'pseudo-disabled',
          insert: '<div class="icheck_line-icon"></div>' + label_text,
        })
      });

    },
  };

})(jQuery, Drupal);

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ })

/******/ });
//# sourceMappingURL=viewsExposedForm.js.map
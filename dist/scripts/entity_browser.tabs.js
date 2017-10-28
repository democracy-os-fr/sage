/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	return __webpack_require__(__webpack_require__.s = 15);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

module.exports = jQuery;

/***/ }),

/***/ 15:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery) {/* eslint no-unused-vars: "off" */
/* global Drupal drupalSettings */
/**
 * @file Entity_browser.admin.js.
 *
 * Defines the behavior of the entity browser's tab display.
 */

(function ($, Drupal, drupalSettings) {

  'use strict';

  /**
   * Registers behaviours related to tab display.
   */
  Drupal.behaviors.entityBrowserTabs = {
    attach: function (context) {
      console.log('entityBrowserTabs attach !!'); // eslint-disable-line no-console
      var $form = $(context).find('.entity-browser-form').once('entity-browser-admin');
      if (!$form.length) {
        return;
      }

      var $nav = $('<nav class="eb-tabs"></nav>');
      var $tabs = $(Drupal.theme('entityTabs'));
      $tabs.addClass('nav nav-pills');

      $form.find('.tab').each(function (index, element) {
        var $element = $(element);
        var classesArray = [];
        classesArray.push($element.attr('disabled') ? 'is-active active' : '');
        var text = $element.text();
        var textClass = text.toLowerCase().replace(/ /g, '-');
        classesArray.push(textClass);
        var classes = classesArray.join(' ');
        var tabSettings = {
          class: classes,
          id: $element.attr('id'),
          title: $(this)[0].value,
        };
        var $tab = $(Drupal.theme('entityTab', tabSettings));

        // Add a click event handler that submits the hidden input buttons.
        $tab.find('a').on('click', function (event) {
          var buttonID = $(event.currentTarget).data().buttonId;
          $form.find('#' + buttonID).trigger('click');
          event.preventDefault();
        });
        $tab.appendTo($tabs);
      });
      $tabs.appendTo($nav);
      $nav.prependTo($form);
      $form.find('.tab').css('display', 'none');
    },
  };

  /**
   * Theme function for entity browser tabs.
   *
   * @return {object}
   *   This function returns a jQuery object.
   */
  Drupal.theme.entityTabs = function () {
    return $('<ul role="navigation" aria-label="Tabs"></ul>');
  };

  /**
   * Theme function for an entity browser tab.
   *
   * @param {object} settings
   *   An object with the following keys:
   * @param {string} settings.title
   *   The name of the tab.
   * @param {string} settings.class
   *   Classes for the tab.
   * @param {string} settings.id
   *   ID for the data- button ID.
   *
   * @return {object}
   *   This function returns a jQuery object.
   */
  Drupal.theme.entityTab = function (settings) {
    return $('<li tabindex="-1"></li>')
      .addClass(settings.class)
      .append($('<a href="#"></a>').addClass(settings.class).attr('data-button-id', settings.id)
      .append(settings.title)
    );
  };

}(jQuery, Drupal, drupalSettings));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ })

/******/ });
//# sourceMappingURL=entity_browser.tabs.js.map
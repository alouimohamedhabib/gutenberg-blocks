/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blockOne/edit.js":
/*!******************************!*\
  !*** ./src/blockOne/edit.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Edit)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./editor.scss */ "./src/blockOne/editor.scss");
/* harmony import */ var _utils_ArrayFrom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/ArrayFrom */ "./src/blockOne/utils/ArrayFrom.js");
/* harmony import */ var _utils_iconOptions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/iconOptions */ "./src/blockOne/utils/iconOptions.js");
/* harmony import */ var _utils_IconsPositions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils/IconsPositions */ "./src/blockOne/utils/IconsPositions.js");
/* harmony import */ var _utils_ButtonPlaceholderContent__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utils/ButtonPlaceholderContent */ "./src/blockOne/utils/ButtonPlaceholderContent.js");











/**
 * Renders the edit component for the "Block One" block.
 *
 * This component is responsible for rendering the block editor interface, including the block controls and inspector controls.
 *
 * @param {Object} props - The component props.
 * @param {Object} props.attributes - The block attributes.
 * @param {Function} props.setAttributes - Function to update the block attributes.
 * @returns {JSX.Element} The edit component.
 */
/**
 * Renders the edit component for the "Block One" block.
 *
 * This component is responsible for rendering the block editor interface, including the block controls and inspector controls.
 *
 * @param {Object} props - The component props.
 * @param {Object} props.attributes - The block attributes.
 * @param {Function} props.setAttributes - Function to update the block attributes.
 * @returns {JSX.Element} The edit component.
 */
function Edit(props) {
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)();
  const [nbrButtonToRender, setnbrButtonToRender] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useState)();
  // 
  const {
    attributes,
    setAttributes
  } = props;
  const {
    title,
    description,
    titleColor,
    titleSize,
    descriptionColor,
    descriptionSize,
    buttons
  } = attributes;
  const {
    iconPlaceholder,
    iconPositionPlaceholder,
    labelPlaceholder,
    linkPlaceholder,
    typePlaceholder,
    showIcon
  } = _utils_ButtonPlaceholderContent__WEBPACK_IMPORTED_MODULE_9__["default"];

  // callbacks

  /**
   * Handles changes to the title size.
   *
   * Updates the `titleSize` block attribute with the new value.
   *
   * @param {number} titleSize - The new title size.
   * @returns {void}
   */
  const onChangeTitleSize = titleSize => {
    setAttributes({
      titleSize
    });
  };
  /**
   * Handles the change in the number of buttons to render.
   *
   * If the `buttons` array is empty, it creates a new array of button objects with placeholder content.
   * Otherwise, it updates the `nbrButtonToRender` state with the new button number.
   *
   * @param {number} btnNumber - The new number of buttons to render.
   * @returns {void}
   */
  /**
   * Handles changes to the number of buttons to render.
   *
   * If the `buttons` array is empty, it creates a new array of button objects with placeholder content.
   * Otherwise, it updates the `nbrButtonToRender` state with the new button number.
   *
   * @param {number} btnNumber - The new number of buttons to render.
   * @returns {void}
   */
  const onChangeButtonNumber = btnNumber => {
    let tmpButtonsContent = [...buttons];
    (0,_utils_ArrayFrom__WEBPACK_IMPORTED_MODULE_6__["default"])(btnNumber).map((_, index) => {
      if (!tmpButtonsContent[index] || tmpButtonsContent[index]?.label === '') tmpButtonsContent.push({
        label: labelPlaceholder,
        link: linkPlaceholder,
        icon: iconPlaceholder,
        iconPosition: iconPlaceholder,
        showIcon,
        type: typePlaceholder
      });
    });
    setAttributes({
      buttons: [...tmpButtonsContent]
    });
    setnbrButtonToRender(btnNumber);
  };
  /**
   * Handles changes to the properties of a specific button.
   *
   * Updates the `buttons` attribute with the new button object at the specified index.
   *
   * @param {number} index - The index of the button to update.
   * @param {object} buttonObj - The new button object with updated properties.
   * @returns {void}
   */
  const onChangeButtonProps = (index, buttonObj) => {
    console.log(buttonObj);
    let tmpButtons = buttons.map((button, btnIndex) => btnIndex === index ? button = {
      ...buttonObj
    } : button);
    // debugger;
    setAttributes({
      buttons: [...tmpButtons]
    });
  };

  /**
   * Handles changes to the description size.
   *
   * Updates the `descriptionSize` attribute with the new value.
   *
   * @param {string} descriptionSize - The new description size value.
   * @returns {void}
   */
  const onChangeDescriptionSize = descriptionSize => {
    setAttributes({
      descriptionSize
    });
  };
  const onChangeTitleColor = titleColor => props.setAttributes({
    titleColor
  });
  const onChangeDescriptionColor = descriptionColor => props.setAttributes({
    descriptionColor
  });
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.PanelColorSettings, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Les couleurs 🎨', 'testmohamedhabibaloui'),
    colorSettings: [{
      value: titleColor,
      onChange: onChangeTitleColor,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Couleur de text ', 'testmohamedhabibaloui')
    }, {
      value: descriptionColor,
      onChange: onChangeDescriptionColor,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Couleur de la description ', 'testmohamedhabibaloui')
    }]
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Taille du text', 'testmohamedhabibaloui')
  }, titleSize && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Taille de title', 'testmohamedhabibaloui'),
    value: titleSize,
    options: [{
      label: 'Small',
      value: '12px'
    }, {
      label: 'Medium',
      value: '16px'
    }, {
      label: 'Large',
      value: '24px'
    }, {
      label: 'Extra Large',
      value: '32px'
    }],
    onChange: onChangeTitleSize
  }), descriptionSize && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Taille de la description', 'testmohamedhabibaloui'),
    value: descriptionSize,
    options: [{
      label: 'Small',
      value: '12px'
    }, {
      label: 'Medium',
      value: '16px'
    }, {
      label: 'Large',
      value: '24px'
    }, {
      label: 'Extra Large',
      value: '32px'
    }],
    onChange: onChangeDescriptionSize
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Les boutons labelés', 'testmohamedhabibaloui')
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Combien de bouton à afficher', 'testmohamedhabibaloui'),
    value: nbrButtonToRender,
    options: [{
      label: 'Pas de bouton',
      value: '0'
    }, {
      label: 'Un seul bouton',
      value: '1'
    }, {
      label: 'Deux boutons',
      value: '2'
    }],
    onChange: val => onChangeButtonNumber(val)
  }), nbrButtonToRender > 0 ? (0,_utils_ArrayFrom__WEBPACK_IMPORTED_MODULE_6__["default"])(nbrButtonToRender).map((_, index) => {
    var _buttons$index$showIc;
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
      label: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.Fragment, null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Label du bouton', 'testmohamedhabibaloui'), " ", index + 1),
      value: buttons[index]?.label,
      onChange: val => onChangeButtonProps(index, {
        ...buttons[index],
        label: val
      })
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
      label: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.Fragment, null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Lien du bouton', 'testmohamedhabibaloui'), " ", (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("b", null, index + 1)),
      value: buttons[index]?.link,
      onChange: val => onChangeButtonProps(index, {
        ...buttons[index],
        link: val
      })
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.CheckboxControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Bouton primaire', 'testmohamedhabibaloui'),
      checked: buttons[index].type === 'primary' ? true : false,
      onChange: val => onChangeButtonProps(index, {
        ...buttons[index],
        type: val ? 'primary' : 'secondary'
      })
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
      label: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.Fragment, null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Selectionner une icone', 'testmohamedhabibaloui'), " ", (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("b", null, index + 1)),
      value: buttons[index]?.icon,
      options: _utils_iconOptions__WEBPACK_IMPORTED_MODULE_7__["default"],
      onChange: val => onChangeButtonProps(index, {
        ...buttons[index],
        icon: val
      })
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.CheckboxControl, {
      __nextHasNoMarginBottom: true,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Afficher l\'icone', 'testmohamedhabibaloui'),
      checked: (_buttons$index$showIc = buttons[index].showIcon) !== null && _buttons$index$showIc !== void 0 ? _buttons$index$showIc : true,
      onChange: val => onChangeButtonProps(index, {
        ...buttons[index],
        showIcon: val
      })
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
      label: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.Fragment, null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('La position de l\'icone', 'testmohamedhabibaloui'), " ", (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("b", null, index + 1)),
      value: buttons[index]?.iconPosition,
      options: _utils_IconsPositions__WEBPACK_IMPORTED_MODULE_8__["default"],
      onChange: val => onChangeButtonProps(index, {
        ...buttons[index],
        iconPosition: val
      })
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "splitter"
    }, " "));
  }) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.Fragment, null))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...blockProps
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
    style: {
      color: titleColor,
      fontSize: titleSize !== null && titleSize !== void 0 ? titleSize : 12
    },
    tagName: "h2",
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Un text ici...', 'testmohamedhabibaloui'),
    value: title,
    className: "title",
    onChange: title => props.setAttributes({
      title
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
    style: {
      color: descriptionColor,
      fontSize: descriptionSize !== null && descriptionSize !== void 0 ? descriptionSize : 12
    },
    tagName: "p",
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Description..', 'testmohamedhabibaloui'),
    value: description,
    className: "description",
    onChange: description => props.setAttributes({
      description
    })
  }), nbrButtonToRender > 0 && (0,_utils_ArrayFrom__WEBPACK_IMPORTED_MODULE_6__["default"])(nbrButtonToRender).map((_, index) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
    className: `button ${buttons[index]?.iconPosition === 'right' ? 'reverse' : ''}`,
    isPrimary: buttons[index]?.type === 'primary' ? true : false,
    onClick: () => window.location.href = buttons[index].link
  }, buttons[index].showIcon && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Icon, {
    icon: buttons[index]?.icon,
    className: "button--icon"
  }), buttons[index]?.label ? buttons[index]?.label : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Label du bouton ...', 'testmohamedhabibaloui')))));
}

/***/ }),

/***/ "./src/blockOne/index.js":
/*!*******************************!*\
  !*** ./src/blockOne/index.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/blockOne/style.scss");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/blockOne/edit.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./block.json */ "./src/blockOne/block.json");
/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */


/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */


/**
 * Internal dependencies
 */



/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_3__.name, {
  /**
   * @see ./edit.js
   */
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"]
});

/***/ }),

/***/ "./src/blockOne/utils/ArrayFrom.js":
/*!*****************************************!*\
  !*** ./src/blockOne/utils/ArrayFrom.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
  * Creates an array of a specified length, with each element being the index of that element.
  *
  * @param {number} itemsNbr - The number of items to include in the array.
  * @returns {number[]} An array of numbers from 0 to `itemsNbr - 1`.
  */
const ArrayFrom = itemsNbr => {
  return Array.from({
    length: itemsNbr
  }, (_, index) => index);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ArrayFrom);

/***/ }),

/***/ "./src/blockOne/utils/ButtonPlaceholderContent.js":
/*!********************************************************!*\
  !*** ./src/blockOne/utils/ButtonPlaceholderContent.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  "linkPlaceholder": "",
  "labelPlaceholder": "",
  "iconPlaceholder": "smiley",
  "iconPositionPlaceholder": "left",
  "showIcon": true,
  "typePlaceholder": "primary"
});

/***/ }),

/***/ "./src/blockOne/utils/IconsPositions.js":
/*!**********************************************!*\
  !*** ./src/blockOne/utils/IconsPositions.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([{
  label: 'Left',
  value: 'left'
}, {
  label: 'Right',
  value: 'right'
}]);

/***/ }),

/***/ "./src/blockOne/utils/iconOptions.js":
/*!*******************************************!*\
  !*** ./src/blockOne/utils/iconOptions.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([{
  label: 'Smiley',
  value: 'smiley'
}, {
  label: 'Heart',
  value: 'heart'
}, {
  label: 'Star',
  value: 'star-filled'
}]);

/***/ }),

/***/ "./src/blockOne/editor.scss":
/*!**********************************!*\
  !*** ./src/blockOne/editor.scss ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blockOne/style.scss":
/*!*********************************!*\
  !*** ./src/blockOne/style.scss ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = window["React"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "./src/blockOne/block.json":
/*!*********************************!*\
  !*** ./src/blockOne/block.json ***!
  \*********************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"mha/testmohamedhabibaloui","version":"0.1.0","title":"Test Mohamed Habib Aloui","category":"widgets","icon":"smiley","description":"A block that will display some informations on client side","example":{},"supports":{"html":false},"textdomain":"testmohamedhabibaloui","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css","viewScript":"file:./view.js","attributes":{"title":{"type":"string","selector":"texty","source":"text","default":""},"titleColor":{"type":"string"},"titleSize":{"type":"string","default":"16px"},"description":{"type":"string","selector":"texty","source":"text","default":""},"descriptionColor":{"type":"string"},"descriptionSize":{"type":"string","default":"16px"},"buttons":{"type":"array","default":[]}},"keywords":["mohamed","Habib","test","candidature"]}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"blockOne/index": 0,
/******/ 			"blockOne/style-index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = globalThis["webpackChunktestmohamedhabibaloui"] = globalThis["webpackChunktestmohamedhabibaloui"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["blockOne/style-index"], () => (__webpack_require__("./src/blockOne/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map
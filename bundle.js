/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./app.js":
/*!****************!*\
  !*** ./app.js ***!
  \****************/
/***/ (() => {

eval("async function signPDF() {\n    const formData = new FormData();\n    formData.append('pdf', document.getElementById('pdfFile').files[0]);\n    formData.append('p12', document.getElementById('p12File').files[0]);\n    formData.append('password', document.getElementById('p12Password').value);\n\n    try {\n        const response = await fetch('/sign', {\n            method: 'POST',\n            body: formData\n        });\n        \n        if (!response.ok) throw new Error('Signing failed');\n        \n        const blob = await response.blob();\n        const url = URL.createObjectURL(blob);\n        const a = document.createElement('a');\n        a.href = url;\n        a.download = 'signed.pdf';\n        a.click();\n        URL.revokeObjectURL(url);\n    } catch (error) {\n        console.error('Error:', error);\n        alert('Failed to sign PDF');\n    }\n}\n\n// Make signPDF available globally\nwindow.signPDF = signPDF;\n\n//# sourceURL=webpack://pdf-signer/./app.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./app.js"]();
/******/ 	
/******/ })()
;
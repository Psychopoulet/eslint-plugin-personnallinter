"use strict";

module.exports = {

	"plugins": [
		"personnallinter",
		"@typescript-eslint",
		"react",
		"react-hooks"
	],
	"extends": [
		"./ts-front"
	],

	"parserOptions": {
		"EXPERIMENTAL_useProjectService": true,
		"ecmaVersion": "latest",
		"ecmaFeatures": {
			"jsx": true
		}
	},

	"rules": {
		"jsx-quotes": [ "error", "prefer-double" ]
	},

	"settings": {
		"react": {
			"version": "detect"
		}
	}

};
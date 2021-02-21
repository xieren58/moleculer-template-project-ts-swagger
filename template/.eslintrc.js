module.exports = {
	root: true,
	env: {
		browser: true,
		commonjs: true,
		es6: true,
		node: true,
		jquery: false,
		jest: true,
		jasmine: true,
	},
	ignorePatterns: [ "test/*"],
	parser: "@typescript-eslint/parser",
	extends: [
		"plugin:@typescript-eslint/recommended",
		"prettier/@typescript-eslint",
		"plugin:prettier/recommended",
	],
	parserOptions: {
		sourceType: "module",
		ecmaVersion: "2018",
		project: "tsconfig.json",
	},
	plugins: ["prefer-arrow", "import", "@typescript-eslint"],
	rules: {
		// Disabled Rules
		"@typescript-eslint/explicit-function-return-type": "off",
		"@typescript-eslint/class-name-casing": "off",
		"@typescript-eslint/interface-name-prefix": "off",
		"@typescript-eslint/no-explicit-any": "off",
		"@typescript-eslint/no-parameter-properties": "off",
		"@typescript-eslint/no-use-before-define": "off",
		complexity: "off",
		"no-console": "off",
		"no-fallthrough": "off",
		"no-invalid-this": "off",
		"valid-typeof": "off",

		// Enabled rules
		"@typescript-eslint/adjacent-overload-signatures": "error",
		"@typescript-eslint/array-type": "error",
		"@typescript-eslint/await-thenable": "error",
		"@typescript-eslint/naming-convention": [
			"error",
			// { selector: "default", format: ["camelCase", "snake_case"] },
			{ selector: "variable", format: ["camelCase", "UPPER_CASE"] },
			{ selector: "parameter", format: ["camelCase"], leadingUnderscore: "allow" },
			{
				selector: "memberLike",
				modifiers: ["private"],
				format: ["camelCase"],
				leadingUnderscore: "require",
			},
			{ selector: "typeLike", format: ["PascalCase"] },
		],
		"@typescript-eslint/no-unnecessary-type-assertion": "error",
		"@typescript-eslint/no-unused-vars": "warn",
		"@typescript-eslint/no-unnecessary-qualifier": "error",
		"@typescript-eslint/no-for-in-array": "error",
		"@typescript-eslint/promise-function-async": "error",
		"@typescript-eslint/restrict-plus-operands": "error",
		"@typescript-eslint/ban-types": "error",
		"@typescript-eslint/consistent-type-assertions": "error",
		"@typescript-eslint/consistent-type-definitions": "error",
		"@typescript-eslint/explicit-member-accessibility": [
			"error",
			{
				accessibility: "explicit"
			}
		],
		"@typescript-eslint/indent": [
			"warn",
			4,
			{
				"FunctionDeclaration": {
					"parameters": "first"
				},
				"FunctionExpression": {
					"parameters": "first"
				}
			}
		],
		"@typescript-eslint/member-delimiter-style": [
			"error",
			{
				multiline: {
					delimiter: "semi",
					requireLast: true
				},
				singleline: {
					delimiter: "semi",
					requireLast: false
				}
			}
		],
		"@typescript-eslint/member-ordering": "error",
		"@typescript-eslint/no-empty-function": "error",
		"@typescript-eslint/no-empty-interface": "error",
		"@typescript-eslint/no-misused-new": "error",
		"@typescript-eslint/no-namespace": "error",
		"@typescript-eslint/no-var-requires": "error",
		"@typescript-eslint/prefer-for-of": "error",
		"@typescript-eslint/prefer-function-type": "error",
		"@typescript-eslint/prefer-namespace-keyword": "error",
		"@typescript-eslint/quotes": [
			"error",
			"double",
			{
				avoidEscape: true
			}
		],
		"@typescript-eslint/semi": ["error", "always"],
		"@typescript-eslint/triple-slash-reference": "error",
		"@typescript-eslint/type-annotation-spacing": "error",
		"@typescript-eslint/unified-signatures": "error",
		"arrow-body-style": "error",
		"arrow-parens": ["error", "as-needed"],
		camelcase: "error",
		"capitalized-comments": "error",
		"comma-dangle": ["error", "always-multiline"],
		"constructor-super": "error",
		curly: "error",
		"dot-notation": "error",
		"eol-last": "error",
		eqeqeq: ["error", "smart"],
		"guard-for-in": "error",
		"id-blacklist": ["error", "any", "Number", "number", "String", "string", "Boolean", "boolean", "Undefined", "undefined"],
		"id-match": "error",
		"import/order": "error",
		"max-classes-per-file": ["error", 1],
		"max-len": [
			"error",
			{
				"ignoreUrls": true ,
				code: 160
			}
		],
		"new-parens": "error",
		"no-bitwise": "error",
		"no-caller": "error",
		"no-cond-assign": "error",
		"no-debugger": "error",
		"no-empty": "error",
		"no-eval": "error",
		"no-multiple-empty-lines": "error",
		"no-new-wrappers": "error",
		"no-shadow": [
			"error",
			{
				hoist: "all"
			}
		],
		"no-throw-literal": "error",
		"no-trailing-spaces": "error",
		"no-undef-init": "error",
		"no-underscore-dangle": "error",
		"no-unsafe-finally": "error",
		"no-unused-expressions": "error",
		"no-unused-labels": "error",
		"no-var": "error",
		"object-shorthand": "error",
		"one-var": ["error", "never"],
		"prefer-arrow/prefer-arrow-functions": "error",
		"prefer-const": [
			"error",
			{
				destructuring: "all",
				ignoreReadBeforeAssign: true,
			},
        ],
		"quote-props": ["error", "consistent-as-needed"],
		radix: "error",
		"space-before-function-paren": [
			"error",
			{
				anonymous: "never",
				asyncArrow: "always",
				named: "never"
			}
		],
		"spaced-comment": "error",
		"use-isnan": "error",
		"no-mixed-spaces-and-tabs": ["warn"],
	}
};

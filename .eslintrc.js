module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
				"es6": true,
				"jest": true,
        "node": true
    },
		"extends": ["eslint:recommended","plugin:react/recommended"],
		"parser": "babel-eslint",
		"rules": {
			"strict": 0
		},
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true
        },
        "sourceType": "module"
    },
    "plugins": [
			"react"
    ],
    "rules": {
        "indent": [
            "error",
            "tab"
				],
				"react/prop-types": 0,
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
				],
				"object-curly-spacing": [
					"error",
					"always"
				]
    }
};

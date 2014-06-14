# TF-CSS

Combine CSS files and use variables.

Install using:

	npm install tfcss

## Example Usage

	var tfcss = require('tfcss');
	tfcss.bundle('config.json', function(err, css) {
		// Do something with bundled css...
	});

## Example Config

	{
		"files": [
			"style1.css",
			"style2.css"
		],
		"values": {
			"dark": "rgb(32,32,32)",
			"medium": "rgb(64,64,64)",
			"light": "rgb(224,224,224)"
		}
	}

## Example CSS With Variables

	div {
		background: $dark;
		color: $light;
	}

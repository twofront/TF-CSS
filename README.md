# TF-CSS

Combine CSS files and use variables.

## Command Line Usage

Install using:

	npm install tfcss -g

Note: sudo may be needed.

Create a json file in the format of `Example Config` below.

Run using:

	tfcss config.json -o bundle.css

Where config.json is your config file and bundle.css is the file to be outputted.

Note that config.json and bundle.css are the default values, so if you would like to use those exact names you only need to type:

	tfcss

from the directory where config.json is located.

## App Usage

Install using:

	npm install tfcss

### Example Usage

	var tfcss = require('tfcss');
	tfcss.bundle('config.json', function(err, css) {
		// Do something with bundled css...
	});

### Example Config

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

### Example CSS With Variables

	div {
		background: $dark;
		color: $light;
	}

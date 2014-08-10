#! /usr/bin/env node

var fs = require('fs');
var stdio = require('stdio');
var tfcss = require('../');

var ops = stdio.getopt({
		'output': {
			key: 'o', args: 1,
			description: 'Name and path of output css file.'
		}
	},
	'[INPUT]'
);

var input = process.cwd()+'/config.json';
var output = process.cwd()+'/bundle.css'

if (ops.args && ops.args.length > 0) {
	input = process.cwd()+'/'+ops.args[0];
}

if (ops.output) {
	output = process.cwd()+'/'+ops.output;
}

tfcss.bundle(input, function(err, css) {
	if (err) {
		console.log(err);
		return;
	}
    fs.writeFile(output, css, function(err, res) {
    	if (err){
    		console.log(err);
    	} else {
			console.log('Done');
		}
    });
});

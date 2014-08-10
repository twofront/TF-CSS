
var path = require('path');
var fs = require('fs');
var async = require('async');

exports.bundle = function(config, options, callback) {
	if(!(this instanceof exports.bundle)) return new exports.bundle(config, options, callback);
	
	if (callback === undefined) {
		callback = options;
		options = {};
	}

	function compile() {
		fs.readFile(config, function(err, file1) {
			if (err) {
				console.log(err);
				return;
			}
			var cfg = JSON.parse(file1);
			var allcss = '';
			var filefuncs = [];
			for (var i=0; i<cfg.files.length; i++) {
				(function(f) {
					filefuncs.push(function(callback2) {
						fs.readFile(path.dirname(config)+'/'+f, {encoding: 'utf8'}, function(err, file2) {
							file2 = file2.replace(/\$([a-zA-Z]+)/g, function(a, b, c) {
								return cfg.values[b];
							});
							allcss += file2 + '\n';
							callback2(null, true);
						});
					});
				})(cfg.files[i]);
			}
			async.parallel(filefuncs, function(err, res) {
				callback(null, allcss);
			});
		});
	}

	if (options.watch) {
		fs.watch(config, compile);
	}

	compile();
};

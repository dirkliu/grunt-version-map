/*
 * grunt-versionjson
 * https://github.com/Administrator/grunt-versionjson
 *
 * Copyright (c) 2019 dirkliu
 * Licensed under the MIT license.
 */

'use strict';

var fs = require('fs'),
  path = require('path'),
  crypto = require('crypto');

module.exports = function(grunt) {
  function md5(filepath, algorithm, encoding, fileEncoding) {
    var hash = crypto.createHash(algorithm);
    grunt.log.verbose.write('Hashing ' + filepath + '...');
    hash.update(grunt.file.read(filepath), fileEncoding);
    return hash.digest(encoding);
  }

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('versionjson', 'The best Grunt plugin ever.', function() {
    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
      encoding: 'utf8',
      algorithm: 'md5',
      // length: 8
    });

    // Iterate over all specified file groups.
    var versionMap = {}
    grunt.log.write('files: ').ok(this.files);
    this.files.forEach(function(filePair) {
      filePair.src.forEach(function(f) {
        var hash = md5(f, options.algorithm, 'hex', options.encoding);
          // prefix = hash.slice(0, options.length),
          // renamed = [prefix, path.basename(f)].join('.'),
          // outPath = path.resolve(path.dirname(f), renamed);
          versionMap[path.basename(f)] = hash
        grunt.verbose.ok().ok(hash);
        // fs.renameSync(f, outPath);
        // grunt.log.write(f + ' ').ok(renamed);

      });
    });

    fs.writeFileSync('./version.json', JSON.stringify(versionMap,"","\t"), function(err){
      if (err) {res.status(500).send('Server is error...')}
    })
  });

};


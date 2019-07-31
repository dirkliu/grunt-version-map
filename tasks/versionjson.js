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


  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks
  grunt.registerMultiTask('versionjson', 'The best Grunt plugin ever.', function() {
    console.log('version json works')
  });

};

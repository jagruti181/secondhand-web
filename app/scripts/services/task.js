/*
  Copyright (c) 2013 Ankur Sethi <contact@ankursethi.in>
  Licensed under the terms of the MIT license.
  See the file LICENSE for copying permissions.
*/


//
// The Task resource.
//
angular.module('SecondhandApp')
  .factory('Task', ['$resource', 'Config', function($resource, Config) {
    'use strict';

    var Task = $resource(Config.BASE_RESOURCE_URL + 'task/:id');
    return Task;
  }]);

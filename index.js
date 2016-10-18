'use strict';
/* @flow */

var util = require('util');
var vm = require('vm');

/**
 * console.log('util.inspect(vm)',util.inspect(vm));
 *
   {
    Script: [Function: ContextifyScript],
    createScript: [Function],
    createContext: [Function],
    runInDebugContext: [Function],
    runInContext: [Function],
    runInNewContext: [Function],
    runInThisContext: [Function],
    isContext: [Function: isContext]
   }
 */

var code = [
  'console.log(\'first\');',
  'console.log(\'second\');',
  ';function foo(x) {return x;};',
  'foo(\'not shown\');',
  'foo(\'hello, world\');'
].join('');

var context = {
  storeLogs:[],
  console:{
    log:(args) => {
      context.storeLogs.push(args);
    }
  }
};

var vmResult = vm.runInNewContext(code,context);

console.log('util.inspect(context.storeLogs)',util.inspect(context.storeLogs));
console.log('util.inspect(vmResult)',util.inspect(vmResult));

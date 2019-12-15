import { aString as theString, bString } from './a';
import * as strings from './a';
console.log(strings.aString);

import { reverse, isOdd } from '../utils';

console.log(reverse('test'), isOdd(1));

import customStringName from './a';
console.log(customStringName); // default

// import test = require('./a');
// console.log(test); // test

if (Math.random() >= 0.5) {
  import('./a').then(a => console.log('The message is:', a.aString));
}

// import * as config from './config.json';
// console.log(config.userSetting1);

import { cube } from 'cube';
cube(5);

declare module 'cube' {
  export function cube(): string;
}

cube();

import $ from 'jquery';

declare global {
  interface JQuery {
    debug(): JQuery;
  }
}

$(document).ready(() => console.log('jQuery'));

$().debug = function() {
  console.debug($(this));
  return $(this);
}

$(document).ready(() => {
  $('.test').debug();
});

import { special } from 'deep/x';
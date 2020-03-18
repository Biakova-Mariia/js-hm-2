'use strict';

const formatString = function(string) {
  let stringLength = Number(string.length);
  if (stringLength > 40) {
    string = string.substring(0, 40) + '...';
  }
  return string;
};
console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
console.log(
  formatString(
    'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
  ),
);
console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
console.log(formatString('Curabitur ligula sapien.'));

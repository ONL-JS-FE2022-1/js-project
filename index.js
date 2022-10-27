/*
Objects

Об'єкти мають:
- властивості
- методи

*/

let obj = {
  color: 'red',
  fontSize: 2
}

let bulb = {
  producer: 'Philips',
  lightness: 200,
  power: '200W',
  cap: 'small',
  on: function() {
    return 'The light on!'
  }
}

console.log(bulb.lightness);
console.log(bulb.on());
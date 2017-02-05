"use strict";
function toRGB(value) {
  if (value.length > 7) {
    console.log('Error! Number excepted');
  } else if (value.length == 4) {
    let hex = value.slice(1),
        r = hex.slice(0,1),
        g = hex.slice(1,2),
        b = hex.slice(2,3);
    r = parseInt(r, 16);
    g = parseInt(g, 16);
    b = parseInt(b, 16);

    return console.log([r,g,b]);
  } else {
    let hex = value.slice(1),
        r = hex.slice(0,2),
        g = hex.slice(2,4),
        b = hex.slice(4,6);
    r = parseInt(r, 16);
    g = parseInt(g, 16);
    b = parseInt(b, 16);

    return console.log([r,g,b]);
  }
}

function toHEX(r,g,b) {
  let hex = '';
  r = r.toString(16);
  g = g.toString(16);
  b = b.toString(16);
  if (r.length == 1)
    r = '0'+r;
  if (g.length == 1)
    g = '0'+g;
  if (b.length == 1)
    b = '0'+b;
  hex = r+g+b;
  console.log(hex);
}

toRGB('#5e7');
toHEX(255,0,125);
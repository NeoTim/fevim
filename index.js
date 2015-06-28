var a = 'I am student';
var b = a.split('');
var c = [];

for(var i = 0; i < b.length; i++) {
    c.unshift(b[i]);
}

var d = c.join('');

console.log(b.reverse().join(''));

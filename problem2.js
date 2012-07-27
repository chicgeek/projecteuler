var total = 0;
var x = 1;
var y = 1;

while (x<4000000) {
	if (x%2===0) {
		total = total + x;
	}
	z = x + y;
	x = y;
	y = z;
}

console.log(total);
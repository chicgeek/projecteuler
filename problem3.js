var number = 600851475143;
var lastusedprime = 1;

function isprime(x) {
	for (y = 2; y < x; y++) {
		if (x%y === 0) {
			return false;
		}
	}
	return true;
}

function nextprime(x) {
	while(true) {
		x++;
		if (isprime(x)) {
			return x;
		}
	}
}

while(lastusedprime != number) {
	lastusedprime = nextprime(lastusedprime);
	if (number%lastusedprime === 0 && lastusedprime != number) {
		number = number/lastusedprime;
		lastusedprime = 1;
	}
}

console.log(number);

/*

var number = 600851475143;
var answer;

while (true) {
	for (x = 3; x < number; x++) {
		for (y = 3; y < x; y++) {
			if (x%y === 0) {
				
			}
		}
	}
}
*/




/*
var number = 600851475143;
var answer;
var x = 3;

while (x < Math.floor(number/3)) {
	if (number%x === 0) {
		if (number = number/x) {
			answer = x;
			break;
		}
		else {
			number = number/x;
		}
	}
	x++;
}

console.log(answer);
*/

/*
var number = 600851475143;
var highfactor;
var answer;

for (x =  3 ; x < Math.floor(number/3) ; x++) {
	if (number%x === 0) {
		highfactor = number/x;
		for (y = 2; y < Math.floor(number/2) ; y++) {
			if (highfactor%y === 0) {
				answer = highfactor;
				break;
			}
		}
	}
}

console.log(answer);
*/

/*
var number = 600851475143;
var answer;

for (x = Math.floor(number/3) ; x > 0 ; x--) {
	var isprime = true;
	for (y = 2; y < x ; y++) {
		if (x%y === 0) {
			isprime = false;
			y = x;
		}
	}
	if (isprime && number%x === 0) {
		answer = x;
		break;
	}
}

console.log(answer);
*/
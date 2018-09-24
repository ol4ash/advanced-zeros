module.exports = function getZerosCount(number, base) {

var prime = [2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97,101,103,107,109,113,127,131,137,139,149,151,157,163,167,173,179,181,191,193,197,199,211,223,227,229,233,239,241,251];

var multiplier = [];
var quantity = [];
var count=0, a=0;
var baseNum=base;

for (var i=0; baseNum/prime[i]!=1; ) {

	a = baseNum/prime[i];

	if (parseInt(a)===a) {
		count++;
		baseNum = a;
	}
	else {
		multiplier.push(prime[i]);
		quantity.push(count);
		count=0;
		i++
	}
}
count++;
multiplier.push(prime[i]);
quantity.push(count);

for (var i=0, len=quantity.length; i<=len; i++)
	if (quantity[i] ===0) {
		quantity.splice(i,1);
		multiplier.splice(i,1);
		i--;
	}

function countMultipliers (x) {

	var i = 1;
	var count = 0;

	while (parseInt(number/Math.pow(x,i))>0) {

	count = count + parseInt(number/Math.pow(x,i));
	i++;}

	return count
}

var amount = [];
for (var y=0, len=multiplier.length; y<len; y++) {
	amount.push(parseInt(countMultipliers(multiplier[y])/quantity[y]));
}
amount.sort(function(a,b){return a - b});

let zeros = amount[0];

return zeros;


}
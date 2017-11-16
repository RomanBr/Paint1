var R1 = 0, R2 = 0, R3 = 0, R4 = 0, R5 = 0, R6 = 0, R7 = 0, R8 = 0, R9 = 0;
var mathFun = (function () {return Math; } )();

mathFun.Median = function (values) {
	if ((arguments.length > 1) && (typeof Arr == 'number')) Arr = [].slice.call(arguments);
	
	values.sort(function(a, b) { return a - b; });

	var half = Math.floor(values.length / 2);

	if (values.length % 2)
		return values[half];
	else
		return (values[half - 1] + values[half]) / 2.0;
}

mathFun.Max = function (Arr) {
	if ((arguments.length > 1) && (typeof Arr == 'number')) Arr = [].slice.call(arguments);
	return Arr.sort(function(a, b){return b-a})[0];
	/*
	 * Arr = Arr.sort(function(a, b){return a-b}); return Arr.pop();
	 */
}

function Max1(Arr) {
	if ((arguments.length > 1) && (typeof Arr == 'number')) Arr = [].slice.call(arguments);
	return Arr.sort(function(a, b){return b-a})[1];
	/*
	 * Arr = Arr.sort(function(a, b){return a-b}); return Arr.pop();
	 */
}

mathFun.Range = function (Arr) {
	if ((arguments.length > 1) && (typeof Arr == 'number')) Arr = [].slice.call(arguments)
	
	Arr = Arr.sort(function(a, b){return b-a;});
	if (Arr.length == 1) return NaN;
	return Arr[0] - Arr.pop();
}

mathFun.Min = function (Arr) {
	if ((arguments.length > 1) && (typeof Arr == 'number')) Arr = [].slice.call(arguments);
	return Arr.sort(function(a, b){return a-b;})[0];
}

mathFun.Or  = function (Arr) {
	if ((arguments.length > 1) && (typeof Arr == 'number')) Arr = [].slice.call(arguments);
	return Arr.reduce(function(a, b) { return a | b; });
}

function Avg(Arr) {
	if ((arguments.length > 1) && (typeof Arr == 'number')) Arr = [].slice.call(arguments);
	var sum = Arr.reduce(function(a, b) { return a + b; });
	return sum / Arr.length;
}

function Avg2(Arr) {
	if ((arguments.length > 1) && (typeof Arr == 'number')) Arr = [].slice.call(arguments);
	return Arr.reduce(function(a, b) { return (a + b) / 2; });
}

function Avg3(Arr) {
	if ((arguments.length > 1) && (typeof Arr == 'number')) Arr = [].slice.call(arguments);
	return Arr.reverse().reduce(function(a, b) { return (a + b) / 2; });
}


function Var1(Arr) { //Population
	if ((arguments.length > 1) && (typeof Arr == 'number')) Arr = [].slice.call(arguments);
	var mean = Arr.reduce(function(a, b) { return a + b; });
	mean /= Arr.length;
	
	Arr = Arr.map(function(num) { return Math.pow(num - mean, 2) });
	var sum = Arr.reduce(function(a, b) { return a + b; });
	return sum / (Arr.length);
}

function Var2(Arr) { //Sample
	if ((arguments.length > 1) && (typeof Arr == 'number')) Arr = [].slice.call(arguments);
	var mean = Arr.reduce(function(a, b) { return a + b; });
	mean /= Arr.length;
	
	Arr = Arr.map(function(num) { return Math.pow(num - mean, 2) });
	var sum = Arr.reduce(function(a, b) { return a + b; });
	return sum / (Arr.length - 1);
}

function Var3(Arr) {
	if ((arguments.length > 1) && (typeof Arr == 'number')) Arr = [].slice.call(arguments);
	var mean = Arr.sort(function(a, b){return b - a; })[0];
	
	Arr = Arr.map(function(num) { return Math.pow(num - mean, 2) });
	var sum = Arr.reduce(function(a, b) { return a + b; });
	return sum / (Arr.length);
}

function Deviation1(Arr) { //Population
	if ((arguments.length > 1) && (typeof Arr == 'number')) Arr = [].slice.call(arguments);
	var mean = Arr.reduce(function(a, b) { return a + b; }) / Arr.length;

	Arr = Arr.map(function(num) { return Math.pow(num - mean, 2) });
	var sum = Arr.reduce(function(a, b) { return a + b; });
	return Math.sqrt(sum / (Arr.length));
}

function Deviation2(Arr) { //Sample 
	if ((arguments.length > 1) && (typeof Arr == 'number')) Arr = [].slice.call(arguments);
	var mean = Arr.reduce(function(a, b) { return a + b; }) / Arr.length;

	Arr = Arr.map(function(num) { return Math.pow(num - mean, 2) });
	var sum = Arr.reduce(function(a, b) { return a + b; });
	return Math.sqrt(sum / (Arr.length - 1));
}

function Deviation3(Arr) {
	if ((arguments.length > 1) && (typeof Arr == 'number')) Arr = [].slice.call(arguments);
	var mean = Arr.sort(function(a, b){return b-a; })[0];
	
	Arr = Arr.map(function(num) { return Math.pow(num - mean, 2) });
	var sum = Arr.reduce(function(a, b) { return a + b; });
	return Math.sqrt(sum / Arr.length);
}

function MAD(Arr) { //Mean absolute deviation
	if ((arguments.length > 1) && (typeof Arr == 'number')) Arr = [].slice.call(arguments);
	var mean = Arr.reduce(function(a, b) { return a + b; }) / Arr.length;
	//var mean = Arr.sort(function(a, b){return b-a; })[0];
	
	Arr = Arr.map(function(num) { return Math.abs(num - mean); });
	var sum = Arr.reduce(function(a, b) { return a + b; });
	return sum / Arr.length;
}

function RMS(Arr) { //Root mean square = Quadratic mean
	if ((arguments.length > 1) && (typeof Arr == 'number')) Arr = [].slice.call(arguments);
	return GMean(2, Arr);
}

function CM(Arr) { //Cubic mean
	if ((arguments.length > 1) && (typeof Arr == 'number')) Arr = [].slice.call(arguments);
	return GMean(3, Arr);
}

function GMean(n, Arr) { //Generalized mean
	Arr = Arr.map(function(num) { return Math.pow(num, n); });
	var sum = Arr.reduce(function(a, b) { return a + b; });
	return Math.sqrt(sum / Arr.length);
}

function GMean1(Arr) { //Generalized mean
	if ((arguments.length > 1) && (typeof Arr == 'number')) Arr = [].slice.call(arguments);
	Arr = Arr.map(function(num) { return Math.pow(num, Arr.length); });
	var sum = Arr.reduce(function(a, b) { return a + b; });
	return Math.sqrt(sum / Arr.length);
}

function GM(Arr) { //Geometric mean
	if ((arguments.length > 1) && (typeof Arr == 'number')) Arr = [].slice.call(arguments);
	var mult = Arr.reduce(function(a, b) { return a * b; });
	return Math.pow(mult, 1 / Arr.length);
}

function HM(Arr) { //Harmonic  mean
	if ((arguments.length > 1) && (typeof Arr == 'number')) Arr = [].slice.call(arguments);
	var sum = 1 / Arr[0];
	Arr = Arr.map(function(num) { return 1.0 / num; });
	var sum = Arr.reduce(function(a, b) { return a + b; });
	return Arr.length / sum;
}


function MaxMax(Arr) {
	if ((arguments.length > 1) && (typeof Arr == 'number')) Arr = [].slice.call(arguments);

	//var Maxx = Arr.sort(function(a, b){return b - a; })[0];
	var ORR = Arr.reduce(function(a, b) { return a | b; });
	var avg = Arr.reduce(function(a, b) { return a + b; }) / Arr.length;
	var avg2 = Arr.reduce(function(a, b) { return (a + b) / 2; });
	var avg3 = Arr.reverse().reduce(function(a, b) { return (a + b) / 2; });
	return (ORR | avg | avg2 | avg3);
}


mathFun.Manhattan = function (x, x1, y, y1) {
	return Math.abs(x - x1) + Math.abs(y - y1);
}

function hamming_distance(x, y) {
	var dist = 0, val = x ^ y;
	while (val != 0) {
		dist++;
		val &= val - 1;
	}

	return dist;
}

mathFun.or = function (a, b) { return (a | b); };

function xor1 (a, b) {
	return (a ^ b);
}

function Distance(Col1, Col2, Col3, C1, C2, C3) {
	D = 0;
	for (i = 0; i < Col1.length; i++) {
		D = D + Math.pow(C1 - Col1[i], 2) + Math.pow(C2 - Col2[i], 2)
				+ Math.pow(C3 - Col3[i], 2);
	}
	return Math.sqrt(D);
}

function Distance1(R1, R2, G1, G2, B1, B2) // Euclidian
{
   return Math.sqrt(Math.pow(R1 - R2, 2) + Math.pow(G1 - G2, 2) + Math.pow(B1 - B2, 2));
}

function Distance2(R1, R2, G1, G2, B1, B2) //Manhattan
{
   return (Math.abs(R1 - R2) + Math.abs(G1 - G2) + Math.abs(B1 - B2));
}

function Distance3(R1, R2, G1, G2, B1, B2) //Chebyshev
{
   return Math.max(Math.abs(R1 - R2), Math.abs(G1 - G2), Math.abs(B1 - B2));
}

function Distance4(R1, R2, G1, G2, B1, B2)
{
   return 0; //Math.max(RGB(R1, G1, B1), RGB(R2, G2, B2));
}


function RGB(r, g, b) {
	return r + (g << 8) + (b << 16);
}
function RGB1(v) {
	return v[0] + (v[1] << 8) + (v[2] << 16);
}

function RGB2(v) {
	return { r: (v & 255), 
			 g: (v & (255 << 8)) >> 8, 
			 b: (v & (255 << 16)) >> 16 
	};
}

function avgCol (data) {
	var r = 0, g = 0, b = 0, c = 0;
	for (var i = 0; i < data.length; i+=4) {
		r += data[i + 0];
		g += data[i + 1];
		b += data[i + 2];
	}
	var c = (r + g + b) / (w * h * 3);
	r /= (w * h);
	g /= (w * h);
	b /= (w * h);
	return {r: r, g: g, b: b, c: c}
}

function Col(n, r, g, b) {
	switch (n) {
		case 0: return RGB(r,g,b);
		case 1: return r;
		case 2: return g;
		case 3: return b;

		case 4: return r | g;
		case 5: return r | b;
		case 6: return b | g;
		case 7: return r | b | g;

		case 8: return (r + g) / 2;
		case 9: return (r + b) / 2;
		case 10: return (b + g) / 2;
		case 11: return (r + b + g) / 3;

		case 12: return ((r + b) / 2 + g) / 2;
		case 13: return (r + (b + g) / 2) / 2;
		case 14: return (b + (r + g) / 2) / 2;

		case 15: return Math.sqrt(r * g);
		case 16: return Math.sqrt(r * b);
		case 17: return Math.sqrt(b * g);
		case 18: return Math.pow(r * b * g, 1 / 3);
		
		case 19: return Math.max (r,g);
		case 20: return Math.max (r,b);
		case 21: return Math.max (b,g);
		case 22: return Math.max (r,g,b);
			
		default: return 0;
	}
}

function Col1 (data, i, n) {
	return Col(n, data[i + 0], data[i + 1], data[i + 2]);
}

function Rand1() {
	R1 = Math.random();
	R2 = Math.random();
	while (R1 + R2 >= 1) {
		R1 = Math.random();
		R2 = Math.random();
	}
	R3 = 1 - R1 - R2;

	R4 = Math.random();
	while (R4 == 1) {
		R4 = Math.random();
	}
	R5 = 1 - R4;

	R6 = Math.random();
	while (R6 == 1) {
		R6 = Math.random();
	}
	R7 = 1 - R6;

	R8 = Math.random();
	while (R8 == 1) {
		R8 = Math.random();
	}
	R9 = 1 - R8;
}

function Byte(n) {
	
	if (n > 255)
		return 255;
	else if (n < 0)
		return 0;
	else return Math.floor(n);
}

function Byte1(n) {
	return n & 255;
}

function cntBytes(n) {
	if (n == 0) return 0;
	return (n & 1) + cntBytes(n >> 1);
}

function cntZeros(n) {
	c = 0;
	for (; n > 0; n >>= 1) {
		//alert (n);
		c += (!(n & 1)) ? 1 : 0;
	}
 
	return c;
	/*if (n == 0) return 0;
	return ((!(n & 1)) ? 1 : 0) + cntZeros(n >> 1);*/

}

function byteLen(n) {
	if (n <= 0) return 0;
	//return Math.floor( Math.log(n) / Math.log(2) ) + 1;
	return 1 + byteLen(n >> 1);
}



function ByteAbs (n) { return Byte (Math.abs(n)); }

function grayCode(num) { return num ^ (num >> 1); }
function grayCode1(num) { return num ^ (num << 1); }

function fromGrayCode(gn) {
    var g = gn.toString(2).split("");
    var b = [];
    b[0] = g[0];
	g.forEach(function (n, i) {
		if (i >= 1) b[i] = n ^ b[i - 1];
	});
    return parseInt(b.join(""), 2);
}


function func(v, n) {
	switch (n) {
	case 1:
		return v * Math.sin(v);
	case 2:
		return v / Math.sin(v);
	case 3:
		return v * Math.cos(v);
	case 4:
		return v / Math.cos(v);
	case 5:
		return v * Math.tan(v);
	case 6:
		return v / Math.tan(v);
	}
}


	function Clamp(val, min, max)
	{
	   return Math.min(Math.max(val, min), max);
	}


	function gcd (a, b) {
		if ( ! b) {
			return a;
		}

		return gcd(b, a % b);
	}

	function lcm(a, b) {
		return (a * b) / gcd(a, b);   
	}

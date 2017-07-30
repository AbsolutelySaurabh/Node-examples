var rect = require('./rectangle-2')

function solveRect(l,b){

	console.log("Solving for rectangle with l and b:  "+l+"" +b );

	//here rectanglw=e is a callback
	rect(l, b, function(err, rectangle ){

		if(err){

			console.log(err);
		}else{

			console.log("The area of the rectangle of dimensions length: and breadth ",+l+""+b+ " is: " + rectangle.area());
			console.log("The perimater of the rectangle of dimensions length: and breadth ",+l+""+b+ " is: " + rectangle.perimeter());


		}

	});
};

solveRect(2, 4);
solveRect(-2, 5);
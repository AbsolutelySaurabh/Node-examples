var argv = require('yargs')
    .usage('Usage: node $0 --l=[num] --b=[num]')
    .demand(['l','b'])
    .argv;

var rect = require('./rectangle-2');

function solveRect(l,b) {
    console.log("Solving for rectangle with l = "
                + l + " and b = " + b);

    //it's a convention to write he below s it is
    //we first write "errr" and the the "objec returned by the node module"

    rect(l,b, function(err,rectangle) {
        
	if (err) {
	    console.log(err);
	}
	else {
            console.log("The area of a rectangle of dimensions length = "
                  + l + " and breadth = " + b + " is " + rectangle.area());
	    console.log("The perimeter of a rectangle of dimensions length = "
                  + l + " and breadth = " + b + " is " + rectangle.perimeter());
	}
    });
};

solveRect(argv.l,argv.b);
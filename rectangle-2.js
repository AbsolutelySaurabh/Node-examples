module.exports = function(x,y,callback){

	try{

		if(x<0 || y<0){

			throw new Error("Rectangle dimensions should be greater than zero: l = "
				+x+ ", and b = "+ y);

		}else

		//first param: null below means no error
		//second param: it's a JS object
		callback(null, {

			//this thing is called closures in JS as func inside a func
			perimeter: function(){

				return (2*(x+y));
			},

			area: function(){

				return (x*y);
			}

		} );

	}catch(error){

		//1st param: in catch will always be an error
		//2nd param : in catch'll be null as nothing is expected here
		callback(error, null);
	}

}

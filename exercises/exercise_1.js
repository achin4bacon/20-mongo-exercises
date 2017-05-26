module.exports = function(db) {
	// How many movies are there?
	
	db.collection("movies").distinct('movieId', function(err, data) {
		//go through movies and find how many distinct movies there are and console.log the length.
		console.log("Exercise 1:\n\tThere are " + data.length + " movies");
	});
};

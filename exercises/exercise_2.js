module.exports = function (db) {
    // Which users checked out any of the Lord of the Rings trilogy?
    db.collection("checkouts").find({
        movieId: {
            //find movies with the IDs of The Fellowship of the Ring, Two Towers, and Return of the King
            $in: [8, 11, 15]
        }
    }).toArray(function (err, data) {
        //create empty array 
        var lordOfTheUsers = [];
        for (var i = 0; i < data.length; i++) {
            if (lordOfTheUsers.indexOf(data[i].userId) === -1) {
                lordOfTheUsers.push(data[i].userId);
                //push userId into array
            }
        }
        console.log("Exercise 2:\n\tThe LOTR movies were checked out by users " + lordOfTheUsers.join(", ")); //join at comma and space to print a string instead of array

    });
};
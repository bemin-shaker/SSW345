var unirest = require("unirest");

var req = unirest("GET", "https://brianiswu-open-brewery-db-v1.p.rapidapi.com/breweries/autocomplete");

req.query({
	"query": "city=Raleight&state=North_Carolina"
});

req.headers({
	"x-rapidapi-host": "brianiswu-open-brewery-db-v1.p.rapidapi.com",
	"x-rapidapi-key": "dd7aae2512msh699c79679fb42c1p11cf7bjsnc09ad4420239"
});


req.end(function (res) {
	if (res.error) throw new Error(res.error);

	console.log(res.body);
});

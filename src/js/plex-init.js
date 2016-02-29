var PlexAPI = require("plex-api");


// init the plex api connection. requires 4 args taken as options
// @hostname: ip address of the plex server
// @port: port number that the plex app can be acessed via a browser 
// @username: plex username that call view the media
// @password: plex password
var client = new PlexAPI({
	'hostname': '10.0.1.4',
	'port':'32400',
	'username':'nyxerus',
	'password':'afsdwe12'
	}),

// object created with inital default movie values
// obj will be used to store all movies returned.
// additional info can be added at the time of call
	movies = [],
// object created with inital default tv show values
// obj will be used to store all tv shows returned.
// additional info can be added at the time of call
	shows = [];


//log the connection
client.query("/").then(function (result) {
	console.log("%s running Plex Media Server v%s",
		result.friendlyName,
		result.version);
}, function (err) {
	throw new Error("Could not connect to server");
});

client.query("/library/sections/1/all/").then(function (result) {

	$.each(result._children, function () {
		var data = {};
		data.title = this['title'];
		data.year = this['year'];
		data.addedAt = this['addedAt'];
		movies.push(data);
	});
	console.log(result);
	//console.log('movies '+ movies.length);

}, function (err) {
	throw new Error("Could not connect to server");
});

client.query("/library/sections/2/all/").then(function (result) {

	$.each(result._children, function () {
		var data = {};
		data.title = this['title'];
		data.year = this['year'];
		data.addedAt = this['addedAt'];
		shows.push(data);
	});
	//console.log('shows ' + shows.length);

}, function (err) {
	throw new Error("Could not connect to server");
});
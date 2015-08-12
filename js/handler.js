// handler.js

// auto open:
// GET https://www.googleapis.com/plusDomains/v1/people/me?fields=emails%2Cimage&key={YOUR_API_KEY}
// url === findAccess => noRedirect()

'use strict';

var api_key = 'AIzaSyDsZhCsjTtHrLuLRPQKYfs7AaS3js8TIyw';
var gpDomains = 'https://www.googleapis.com/plusDomains/v1/people/me?fields=emails%2Cimage&key=' + api_key;
var url = window.location.href;
var findInURL = function findInURL(sub) {
	var snippet = sub.search(/access/);
	snippet = snippet >= 0 ? true : false;
	return snippet;
};
var auth = !findInURL('?access') ? redirect() : true;

var redirect = function redirect() {
	window.open(gpDomains, '', 'width=600 height=400');
};
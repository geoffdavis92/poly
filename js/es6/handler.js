// handler.js

// auto open: 
// GET https://www.googleapis.com/plusDomains/v1/people/me?fields=emails%2Cimage&key={YOUR_API_KEY}
// url === findAccess => noRedirect()


const api_key = 'AIzaSyDsZhCsjTtHrLuLRPQKYfs7AaS3js8TIyw'
const gpDomains = `https://www.googleapis.com/plusDomains/v1/people/me?fields=emails%2Cimage&key=${api_key}`
const url = window.location.href
let findInURL = function(sub) {
	let snippet = sub.search(/access/)
	snippet = snippet >= 0 ? true : false
	return snippet
}
let auth = !findInURL('?access') ? redirect() : true

let redirect = function() {
	window.open(gpDomains,"","width=600 height=400")
}
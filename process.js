

async function sendRequest(url,data){

function formEncode(obj) {
var str = [];
for(var p in obj)
str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
return str.join("&");
}

var dat = await fetch(url, {
method: 'POST',
headers: { "Content-type": "application/x-www-form-urlencoded"},
body: formEncode(data)
}).then(res => res.json())
.then(response => JSON.stringify(response))
.catch(error => console.error('Error: '+error));

return JSON.parse(dat);

}


function register() {
	var firstname = document.querySelector('input[name="firstname"]').value;
		var lastname = document.querySelector('input[name="lastname"]').value;
	var password = document.querySelector('input[name="password"]').value;
	var email = document.querySelector('input[name="email"]').value;

	let data = {firstname:firstname,lastname:lastname,email:email,password:password};
	let url = 'https://cors-anywhere.herokuapp.com/https://intense-lowlands-41245.herokuapp.com/index.php/register';

	var returned = sendRequest(url,data);
	returned.then(function(obj){
			console.log(obj);

	})
	
}


function login() {
	var password = document.querySelector('input[name="password"]').value;
	var email = document.querySelector('input[name="email"]').value;

	let data = {email:email,password:password};
	let url = 'https://cors-anywhere.herokuapp.com/https://intense-lowlands-41245.herokuapp.com/index.php/login';
//let url='http://localhost/w/backend17/index.php/login';
	var returned = sendRequest(url,data);
	returned.then(function(obj){
			console.log(obj);
	})
	
}


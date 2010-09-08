var allowedHash = new Array("a9993e364706816aba3e25717850c26c9cd0d89d");

function validate_form(form) {
	var searchFor = sha1Hash(form.login.value + form.password.value);
	var foundMatch = false;
	for(var i = 0; i < allowedHash.length && !foundMatch; i++){
		foundMatch = (allowedHash[i] == searchFor);
	}
	alert(foundMatch ? "Valid" : "Not valid");
	return false;
}

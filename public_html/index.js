const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const zipcode1= document.getElementById('zipcode1');
const phone= document.getElementById('phone');
form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});

function checkInputs() {
	const usernameValue = username.value.trim();
	const emailValue = email.value.trim();
	const passwordValue = password.value.trim();
	const password2Value = password2.value.trim();
	const zipcodeValue = zipcode1.value.trim();
        const phoneValue = phone.value.trim();
	if(usernameValue === '') {
		setErrorFor(username, 'Username cannot be blank');
	} else {
		setSuccessFor(username);
	}
	
	if(emailValue === '') {
		setErrorFor(email, 'Email cannot be blank');
	} else if (!validateEmail(emailValue)) {
		setErrorFor(email, 'Not vit email');
	} else {
		setSuccessFor(email);
	}
	
	if(passwordValue === '') {
		setErrorFor(password, 'Password cannot be blank');
	} else if(!isPassten(passwordValue)){
                setErrorFor(password, 'password should contain more than 10 letters,at least one uppercase letter, one lowercase letter, one number and one special character');
        } else {
		setSuccessFor(password);
	}
	
	if(password2Value === '') {
		setErrorFor(password2, 'Password2 cannot be blank');
	} else if(passwordValue !== password2Value) {
		setErrorFor(password2, 'Passwords does not match');
	} else{
		setSuccessFor(password2);
	}
        if(zipcodeValue === '') {
		setErrorFor(zipcode1, 'zipcode cannot be blank');
	} else if (!isZipCode(zipcodeValue)) {
		setErrorFor(zipcode1, 'Not a valid email, zipcode contains 6 digits');
	} else {
		setSuccessFor(zipcode1);
	}
	if(phone === '') {
		setErrorFor(phone, 'Phone cannot be blank');
	} else if (!isPhone(phoneValue)) {
		setErrorFor(phone, 'phone number should contains 10 digits');
	} else {
		setSuccessFor(phone);
	}
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}
	
function validateEmail(email) { 
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(email)){
        if((email.indexOf("@vit.ac.in", email.length - "@vit.ac.in".length) !== -1)||(email.indexOf("@vitstudent.ac.in", email.length - "@vitstudent.ac.in".length) !== -1)){
            return true;
        }
    }
}
function isZipCode(str) 
{
  return /^\d{6}?$/.test(str);
}
function isPhone(str) 
{
  return /^\d{10}?$/.test(str);
}
function isPassten(str) 
{
  return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{10,}$/.test(str);
}
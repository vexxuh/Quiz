// Name and Password from the register-form
var name = document.getElementById('name').value();
var pw = document.getElementById('pw').value();

let userPass = new Map();
// storing input from register-form
function store() {
    userPass.set(name, pw);
}

store();

// check if stored data from register-form is equal to entered data in the   login-form
console.log(userPass.toString());




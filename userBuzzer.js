var totalUsers = 4;
var currentUser = 0;
var input = false;

if (input === true) {
    userBuzzIn();
}

function userBuzzIn() {
    if (currentUser < totalUsers) {
        currentUser++;
        bonusPoints--;
    }

}
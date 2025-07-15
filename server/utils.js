const checkCredentials = (username, password) => {
    if(username.length < 6 && password.length < 8) {
        return false;
    }
    return true;
}

module.exports = { checkCredentials }
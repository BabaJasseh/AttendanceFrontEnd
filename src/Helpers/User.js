import token from './Token';
import appStorage from './AppStorage';
class User {
    responseAfterLogin(res){
        const access_token = res.data.access_token;
        const username = res.data.firstname;

        if (token.isValid(access_token)) {
            appStorage.store(access_token, username)
        }
    }

    hasToken(){
        const storeToken = localStorage.getItem('token');
        return storeToken ? token.isValid(storeToken) : false;
    }

    loggedIn(){
        return this.hasToken();
    }

    name(){
        if (!this.loggedIn()) {
            return;
        }
        return localStorage.getItem('user');
    }

    id(){
        if (!this.loggedIn()) {
            return;
        }
        const payload = token.payload(localStorage.getItem('token'));
        return payload.sub;
    }
}

const user = new User();
export default user;
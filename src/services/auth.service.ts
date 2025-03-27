import axios from 'axios';
import BaseService from '@/services/base.service';

class AuthService extends BaseService {
    // 로그인
    public async signIn(username: string, password: string): Promise<any> {
        const uri = 'https://d340tqmuewjthg.cloudfront.net/oauth/token';
        const data = {
            username: username,
            password: password,
            clientid: this.getClientId(),
        };
        const headers = {
            'content-type': 'application/json',
        };

        try {
            let res = await axios.post(uri, data);

            let token = res;

            this.saveToken(token);
            return token;
        } catch (err) {
            console.log('err', err);
            throw err;
        }
    }

    public async signOut(forceServer?: boolean): Promise<boolean> {
        this.removeToken();

        return true;
    }

    public removeToken() {
        localStorage.removeItem('token');
    }

    public saveToken(token: any) {
        localStorage.setItem('token', JSON.stringify(token));
    }

    public getClientId(): string {
        return this.getRememberMe() ? 'longappclient' : 'appclient';
    }

    public setRememberMe(arg: boolean): void {
        localStorage.setItem('rememberMe', arg ? 'Y' : 'N');
    }

    public getRememberMe(): boolean {
        let arg = localStorage.getItem('rememberMe');
        return !arg || arg == 'N' ? false : true;
    }

    public setUserId(username: string): void {
        localStorage.setItem('userId', username);
    }

    public getUserId(): string {
        const username = localStorage.getItem('userId');
        return username !== null ? username : '';
    }

    public setSaveId(save: boolean): void {
        if (save) {
            localStorage.setItem('saveId', 'Y');
        } else {
            localStorage.removeItem('saveId');
        }
    }

    public getSaveId(): boolean {
        let save: boolean = false;
        if (localStorage.getItem('saveId')) {
            save = true;
        } else {
            localStorage.removeItem('userId');
        }
        return save;
    }
}

let authService;
export default authService = new AuthService();

import { Injectable } from '@angular/core';
import { SessionService } from './session.service';
import { HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

    constructor(
        private session: SessionService,
        private http: HttpClient,
        private router: Router
    ) {
    }
    private response;

    public isSignedIn() {
        if (!this.session.accessToken) {
            if (localStorage.getItem('token')) {
                this.session.accessToken = localStorage.getItem('token');
                return this.session.accessToken;
            }
        } else {
            return !!this.session.accessToken;
        }
    }

    public doSignOut() {
        this.session.destroy();
    }

    public signIn(email: string, password: string) {
        return this.http
            .post('http://liks.test/api/auth/login', {
                email,
                password
            })
            .subscribe(data => {
                // login successful if there's a jwt token in the response
                this.response = data;
                if (this.response.access_token) {
                    this.doSignIn(this.response.access_token, this.response.token_type, this.response.user_id, this.response.user_name);
                }});
    }
    public doSignIn(accessToken: string, name: string, user_id: number, user_name: string) {
        if ((!accessToken) || (!name)) {
            return;
        }
        console.log(user_name);
        this.session.accessToken = accessToken;
        this.session.name = name;
        this.session.user_name = user_name;
        this.session.user_id = user_id;
        localStorage.setItem('session', JSON.stringify(this.session));
        this.router.navigate(['docs']);
    }

}
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
        console.log(!!this.session.accessToken);
        return !!this.session.accessToken;
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
                    this.doSignIn(this.response.access_token, this.response.token_type);
                }});
    }
    public doSignIn(accessToken: string, name: string) {
        if ((!accessToken) || (!name)) {
            return;
        }
        this.session.accessToken = accessToken;
        this.session.name = name;
        this.router.navigate(['docs']);
        console.log(this.session);
    }

}
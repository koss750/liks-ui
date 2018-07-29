import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    public frm: FormGroup;

    public isBusy = false;
    public hasFailed = false;
    public showInputErrors = false;

    constructor(
        private auth: AuthService,
        private fb: FormBuilder,
        private router: Router
    ) {
        this.frm = fb.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });
    }

    ngOnInit() {
    }

    public doSignIn() {

        // Make sure form values are valid
        if (this.frm.invalid) {
            this.showInputErrors = true;
            return;
        }

        // Reset status
        this.isBusy = true;
        this.hasFailed = false;

        // Grab values from form
        const username = this.frm.get('username').value;
        const password = this.frm.get('password').value;

        // Submit request to API
        this.auth.signIn(username, password);
    }

}
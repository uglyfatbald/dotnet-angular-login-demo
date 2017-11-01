import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch';

import { LocalStorageService } from './local-storage.service'

@Injectable()
export class AuthenticationService {

    constructor(
        private http: Http,
        private localStorage: LocalStorageService)
    { }

    login(username: string, password: string) {
        let options = new RequestOptions({ headers: new Headers({ 'Content-Type': 'application/json' }) });
        return this.http.post(
            '/api/authenticate',
            JSON.stringify({ username: username, password: password }),
            options)
            .map((response: Response) => {
                // login successful if there's a token in the response
                let login = response.json();
                if (login && login.token) {
                    // store user details and token in local storage to keep user logged in between page refreshes
                    this.localStorage.setItem('currentLogin', JSON.stringify(login));
                }
            });
    }

    logout() {
        // remove user from local storage to log user out
        this.localStorage.removeItem('currentLogin');
    }
}
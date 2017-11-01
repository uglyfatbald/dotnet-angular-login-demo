import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../../services/local-storage.service'
import { AuthenticationService } from '../../services/authentication.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'home',
    templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
    private myLogin:any;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private localStorage: LocalStorageService,
        private authenticationService: AuthenticationService, )
    { }

    ngOnInit(): void {
        var login:any = this.localStorage.getItem('currentLogin');
        this.myLogin = JSON.parse(login);
    }

    logOut() {
        this.authenticationService.logout();
        this.router.navigate(["/login"]);
    }

}

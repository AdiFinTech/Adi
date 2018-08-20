import {Component, OnInit }  from '@angular/core';
import {HttpClient,HttpClientModule} from '@angular/common/http'
import {Router,ActivatedRoute,CanActivate,ActivatedRouteSnapshot,RouterStateSnapshot } from '@angular/router';

import {GridOptions} from "ag-grid";

import {authenticationService} from './services/authentication.service';

@Component({

	template:  ` 
		<h2>{{title}}</h2>
		<p>
			<strong>Logout...</strong>
        </p>
        <p>
			<a [routerLink]="['/login']">Login again</a>
		</p>

	`,
	styles: [`
	
	`],
})

export class logoutComponent implements OnInit 
{
    title = 'New Calls';
    returnUrl: string;

    constructor(
        private http: HttpClient,
        private _authService:authenticationService,
        private route: ActivatedRoute,
        private router: Router,
    ) 
    {

    }
    ngOnInit() { 
        this._authService.logout();
        this.router.navigate(['login']);
    } 
}

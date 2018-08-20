
import { Injectable }     	 from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {HttpClient,HttpClientModule} from '@angular/common/http'
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

//import { Observable }        from 'rxjs/Observable';
//import { nProduct }          from '../model/product';

import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

@Injectable()

export class authenticationService 
{
   //private _productUrl = '../assets/products.json';

    constructor(private http: HttpClient,private router: Router){}
    
    
    logout() {
        localStorage.removeItem('currentUser');
        //this.router.navigate(['login'], { queryParams: { returnUrl: state.url }});
        //this.router.navigate(['/home']);
        return false;
    }
}
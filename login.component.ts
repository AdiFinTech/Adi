// loginComponent
import { Component, OnInit, OnDestroy, Pipe, PipeTransform } from '@angular/core';
import { ActivatedRoute, Router }       from '@angular/router';
import {authenticationService} from './services/authentication.service';

@Component({
    selector: 'adifintech',
    template:  `
    <div id="ngcontainer">
        <div id="login-page">
            <div class="container">
                <form class="form-login" (submit)="loginUser($event)">
                    <h2 class="form-login-heading">sign in now</h2>
                    <div class="login-wrap">
                        <input type="text" class="form-control" placeholder="User ID" autofocus>
                        <br>
                        <input type="password" class="form-control" placeholder="Password">
                        <label class="checkbox">
                            <span class="pull-right">
                                <a data-toggle="modal" href="#myModal"> Forgot Password?</a>
                            </span>
                        </label>
                        <button class="btn btn-theme btn-block" type="submit"><i class="fa fa-lock"></i> SIGN IN</button>
                        <hr>
                        <div class="registration">
                            Don't have an account yet?<br/>
                            <a class="" [routerLink]="['/registration']">Create an account</a>
                            | 
                            <a class="" [routerLink]="['/otp']">Have OTP</a>
                        </div>
                    </div>
                    <div aria-hidden="true" aria-labelledby="myModalLabel" role="dialog" tabindex="-1" id="myModal" class="modal fade">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                                    <h4 class="modal-title">Forgot Password ?</h4>
                                </div>
                                <div class="modal-body">
                                    <p>Enter your e-mail address below to reset your password.</p>
                                    <input type="text" name="email" placeholder="Email" autocomplete="off" class="form-control placeholder-no-fix">
            
                                </div>
                                <div class="modal-footer">
                                    <button data-dismiss="modal" class="btn btn-default" type="button">Cancel</button>
                                    <button class="btn btn-theme" type="button">Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
      </div>  
    `,
	styles: [`
    #ngcontainer { background: url('assets/img/page_bg_blur02.jpg') !important; no-repeat; background-size:cover !important; height:800px;  }    
	`],
})

export class loginComponent implements OnInit, OnDestroy 
{
    constructor(private _route: ActivatedRoute,
        private _router: Router
        /*,private _authService: authenticationService*/) { }
        loginUser(e)
        {
            var userName = e.target.elements[0].value;
            var password = e.target.elements[1].value;
            console.log(userName,password);
        }
        ngOnInit(): void {
        /*this.product = new Product(10, '', '', '', '', 10);
        this.sub = this._route.params.subscribe(
        params => {
            let id = +params['id'];
            if (id) {
                this.getProduct(id);
            }
        });*/
    }
    ngOnDestroy(): void {
        //this.sub.unsubscribe();
    }
}

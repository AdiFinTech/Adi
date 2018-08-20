//registrationComponent

import { Component, OnInit, OnDestroy, Pipe, PipeTransform } from '@angular/core';
import { ActivatedRoute, Router }       from '@angular/router';
import {authenticationService} from './services/authentication.service';

@Component({
    selector: 'adifintech',
    template:  `
    <div id="ngcontainer">
        <div id="login-page">
            <div class="container">
                
                <form class="form-login" (submit)="registreUser($event)"><h2 class="form-login-heading">Registration</h2>
                <div class="login-wrap">
                    <input type="text" class="form-control" placeholder="Full Name" name="full_name" autofocus>
                    <br>
                    <input type="text" class="form-control" placeholder="Email" name="email" maxlength="150">
                    <br>
                    <input type="text" class="form-control" placeholder="Mobile" name="contact_number" maxlength="13">
                    <br>
                    <input type="text" class="form-control" placeholder="Loan" name="loan_amount">
                    <br>
                    <input type="text" class="form-control" placeholder="City" name="city_name">
                    <br>
                    <label class="checkbox">
                        <span class="pull-right">
                            <a data-toggle="modal" href="#myModal"> Forgot Password?</a>
                        </span>
                    </label>
                    <button class="btn btn-theme btn-block" type="submit"><i class="fa fa-lock"></i> SIGN IN</button>
                    <hr>
                    <div class="registration">
                        Already have an account!<br/>
                        <a class="" [routerLink]="['/login']"> Login Now </a>
                        |
                        <a class="" [routerLink]="['/employee-dashboard/dashboard']"> test Home </a>
                    </div>
                </div>
                </form>
                <!-- Modal -->
                <form class="form-login">
                <div aria-hidden="true" aria-labelledby="myModalLabel" role="dialog" tabindex="-1" id="myModal" class="modal fade">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                                <h4 class="modal-title">Forgot Password ?</h4>
                            </div>
                            <div class="modal-body">
                                <p>Enter your e-mail address below to reset your password.</p>
                                <input type="text" name="user_email" placeholder="Email" autocomplete="off" class="form-control placeholder-no-fix">
                            </div>
                            <div class="modal-footer">
                                <button data-dismiss="modal" class="btn btn-default" type="button">Cancel</button>
                                <button class="btn btn-theme" type="button" (click)="resendUserEmail($event)">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
                </form>
                <!-- modal -->
            </div>
        </div>
    </div>
    `,
	styles: [`
	#ngcontainer { background: url('assets/img/page_bg_blur02.jpg') !important; no-repeat; background-size:cover !important; height:800px;  }    
	`],
})

export class registrationComponent implements OnInit, OnDestroy 
{
    constructor(private _route: ActivatedRoute,
        private _router: Router
        /*,private _authService: authenticationService*/) {}
        registreUser(e)
        {
            var fullName = e.target.elements[0].value;
            var email = e.target.elements[1].value;
            var contact_number = e.target.elements[2].value;
            var loan_amount = e.target.elements[3].value;
            var city_name = e.target.elements[4].value;
            console.log(fullName,email, city_name);
        }
        resendUserEmail(e)
        {
            var userEmail = e.target.elements[0].value;
            console.log(userEmail);
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
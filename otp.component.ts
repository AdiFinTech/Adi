// otpComponent

import { Component } from '@angular/core';

@Component({
    selector: 'adifintech',
    template:  `
    <div id="ngcontainer">
        <div id="login-page">
            <div class="container">
                <form class="form-login">
                    <h2 class="form-login-heading">OTP</h2>
                    <div class="login-wrap">
                        <input type="text" class="form-control" placeholder="OTP Number" autofocus>
                        <br>
                        
                        <button class="btn btn-theme btn-block" href="index.html" type="submit"><i class="fa fa-lock"></i> SIGN IN</button>
                        <hr>
                        <div class="registration">
                            Already have an account!<br/>
                            <a class="" [routerLink]="['/login']">Login Now </a>
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

export class otpComponent {
  //title = 'My Calls';
}

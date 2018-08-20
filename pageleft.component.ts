import { Component } from '@angular/core';

@Component({
  selector: 'page-sidebar',  
  template: `
	<ul class="sidebar-menu" id="nav-accordion"> 
		  <li class="mt">
			  <a class="active" [routerLink]="['/employee-dashboard/dashboard']"><i class="fa fa-dashboard"></i> <span>Dashboard</span></a>
		  </li> 
		  <li class="sub-menu">
			  <a href="javascript:;" ><i class="fa fa-desktop"></i> <span>Internal Call</span></a>
			  <ul class="sub">
				  <li><a [routerLink]="['/employee-dashboard/newcall']">New Call</a></li>
				  <li><a [routerLink]="['/employee-dashboard/mycalls']">My Calls</a></li> 
			  </ul>
		  </li> 
		  <li class="sub-menu">
			  <a href="javascript:;" ><i class="fa fa-cogs"></i> <span>Field Visits</span></a>
			  <ul class="sub">
				  <li><a [routerLink]="['/employee-dashboard/update_field_visits']">Update Field Visits</a></li>
				  <li><a [routerLink]="['/employee-dashboard/my_visits']">My Visits</a></li>
			  </ul>
		  </li>
		  <li class="sub-menu">
			  <a href="javascript:;" >
				  <i class="fa fa-book"></i> <span>Third Party Data</span>
			  </a>
			  <ul class="sub">
				  <li><a [routerLink]="['/upload_data']">Upload Data</a></li>
				  <li><a [routerLink]="['/pending_verification']">Data for Verification</a></li>
			  </ul>
		  </li>
		  <li class="sub-menu">
			  <a href="javascript:;" ><i class="fa fa-tasks"></i><span>My Leads</span></a>
			  <ul class="sub">
				  <li><a [routerLink]="['/leads_reverification']">Lead for Reverification</a></li>
				  <li><a [routerLink]="['/leads_success']">Successful Leads</a></li>
				  <li><a [routerLink]="['/leads_rejected']">Rejected Leads</a></li>
				  <li><a [routerLink]="['/leads_total']">Total Leads</a></li>
			  </ul>
		  </li>
		  <li class="sub-menu">
			  <a href="javascript:;" >
				  <i class="fa fa-th"></i> <span>Chat Management</span>
			  </a>
			  <ul class="sub">
				  <li><a [routerLink]="['/chat_live']">Live Chat</a></li>
				  <li><a [routerLink]="['/chat_status']">Chat Status</a></li>
			  </ul>
		  </li>
		  <li class="sub-menu">
			  <a href="javascript:;">
				  <i class=" fa fa-bar-chart-o"></i>
				  <span>Chat Status</span>
			  </a>
			  <ul class="sub">
				  <li><a [routerLink]="['/chat_remarks']" class="hypecolor">Remark</a></li>
				  <li><a [routerLink]="['/chat_closed']" class="hypecolor">Closed</a></li>
				  <li><a [routerLink]="['/chat_intrested']" class="hypecolor">Interested</a></li>
				  <li><a [routerLink]="['/chat_followup']" class="hypecolor">Follow Up</a></li>
			  </ul>
		  </li>
		<li class="sub-menu"><a [routerLink]="['/lead_score']"><i class="fa fa-dashboard"></i> <span>Internal Score Mng</span></a></li>
		<li class="sub-menu"><a [routerLink]="['/lead_logout']"><i class="fa fa-dashboard"></i> <span>Logout</span></a></li> 
		</ul> 
	` 
})
export class AppPageLeft { 
}

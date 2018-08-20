import { Component, OnInit, OnDestroy, Pipe, PipeTransform } from '@angular/core';
import { ActivatedRoute, Router }       from '@angular/router';
//import {authenticationService} from './services/authentication.service';
import {GridOptions} from "ag-grid";
//import {RedComponentComponent} from "./red-component.component";


@Component({

	template:  ` 
		<h2>{{title}}</h2>
 
	`,
	styles: [`
	
	`],
})

export class empDashboard 
{
	title = 'Employee Dashboard';

	constructor() {
			 
	}
}

import { Component, OnInit, OnDestroy, Pipe, PipeTransform } from '@angular/core';
import { ActivatedRoute, Router }       from '@angular/router';
//import {authenticationService} from './services/authentication.service';
import {GridOptions} from "ag-grid";
//import {RedComponentComponent} from "./red-component.component";


@Component({

	template:  ` 
		<h2>{{title}}</h2>

		<div style="width: 200px;">
			<ag-grid-angular #agGrid style="width: 100%; height: 200px;" class="ag-theme-balham"
									[gridOptions]="gridOptions">
			</ag-grid-angular>
		</div>

	`,
	styles: [`
	
	`],
})

export class newcallComponent 
{
	title = 'New Calls';
	private gridOptions: GridOptions;
	private params: any;

	constructor() {
			this.gridOptions = <GridOptions>{};
			this.gridOptions.columnDefs = [
					{
							headerName: "ID",
							field: "id",
							width: 100
					},
					{
							headerName: "Value",
							field: "value",
							//cellRendererFramework: RedComponentComponent,
							width: 100
					},

			];
			this.gridOptions.rowData = [
					{id: 5, value: 10},
					{id: 10, value: 15},
					{id: 15, value: 20}
			]
	}
}

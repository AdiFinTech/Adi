
import { Component, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AgGridNg2 } from 'ag-grid-angular';

@Component({

	template:  `	
			<h2>{{title}}</h2>
			
			<ag-grid-angular 
				#agGrid
				style="width:100%; height:500px;" 
				class="ag-theme-balham"
				[enableSorting]="true"
				[enableFilter]="true"
				[rowData]="rowData | async" 
				[columnDefs]="columnDefs"
				rowSelection="multiple"
	    >
			</ag-grid-angular>
	`,
	styles: [`
	
	`],
})

export class mycallsComponent 
{
		title = 'My Calls';
		rowData: any;
    
    @ViewChild('agGrid') agGrid: AgGridNg2;

    columnDefs = [
        {headerName: 'make', field: 'make', checkboxSelection: true },
        {headerName: 'model', field: 'model' },
        {headerName: 'price', field: 'price' }
    ];

    constructor(private http: HttpClient) {

    }

    ngOnInit() {
        this.rowData = this.http.get('https://api.myjson.com/bins/15psn9');
    }

    getSelectedRows() {
        const selectedNodes = this.agGrid.api.getSelectedNodes();
        const selectedData = selectedNodes.map( node => node.data );
        const selectedDataStringPresentation = selectedData.map( node => node.make + ' ' + node.model).join(', ');
        alert(`Selected nodes: ${selectedDataStringPresentation}`);
    }
}

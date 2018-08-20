
import { Component, OnInit, OnDestroy, Pipe, PipeTransform } from '@angular/core';
import { ActivatedRoute, Router }       from '@angular/router';

@Component({

	template:  ` 
		<h2>{{title}}</h2>
 
	`,
	styles: [`
	
	`],
})

export class myvisitsComponent 
{
	title = 'My Visits';

	constructor() {
			 
	}
}

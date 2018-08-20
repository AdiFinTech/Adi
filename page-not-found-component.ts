import { Component, OnInit } from '@angular/core';

@Component({
  
  template:  `

    <h2>404, Page not found</h2>
    <p>{{pageMessage}}</p>
  `,
  
  styles: [`

  `]
})

export class PageNotFoundComponent implements OnInit {
  
  pageMessage:string='The Page you are looking for doesn\'t exist or an other error occurred.';
  
  constructor() { }

  ngOnInit() {
  }

}

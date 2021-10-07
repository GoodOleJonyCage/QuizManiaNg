import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-startquiz',
  templateUrl: './startquiz.component.html',
  styleUrls: ['./startquiz.component.css']
})
/** startquiz component*/
export class StartquizComponent {

  id: any;
  name: string;

  constructor(private activatedRoute: ActivatedRoute) {

    this.activatedRoute.queryParams.subscribe(
      params => {
        this.id = params['id'];
        this.name = params['name'];
      }
    )
  }
}

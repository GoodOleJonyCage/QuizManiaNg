import { Component, Inject } from '@angular/core';
import { HttpParams, HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})

export class QuizComponent {

  id: any;
  name: string;
 
  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string, private activatedRoute: ActivatedRoute) {

    this.activatedRoute.queryParams.subscribe(
      params => {
        this.id = params['id'];
        this.name = params['name'];
      }
    )

    let params = new HttpParams();
    params = params.append('quizid', this.id);

    http.get<any>('quiz', { params })
      .subscribe(result => {
        console.log(result);
      }, error => console.error(error));
  }
}



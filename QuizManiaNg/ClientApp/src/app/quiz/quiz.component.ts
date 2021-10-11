import { Component, Inject, ViewChild } from '@angular/core';
import { HttpParams, HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { QuizButtonsComponent } from '../quiz-buttons/quiz-buttons.component';


@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})

export class QuizComponent {

  id: any;
  name: string;
  quiz: quiz;
  currentquestionindex: any;
  //@ViewChild(QuizButtonsComponent) child: QuizButtonsComponent;

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string, private activatedRoute: ActivatedRoute) {

    this.activatedRoute.queryParams.subscribe(
      params => {
        this.id = params['id'];
        this.name = params['name'];
      }
    )

    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    let params = new HttpParams();
    params = params.append('quizid', this.id);

    http.get<quiz>(baseUrl + 'quiz/quizitems', { headers,params })
      .subscribe(result => {
        this.quiz = result;
        this.currentquestionindex = 0;
        console.log(this.quiz );
      }, error => console.error(error));
  }

  public MoveForward(e: any) {
    console.log('forward');
    console.log(e);
    //if (this.currentindex == this.questionlength)
    //  return;
    //this.currentindex =  this.currentindex   + 1;
  }
  public MoveBack(e: any) {
    console.log('back');
    console.log(e);
    //if (this.currentindex == this.questionlength)
    //  return;
    //this.currentindex =  this.currentindex   + 1;
  }

  public moveToPrev(data) {
    console.log(data);
    //if (this.currentindex == 0)
    //  return;
    //this.currentindex = this.currentindex - 1;
  }
}

interface question {
  name: string;
  answers: [];
}

interface quiz {
  id      : 0 ,
  name    : string;
  questions: question[];
}
 

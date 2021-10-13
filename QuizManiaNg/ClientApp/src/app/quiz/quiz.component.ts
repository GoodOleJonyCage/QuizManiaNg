import { Component, Inject, ViewChild } from '@angular/core';
import { HttpParams, HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { QuizButtonsComponent } from '../quiz-buttons/quiz-buttons.component';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})

export class QuizComponent {

  id: any;
  name: string;
  currentquestionindex: any;
  score: any;
  quiz: quiz;
  //@ViewChild(QuizButtonsComponent) child: QuizButtonsComponent;

  moveToQuizListComponent() {
     
    this.router.navigate(['/quizitem']);
  }

  constructor(private router: Router,http: HttpClient, @Inject('BASE_URL') baseUrl: string, private activatedRoute: ActivatedRoute) {
     
    this.activatedRoute.queryParams.subscribe(
      params => {
        this.id = params['id'];
        this.name = params['name'];
      }
    )

    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    let params = new HttpParams();
    params = params.append('quizid', this.id);

    http.get<quiz>(baseUrl + 'quiz/quizitems', { headers, params })
      .subscribe(result => {
        this.quiz = result;
        this.currentquestionindex = 0;
      }, error => console.error(error));
  }

  public MoveForward(e: any) {
    let returnValue;
    let question = this.quiz.questions[e];
    question.message = '';
    var questionAnswered = question.answers.filter(a => a.selected === true);

    if (questionAnswered.length == 0) {
      question.message = 'At least one answer required';
      returnValue= false;
    }
    else {
      this.currentquestionindex = this.currentquestionindex + 1;
      returnValue = true;
    }
    return returnValue;
  }
  public MoveBack(e: any) {
    if (this.currentquestionindex == 0)
      return;
    this.currentquestionindex = this.currentquestionindex - 1;
  }

  public SubmitQuiz(e: any) {

    if (this.MoveForward(e)) {

      var answeredCorrectly = 0;
      for (var i = 0; i < this.quiz.questions.length; i++) {
        for (var j = 0; j < this.quiz.questions[i].answers.length; j++) {
          if (
            this.quiz.questions[i].answers[j].selected &&
            this.quiz.questions[i].answers[j].answeredCorrectly &&
            true
          ) {
            answeredCorrectly++;
            break;
          }
        }
      }
      this.score = Math.trunc((answeredCorrectly / this.quiz.questions.length) * 100);
      //save quiz to db and redirect
      this.moveToQuizListComponent();
    }
    console.log(this.quiz);
  }
}

interface answer {
  selected: any;
  answeredCorrectly: any;
}

interface question {
  name: string;
  answers: answer[];
  message: string;
}

interface quiz {
  id: 0;
  name: string;
  questions: question[];
}


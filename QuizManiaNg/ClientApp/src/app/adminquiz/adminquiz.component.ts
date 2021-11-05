import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-adminquiz',
  templateUrl: './adminquiz.component.html',
  styleUrls: ['./adminquiz.component.css']
})
/** adminquiz component*/
export class AdminquizComponent {

  questions: Question[];
  selectedQuestion: Question;

  answers: Answer[];
  selectedAnswer: Answer;
  selectedAnswers: Answer[];

  quizItems: QuizItem[];

  addQAToQuizMessage: string;
  quizName: string;

  saveQuizMessage: string;

  quizID: number;

  baseUrl: any;
  http: HttpClient;

  public loadQuestions() {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    let params = new HttpParams();
    this.http.get<Question[]>(this.baseUrl + 'quiz/questions', { headers, params })
      .subscribe(result => {
        this.questions = result;
      }, error => console.error(error));
  }

  public loadAnswers() {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    let params = new HttpParams();
    this.http.get<Answer[]>(this.baseUrl + 'quiz/answers', { headers, params })
      .subscribe(result => {
        this.answers = result.map(a => {
          return {
            id: a.id,
            name: a.name,
            iscorrect: false
          }
        });
      }, error => console.error(error));
  }

  public addAnswer() {
    if (this.selectedAnswer.id > 0) {
      if (this.selectedAnswers.indexOf(this.selectedAnswer) < 0) {
        this.selectedAnswers.push(this.selectedAnswer);
      }
    }
  }
  public clearAnswers() {
    this.selectedAnswers.length = 0;
  }

  public addQsAsToQuiz() {

    const trueList = this.selectedAnswers.filter(i => i.iscorrect === true);
    if (trueList.length == 0) {
      this.addQAToQuizMessage = "Please select at least one answer";
      return;
    }
    else {
      this.addQAToQuizMessage = "";
    }

    let newquizitem: QuizItem = <QuizItem>{};
    newquizitem.question = this.selectedQuestion;
    newquizitem.answers = this.selectedAnswers;
    const duplicateList = this.quizItems.filter(i => { return i.question.id === newquizitem.question.id });
    //no dups
    if (duplicateList.length == 0) {
      this.quizItems.push(newquizitem);
    }
  }

  public removeQsAsFromQuiz(quizItem) {
    this.quizItems = this.quizItems.filter(i => {
      return i.question.id != quizItem.question.id
    });
  }

  public saveQuiz() {


    if (this.quizItems.length == 0) {
      this.saveQuizMessage = "At least one question/answer must be added";
      return;
    }
    else {
      this.saveQuizMessage = "";
    }

    this.http.post<any>(this.baseUrl + 'quiz/savequiz',
      {
        questionanswers: this.quizItems,
        id: this.quizID,
        quizname: this.quizName
      }
    )
      .subscribe(data => {
        this.router.navigate(['/quizitem']);
      });
  }

  public loadSavedItems() {
    if (this.quizID > 0) {
      this.http.get<any>(this.baseUrl + 'quiz/quizitems?quizid=' + this.quizID)
        .subscribe(data => {
          data.questions.map((q, index) => {
            let newquizitem: QuizItem = <QuizItem>{};
            newquizitem.question = { id: q.qid, name: q.name };
            newquizitem.answers = q.answers.map(function (a, index) {
              return { id: a.aid, name: a.name, iscorrect : a.answeredCorrectly }
            });
            this.quizItems.push(newquizitem);
          });
        });
    }
  }

  public answerChanged(answer) {
    answer.iscorrect = !answer.iscorrect;
  }

  constructor(private router: Router,  activatedroute: ActivatedRoute, http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.http = http;
    this.baseUrl = baseUrl;
    this.loadQuestions();
    this.loadAnswers();
    this.selectedAnswers = [];
    this.quizItems = [];

    activatedroute.params.subscribe(params => {
      this.quizID = params['id'];
      this.quizName = params['name'];
      this.loadSavedItems();
    });
  }
}

interface Question {
  id: number,
  name: string;
}

interface Answer {
  id: number,
  name: string;
  iscorrect: boolean;
}

interface QuizItem {
  question: Question,
  answers: Answer[];
}

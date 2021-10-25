import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-adminquestionanswer',
  templateUrl: './adminquestionanswer.component.html',
  styleUrls: ['./adminquestionanswer.component.css']
})

export class AdminquestionanswerComponent {

  public questionToAdd: QuestionToAdd;
  public answerToAdd: AnswerToAdd;
  public questionToEdit: QuestionToEdit;
  public answerToEdit: AnswerToEdit;
  public questions: Question[];
  public answers: Answer[];
  private  http: HttpClient ;
  private baseUrl: string;

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {

    this.http = http;
    this.baseUrl = baseUrl;

    this.LoadQuestions();
    this.LoadAnswers();

    this.questionToEdit = { index: -1, message: '' };
    this.answerToEdit = { index: -1, message: '' };
    this.questionToAdd = { text: '', message: '' };
    this.answerToAdd = { text: '', message : '' };
  }

  public LoadQuestions() {

    this.http.get<Question[]>(this.baseUrl  + 'quiz/questions').subscribe(result => {
      this.questions = result;
    }, error => console.error(error));
  }

  public LoadAnswers() {

    this.http.get<Answer[]>(this.baseUrl + `quiz/answers`).subscribe(result => {
      this.answers = result;
    }, error => console.error(error));
  }

  //questions
  public addQuestion(questionToAdd) {

    this.http.post<any>('quiz/addquestion', { question: questionToAdd.text }).subscribe(data => {
      if (data.errored) {
        this.questionToAdd.message = data.message;
      }
      else {
        questionToAdd.text = "";
        questionToAdd.message = "";
        this.LoadQuestions();
      }
    });
  }
  public editQuestion(index) {
    this.questionToEdit.index = index;
  }
  public canceleditQuestion(index) {
    this.questionToEdit.index = -1;
  }
  public saveeditQuestion(question) {

    this.http.post<any>(`quiz/editquestion`, { id: question.id, name: question.name }).subscribe(data => {
      console.log(data);
      if (data.errored) {
        this.questionToEdit.message = data.message;
      }
      else {
        this.questionToEdit.index = -1;
        this.LoadQuestions();
      }
    })
  }
  //questions

  //answers
  public editAnswer(index) {
    this.answerToEdit.index = index;
  }
  public canceleditAnswer(index) {
    this.answerToEdit.index = -1;
  }
  public saveeditAnswer(answer) {

    this.http.post<any>(`quiz/editanswer`, { id: answer.id, name: answer.name }).subscribe(data => {
      if (data.errored) {
        this.answerToEdit.message = data.message;
      }
      else {
        this.answerToEdit.index = -1;
        this.LoadAnswers();
      }
    })
  }

  public addAnswer(answerToAdd) {
    this.http.post<any>('quiz/addanswer', { answer: answerToAdd.text }).subscribe(data => {
      if (data.errored) {
        this.answerToAdd.message = data.message;
      }
      else {
        answerToAdd.text = "";
        answerToAdd.message = "";
        this.LoadAnswers();
      }
    });
  }
  //answers

}

interface Question {
  id: number,
  name: string,
}
interface Answer {
  id: number,
  name: string,
}

interface QuestionToEdit {
  index: number,
  message: string
}
interface AnswerToEdit {
  index: number,
  message: string
}

interface QuestionToAdd {
  text: string,
  message: string
}
interface AnswerToAdd {
  text: string,
  message: string
}

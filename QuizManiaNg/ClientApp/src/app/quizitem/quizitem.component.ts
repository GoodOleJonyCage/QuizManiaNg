import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
    selector: 'app-quizitem',
    templateUrl: './quizitem.component.html',
    styleUrls: ['./quizitem.component.css']
})
/** quizitem component*/
export class QuizitemComponent {
  public quizes: Quiz[];

  public GetAnswerCount(questions) {

    var count = 0;
    for (var q = 0; q < questions.length; q++) {
      for (var a = 0; a < questions[q].answers.length; a++) {
        count++;
      }
    }
    return count;
  }

  public GetImageIndex(index) {

    let value = (index + 1) % 4;
    if (value == 0)
      value = 4;
    return value;
  }

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<Quiz[]>(baseUrl + 'quiz/quizes').subscribe(result => {
      this.quizes = result;
    }, error => console.error(error));
  }
}

interface Quiz {
  id: number,
  name: string,
  questions: [],
  bestScore: 0
  attempts: 0
}

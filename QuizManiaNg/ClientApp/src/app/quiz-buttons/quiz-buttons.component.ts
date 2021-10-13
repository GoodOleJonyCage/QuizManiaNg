import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-quiz-buttons',
  templateUrl: './quiz-buttons.component.html',
  styleUrls: ['./quiz-buttons.component.css']
})

export class QuizButtonsComponent {

  @Input() currentindex: number;
  @Input() questionlength: number;

  @Output() onMoveForward: EventEmitter<number> = new EventEmitter<number>();
  @Output() onMoveBack: EventEmitter<number> = new EventEmitter<number>();
  @Output() onSubmitQuiz: EventEmitter<number> = new EventEmitter<number>();
  
  public moveToNext() {
    this.onMoveForward.emit(this.currentindex);
  }

  public moveToPrev() {
    this.onMoveBack.emit(this.currentindex);
  }

  public submitQuiz() {
    this.onSubmitQuiz.emit(this.currentindex);
  }

  public GetScore() {
    return 33;
  }

  constructor() {

  }
}

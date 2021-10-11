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
  
  public moveToNext() {
    
    if (this.currentindex == this.questionlength)
      return;
    this.currentindex = this.currentindex + 1;

    this.onMoveForward.emit(this.currentindex);
  }

  public moveToPrev() {
    
    if (this.currentindex == 0)
      return;
    this.currentindex = this.currentindex - 1;

    this.onMoveBack.emit(this.currentindex);
  }

  public Submit() {
    //this.indexChanged.emit(this.currentindex);
  }

  constructor() {

  }
}

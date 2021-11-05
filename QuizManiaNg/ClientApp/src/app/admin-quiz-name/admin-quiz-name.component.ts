import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-quiz-name',
  templateUrl: './admin-quiz-name.component.html',
  styleUrls: ['./admin-quiz-name.component.css']
})

export class AdminQuizNameComponent {

  public name: string;
  public message: string;

  public moveToNextPage() {
    
    if (this.name.length == 0)
      this.message = "Please enter Quiz name";
    else {
      this.message = "";
      this.router.navigate(['/adminquiz', { id:0, name: this.name }]);
    }
  }

  constructor(private router: Router) {
    this.name = "";
    this.message = "";
  }
}

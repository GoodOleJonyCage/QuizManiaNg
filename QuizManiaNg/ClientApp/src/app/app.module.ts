import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { ApiAuthorizationModule } from 'src/api-authorization/api-authorization.module';
import { AuthorizeGuard } from 'src/api-authorization/authorize.guard';
import { AuthorizeInterceptor } from 'src/api-authorization/authorize.interceptor';
import { QuizComponent } from 'src/app/quiz/quiz.component'
import { StartquizComponent } from 'src/app/startquiz/startquiz.component'
import { QuizitemComponent } from './quizitem/quizitem.component';
import { QuizButtonsComponent } from './quiz-buttons/quiz-buttons.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { AdminquestionanswerComponent } from 'src/app/adminquestionanswer/adminquestionanswer.component';
import { AdminquizComponent } from './adminquiz/adminquiz.component';
import { AdminComponent } from './admin/admin.component';
import { AdminQuizNameComponent } from './admin-quiz-name/admin-quiz-name.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    QuizComponent,
    StartquizComponent,
    QuizitemComponent,
    QuizButtonsComponent,
    ProgressBarComponent,
    AdminquestionanswerComponent,
    AdminquizComponent,
    AdminComponent,
    AdminQuizNameComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ApiAuthorizationModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'quiz', component: QuizComponent, pathMatch: 'full' },
      { path: 'quizitem', component: QuizitemComponent, pathMatch: 'full' },
      { path: 'startquiz', component: StartquizComponent, pathMatch: 'full' },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'admin', component: AdminComponent },
      { path: 'adminqas', component: AdminquestionanswerComponent },
      { path: 'adminquiz', component: AdminquizComponent },
      { path: 'adminquizname', component: AdminQuizNameComponent },
      
    ])
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthorizeInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

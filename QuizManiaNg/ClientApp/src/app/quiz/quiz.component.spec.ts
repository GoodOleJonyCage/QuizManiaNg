/// <reference path="../../../../node_modules/@types/jasmine/index.d.ts" />
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { QuizButtonsComponent } from '../quiz-buttons/quiz-buttons.component';
import { QuizComponent } from './quiz.component';
 

let component: QuizComponent;
let fixture: ComponentFixture<QuizComponent>;

describe('quiz component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
          declarations: [QuizComponent, QuizButtonsComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(QuizComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});

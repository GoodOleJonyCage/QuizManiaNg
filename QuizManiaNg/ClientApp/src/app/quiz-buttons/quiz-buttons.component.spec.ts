/// <reference path="../../../../node_modules/@types/jasmine/index.d.ts" />
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { QuizButtonsComponent } from './quiz-buttons.component';

let component: QuizButtonsComponent;
let fixture: ComponentFixture<QuizButtonsComponent>;

describe('quiz-buttons component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ QuizButtonsComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(QuizButtonsComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});
/// <reference path="../../../../node_modules/@types/jasmine/index.d.ts" />
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { QuizitemComponent } from './quizitem.component';

let component: QuizitemComponent;
let fixture: ComponentFixture<QuizitemComponent>;

describe('quizitem component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ QuizitemComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(QuizitemComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});
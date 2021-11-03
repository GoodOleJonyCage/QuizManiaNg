/// <reference path="../../../../node_modules/@types/jasmine/index.d.ts" />
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { AdminQuizNameComponent } from './admin-quiz-name.component';

let component: AdminQuizNameComponent;
let fixture: ComponentFixture<AdminQuizNameComponent>;

describe('AdminQuizName component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ AdminQuizNameComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(AdminQuizNameComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});
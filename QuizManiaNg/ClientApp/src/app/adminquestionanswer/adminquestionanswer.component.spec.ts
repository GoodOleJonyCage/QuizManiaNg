/// <reference path="../../../../node_modules/@types/jasmine/index.d.ts" />
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { AdminquestionanswerComponent } from './adminquestionanswer.component';

let component: AdminquestionanswerComponent;
let fixture: ComponentFixture<AdminquestionanswerComponent>;

describe('adminquestionanswer component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ AdminquestionanswerComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(AdminquestionanswerComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});
/// <reference path="../../../../node_modules/@types/jasmine/index.d.ts" />
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { StartquizComponent } from './startquiz.component';

let component: StartquizComponent;
let fixture: ComponentFixture<StartquizComponent>;

describe('startquiz component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ StartquizComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(StartquizComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});
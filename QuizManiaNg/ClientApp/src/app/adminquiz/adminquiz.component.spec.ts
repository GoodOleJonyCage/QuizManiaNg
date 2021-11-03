/// <reference path="../../../../node_modules/@types/jasmine/index.d.ts" />
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { AdminquizComponent } from './adminquiz.component';

let component: AdminquizComponent;
let fixture: ComponentFixture<AdminquizComponent>;

describe('adminquiz component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ AdminquizComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(AdminquizComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});
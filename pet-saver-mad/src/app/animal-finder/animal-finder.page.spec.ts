import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalFinderPage } from './animal-finder.page';

describe('AnimalFinderPage', () => {
  let component: AnimalFinderPage;
  let fixture: ComponentFixture<AnimalFinderPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimalFinderPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalFinderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

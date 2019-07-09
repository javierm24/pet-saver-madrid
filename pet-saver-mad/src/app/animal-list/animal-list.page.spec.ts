import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalListPage } from './animal-list.page';

describe('AnimalListPage', () => {
  let component: AnimalListPage;
  let fixture: ComponentFixture<AnimalListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimalListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

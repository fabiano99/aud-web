import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JuriPopularComponent } from './juri-popular.component';

describe('JuriPopularComponent', () => {
  let component: JuriPopularComponent;
  let fixture: ComponentFixture<JuriPopularComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JuriPopularComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JuriPopularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

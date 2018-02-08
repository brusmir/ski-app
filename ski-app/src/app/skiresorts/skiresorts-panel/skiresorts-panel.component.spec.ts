import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkiresortsPanelComponent } from './skiresorts-panel.component';

describe('SkiresortsPanelComponent', () => {
  let component: SkiresortsPanelComponent;
  let fixture: ComponentFixture<SkiresortsPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkiresortsPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkiresortsPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkiTracksComponent } from './ski-tracks.component';

describe('SkiTracksComponent', () => {
  let component: SkiTracksComponent;
  let fixture: ComponentFixture<SkiTracksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkiTracksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkiTracksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

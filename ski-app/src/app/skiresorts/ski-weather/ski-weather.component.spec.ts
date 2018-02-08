import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkiWeatherComponent } from './ski-weather.component';

describe('SkiWeatherComponent', () => {
  let component: SkiWeatherComponent;
  let fixture: ComponentFixture<SkiWeatherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkiWeatherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkiWeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

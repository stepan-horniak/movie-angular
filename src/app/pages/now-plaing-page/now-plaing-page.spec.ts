import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NowPlaingPage } from './now-plaing-page';

describe('NotPlaingPage', () => {
  let component: NowPlaingPage;
  let fixture: ComponentFixture<NowPlaingPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NowPlaingPage],
    }).compileComponents();

    fixture = TestBed.createComponent(NowPlaingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

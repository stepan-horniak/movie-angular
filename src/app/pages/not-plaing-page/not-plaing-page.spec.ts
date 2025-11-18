import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotPlaingPage } from './not-plaing-page';

describe('NotPlaingPage', () => {
  let component: NotPlaingPage;
  let fixture: ComponentFixture<NotPlaingPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotPlaingPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotPlaingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

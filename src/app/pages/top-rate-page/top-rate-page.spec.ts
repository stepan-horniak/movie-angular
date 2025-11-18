import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopRatePage } from './top-rate-page';

describe('TopRatePage', () => {
  let component: TopRatePage;
  let fixture: ComponentFixture<TopRatePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopRatePage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopRatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

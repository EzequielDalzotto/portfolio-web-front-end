import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerPanelComponent } from './banner-panel.component';

describe('BannerPanelComponent', () => {
  let component: BannerPanelComponent;
  let fixture: ComponentFixture<BannerPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannerPanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BannerPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

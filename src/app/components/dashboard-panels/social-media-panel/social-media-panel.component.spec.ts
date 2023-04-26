import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialMediaPanelComponent } from './social-media-panel.component';

describe('SocialMediaPanelComponent', () => {
  let component: SocialMediaPanelComponent;
  let fixture: ComponentFixture<SocialMediaPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocialMediaPanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SocialMediaPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutMePanelComponent } from './about-me-panel.component';

describe('AboutMePanelComponent', () => {
  let component: AboutMePanelComponent;
  let fixture: ComponentFixture<AboutMePanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutMePanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutMePanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MockService } from '../core/mock-service';
import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let snackBar;

  beforeEach(() => {
    snackBar = new MockService();
    component = new HeaderComponent(snackBar);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should test openRepo', () => {
    spyOn(window, 'open');
    component.openRepo();
    expect(window.open).toHaveBeenCalledWith(component.repoUrl);
  });

  it('should test shareApp', () => {
    // spyOn(document, 'execCommand');
    component.shareApp();
    expect(snackBar.open).toHaveBeenCalled();
    // expect(document.execCommand).toHaveBeenCalledWith('copy');
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { By } from '@angular/platform-browser';

describe('Calculator App Testing', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('Label Existence', () => {
    it('should have a label for the first number', () => {
      const label = fixture.debugElement.query(By.css('#firstNumber'));
      expect(label).toBeTruthy();
    });
    it('should have a label for the second number', () => {
      const label = fixture.debugElement.query(By.css('#secondNumber'));
      expect(label).toBeTruthy();
    });
  });

  describe('GetNumber Function' , () => {
    it('should change the value of the first number', () => {
      component.getNumber('1', 0);
      fixture.detectChanges();
      expect(component.firstNumber).toEqual(1);
    });
    it('should change the value of the second number', () => {
      component.getNumber('1', 1);
      fixture.detectChanges();
      expect(component.secondNumber).toEqual(1);
    });
    it('should check if getNumber function is called', () => {
      spyOn(component, 'getNumber');
      component.getNumber('2', 0);
      fixture.detectChanges();
      expect(component.getNumber).toHaveBeenCalled();
    });  

    it('should check if which is 0', () => {
      component.getNumber('3', 0);
      fixture.detectChanges();
      expect(component.firstNumber).toBe(3);
    });

    it('should check if which is 1', () => {
      component.getNumber('4', 1);
      fixture.detectChanges();
      expect(component.secondNumber).toBe(4);
    });
  });

  it('should check if ngif is working', () => {
    fixture.detectChanges();
    expect(component.result).toBeUndefined();
  });

  describe('Button Functions', () => {
    it('should check if add function is called', () => {
      expect(component.result).toBeUndefined();
      const button = fixture.debugElement.query(By.css('#add'));
      button.triggerEventHandler('click', null);
      fixture.detectChanges();
      expect(component.result).toBeNaN();

      spyOn(component, 'add');
      component.add();
      fixture.detectChanges();
      expect(component.add).toHaveBeenCalled();
    });

    it('should check if subtract function is called', () => {
      expect(component.result).toBeUndefined();
      const button = fixture.debugElement.query(By.css('#subtract'));
      button.triggerEventHandler('click', null);
      fixture.detectChanges();
      expect(component.result).toBeNaN();

      spyOn(component, 'subtract');
      component.subtract();
      fixture.detectChanges();
      expect(component.subtract).toHaveBeenCalled();
    });

    it('should check if multiply function is called', () => {
      expect(component.result).toBeUndefined();
      const button = fixture.debugElement.query(By.css('#multiply'));
      button.triggerEventHandler('click', null);
      fixture.detectChanges();
      expect(component.result).toBeNaN();

      spyOn(component, 'multiply');
      component.multiply();
      fixture.detectChanges();
      expect(component.multiply).toHaveBeenCalled();
    });

    it('should check if divide function is called', () => {
      expect(component.result).toBeUndefined();
      const button = fixture.debugElement.query(By.css('#divide'));
      button.triggerEventHandler('click', null);
      fixture.detectChanges();
      expect(component.result).toBeNaN();

      spyOn(component, 'divide');
      component.divide();
      fixture.detectChanges();
      expect(component.divide).toHaveBeenCalled();
    });
  });

  describe('Calculator Operations', () => {
    it('should add if add function is called', () => {
      component.getNumber('2', 0);
      component.getNumber('3', 1);
      component.add();
      fixture.detectChanges();
      expect(component.result).toEqual(5);
    });

    it('should subtract if subtract function is called', () => {
      component.getNumber('2', 0);
      component.getNumber('3', 1);
      component.subtract();
      fixture.detectChanges();
      expect(component.result).toEqual(-1);
    });

    it('should multiply if multiply function is called', () => {
      component.getNumber('2', 0);
      component.getNumber('3', 1);
      component.multiply();
      fixture.detectChanges();
      expect(component.result).toEqual(6);
    });

    it('should divide if divide function is called', () => {
      component.getNumber('2', 0);
      component.getNumber('3', 1);
      component.divide();
      fixture.detectChanges();
      expect(component.result).toEqual(0.6666666666666666);
    });
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsPreviewComponent } from './products-preview.component';
import { By } from '@angular/platform-browser';
import { ValidationPipe } from '../pipes/validation.pipe';


describe('ProductsPreviewComponent', () => {
  let component: ProductsPreviewComponent;
  let fixture: ComponentFixture<ProductsPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsPreviewComponent, ValidationPipe ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  const testCases = [
    // * current-account
    {
      student: null,
      income: '2',
      age: '18',
      result: 'should',
      truthy: true,
      id: '#current-account'
    },
    {
      student: null,
      income: '0',
      age: '18',
      result: 'should not',
      truthy: false,
      id: '#current-account'
    },
    {
      student: null,
      income: '0',
      age: '18',
      result: 'should not',
      truthy: false,
      id: '#current-account'
    },
    // * current-account-plus
    {
      student: null,
      income: '40001',
      age: '18',
      result: 'should',
      truthy: true,
      id: '#current-account-plus'
    },
    {
      student: null,
      income: '40000',
      age: '18',
      result: 'should not',
      truthy: false,
      id: '#current-account-plus'
    },
    {
      student: null,
      income: '40001',
      age: '17',
      result: 'should not',
      truthy: false,
      id: '#current-account-plus'
    },
    // * #junior-saver-account
    {
      student: null,
      income: null,
      age: '17',
      result: 'should',
      truthy: true,
      id: '#junior-saver-account'
    },
    {
      student: null,
      income: null,
      age: '18',
      result: 'should not',
      truthy: false,
      id: '#junior-saver-account'
    },
    // * #student-account
    {
      student: 1,
      income: null,
      age: '18',
      result: 'should',
      truthy: true,
      id: '#student-account'
    },
    {
      student: 0,
      income: null,
      age: '18',
      result: 'should not',
      truthy: false,
      id: '#student-account'
    },
    {
      student: 1,
      income: null,
      age: '17',
      result: 'should not',
      truthy: false,
      id: '#student-account'
    },
    // * #senior-account
    {
      student: null,
      income: null,
      age: '65',
      result: 'should',
      truthy: true,
      id: '#senior-account'
    },
    {
      student: null,
      income: null,
      age: '64',
      result: 'should not',
      truthy: false,
      id: '#senior-account'
    },
    // * #debit-card
    {
      student: null,
      income: '11999',
      age: '18',
      result: 'should',
      truthy: true,
      id: '#debit-card'
    },
    {
      student: null,
      income: '12000',
      age: '18',
      result: 'should not',
      truthy: false,
      id: '#debit-card'
    },
    {
      student: null,
      income: '11999',
      age: '17',
      result: 'should not',
      truthy: false,
      id: '#debit-card'
    },
    // * #credit-card
    {
      student: null,
      income: '12001',
      age: '18',
      result: 'should',
      truthy: true,
      id: '#credit-card'
    },
    {
      student: null,
      income: '11999',
      age: '18',
      result: 'should not',
      truthy: false,
      id: '#credit-card'
    },
    {
      student: null,
      income: '12000',
      age: '17',
      result: 'should not',
      truthy: false,
      id: '#credit-card'
    },
    // * #gold-credit-card
    {
      student: null,
      income: '40001',
      age: '18',
      result: 'should',
      truthy: true,
      id: '#gold-credit-card'
    },
    {
      student: null,
      income: '40001',
      age: '17',
      result: 'should not',
      truthy: false,
      id: '#gold-credit-card'
    },
    {
      student: null,
      income: '39999',
      age: '18',
      result: 'should not',
      truthy: false,
      id: '#gold-credit-card'
    },
  ];

  testCases.forEach(({student, income, age, result, truthy, id}) => {
    fit(`${id} ${result} have is-primary class`, (done) => {
      component.formState = {
        student,
        income,
        age
      };
      fixture.detectChanges();
      const product = fixture.debugElement.query(By.css(id));

      if (truthy) {
        expect(product.classes['is-primary']).toBeTruthy();
      } else {
        expect(product.classes['is-primary']).toBeFalsy();
      }
      done();
    });
  });

});

/* tslint:disable:no-unused-variable */
import {
  async,
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HttpModule } from '@angular/http';
import { TodosComponent } from './todos.component';
import { TodoService } from './todo.service';
import { from } from 'rxjs';

//NOTE: I've deliberately excluded this suite from running
// because the test will fail. This is because we have not
// provided the TodoService as a dependency to TodosComponent.
//
// When you get to Lecture 6 (Providing Dependencies), be sure
// to remove "x" from "xdescribe" below.

describe('TodosComponent', () => {
  let component: TodosComponent;
  let fixture: ComponentFixture<TodosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      declarations: [TodosComponent],
      providers: [TodoService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodosComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should load todos from the server', () => {
  //   let service = TestBed.get(TodoService);
  //   spyOn(service, 'getTodos').and.returnValue(from([[1, 2, 3]]));

  //   fixture.detectChanges();

  //   expect(component.todos.length).toBe(3);
  // });

  it('should load todos from the server (async mode)', fakeAsync(() => {
    // it('should load todos from the server (async mode)', async(() => { // another mode
    let service = TestBed.get(TodoService);
    spyOn(service, 'getTodosPromise').and.returnValue(
      Promise.resolve([[1, 2, 3]])
    );

    fixture.detectChanges();

    // Async mode
    // fixture.whenStable().then(() => {
    //   expect(component.todos.length).toBe(3);
    // });

    tick();
    expect(component.todos.length).toBe(3); // fakeAsync mode, executes without fixture.whenStable()....
  }));
});

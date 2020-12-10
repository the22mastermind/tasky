import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { TodoService } from './todo.service';

describe('TodoService', () => {
  let service: TodoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TodoService]
    });
    // service = TestBed.inject(TodoService);
    service = TestBed.get(TodoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('Todos', () => {
    it('should return a list of todos', () => {
      const TodosResponse = [
        {
          id: 1,
          title: 'delectus aut autem',
          completed: false,
        },
        {
          id: 2,
          title: 'quis ut nam facilis et officia qui',
          completed: false,
        },
        {
          id: 3,
          title: 'fugiat veniam minus',
          completed: false,
        },
        {
          id: 4,
          title: 'et porro tempora',
          completed: true,
        },
        {
          id: 5,
          title: 'laboriosam mollitia et enim quasi adipisci quia provident illum',
          completed: false,
        },
      ];
      let response;

      spyOn(service, 'getTodos').and.returnValue(of(TodosResponse));
      service.getTodos().subscribe(res => {
        response = res;
      });

      expect(response).toEqual(TodosResponse);
    });
  });

});

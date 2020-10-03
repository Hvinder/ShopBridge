import { BehaviorSubject, of } from 'rxjs';
import { mockItems } from '../item-form/mocks/items.mock';

export class MockService {
  open = jest.fn();
  removeItem = jest.fn();
  getItemById = jest.fn().mockReturnValue(mockItems[0]);
  fetchItems = jest.fn();
  addItem = jest.fn();
  itemsUpdated = new BehaviorSubject(mockItems);
  get = jest.fn().mockReturnValue(of(mockItems));
  post = jest.fn().mockReturnValue(of(mockItems[0]));
  delete = jest.fn().mockReturnValue(of(mockItems[0]));
  deleteItem = new BehaviorSubject(null);
  snapshot = {
    paramMap: {
      get: jest.fn().mockReturnValue(1),
    },
  };
}

export class MockApiService {
  addItem = jest.fn().mockReturnValue(of(mockItems[0]));
  deleteItem = jest.fn().mockReturnValue(of(mockItems[0]));
  fetchItems = jest.fn().mockReturnValue(of(mockItems));
}

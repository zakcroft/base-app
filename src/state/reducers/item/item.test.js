import item from './';

describe('Item', () => {

  let stateBefore, stateAfter;

  beforeEach(() => {
    stateBefore = {
      _id: 0,
      name: 'name',
      available: true,
      price: 100
    };
    stateAfter = {
      _id: 0,
      name: 'name',
      available: true,
      price: 100
    }
  });

  test('Add item', () => {
    stateBefore = {};
    expect(item(stateBefore, {
      type: 'ADD_ITEM',
      payload: {
        _id: 0,
        name: 'name',
        available: true,
        price: 100
      }
    })).toEqual(stateAfter);
  });

  test('Change name', () => {
    stateAfter.name = 'new name';
    expect(item(stateBefore, {
      type: 'CHANGE_NAME',
      payload: {
        _id: 0,
        name: 'new name'
      }
    })).toEqual(stateAfter);
  });

  test('Change availability', () => {
    stateAfter.available = false;
    expect(item(stateBefore, {
      type: 'CHANGE_AVAILABILITY',
      payload: {
        _id: 0,
        available: false
      }
    })).toEqual(stateAfter);
  });

  test('Change price', () => {
    stateAfter.price = 200;
    expect(item(stateBefore, {
      type: 'CHANGE_PRICE',
      payload: {
        _id: 0,
        price: 200
      }
    })).toEqual(stateAfter);
  });
});

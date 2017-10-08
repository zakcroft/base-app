import items from './';

describe('Items', () => {

  let stateBefore, stateAfter;

  beforeEach(() => {
    stateBefore = [{
      _id: 0,
      name: 'name',
      available: true,
      price: 100
    }, {
      _id: 1,
      name: 'name_2',
      available: true,
      price: 200
    }];
    stateAfter = [{
      _id: 0,
      name: 'name',
      available: true,
      price: 100
    }, {
      _id: 1,
      name: 'name_2',
      available: true,
      price: 200
    }];
  });

  test('Add item', () => {
    stateAfter = [...stateAfter, {
      _id: 2,
      name: 'name_3',
      available: true,
      price: 300
    }];
    expect(items(stateBefore, {
      type: 'ADD_ITEM',
      payload: {
        _id: 2,
        name: 'name_3',
        available: true,
        price: 300
      }
    })).toEqual(stateAfter);
  });

  test('Change name', () => {
    stateAfter[1].name = 'changed name';
    expect(items(stateBefore, {
      type: 'CHANGE_NAME',
      payload: {
        _id: 1,
        name: 'changed name'
      }
    })).toEqual(stateAfter);
  });

  test('Change available', () => {
    stateAfter[1].available = false;
    expect(items(stateBefore, {
      type: 'CHANGE_AVAILABILITY',
      payload: {
        _id: 1,
        available: false
      }
    })).toEqual(stateAfter);
  });

  test('Change price', () => {
    stateAfter[1].price = 300;
    expect(items(stateBefore, {
      type: 'CHANGE_PRICE',
      payload: {
        _id: 1,
        price: 300
      }
    })).toEqual(stateAfter);
  });
});

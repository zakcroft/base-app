import {
  ADD_ITEM,
  CHANGE_NAME,
  CHANGE_AVAILABILITY,
  CHANGE_PRICE
} from '../../constants';

import item from '../item';

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return [
        ...state,
        item(undefined, action)
      ];
    case CHANGE_NAME:
      return state.map(i => item(i, action));
    case CHANGE_AVAILABILITY:
      return state.map(i => item(i, action));
    case CHANGE_PRICE:
      return state.map(i => item(i, action));
    default:
      return state
  }
}

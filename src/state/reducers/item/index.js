import {
  ADD_ITEM,
  CHANGE_NAME,
  CHANGE_AVAILABILITY,
  CHANGE_PRICE
} from '../../constants';

const initialState = {};

export default (state = initialState, { type, payload }) => {

  switch (type) {

    case ADD_ITEM:
      return {
        ...state,
        ...payload
      };
    case CHANGE_NAME:
      if (state._id !== payload._id) {
        return state;
      }

      return {
        ...state,
        name: payload.name
      };
    case CHANGE_AVAILABILITY:
      if (state._id !== payload._id) {
        return state;
      }

      return {
        ...state,
        available: !state.available
      };
    case CHANGE_PRICE:
      if (state._id !== payload._id) {
        return state;
      }

      return {
        ...state,
        price: payload.price
      };
    default:
      return state
  }
}

import {
  CHANGE_AVAILABILITY,
  CHANGE_PRICE
} from '../constants';

export const changeAvailability = () => ({
  type: CHANGE_AVAILABILITY
});

export const changePrice = price => ({
  type: CHANGE_PRICE,
  payload: price
});

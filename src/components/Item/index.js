import React, { Component } from 'react';
import { connect } from 'react-redux'

import { changeAvailability } from '../../state/actions/item'

class Item extends Component {

  static defaultProps = {
    name: '',
    available: false,
    price: 0
  };

  render () {
    const {
      changeAvailability, name, available, price,
    } = this.props;

    return (
      <li>
        <span>{name}</span>
        <span>{available}</span>
        <span>{price}</span>
        <button onClick={changeAvailability}> Change Availability</button>
      </li>
    );
  }
}

export const mapStateToProps = (state) => ({
  name: state.name,
  available: state.available,
  price: state.price
});

const mapDispatchToProps = dispatch => {
  return {
    changeAvailability: () => {
      dispatch(changeAvailability())
    }
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Item);

import React, { Component } from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';

import Item from '../Item'

class App extends Component {
  // static propTypes = {};

  static defaultProps = {
    items: [],
  };

  render () {

    const {
      items
    } = this.props;

    return (
      <main>
        {!!items.length &&
        <ul>
          {items.map((item, i) => {
            return <Item {...item} key={i}/>
          })}
        </ul>}
      </main>
    );
  }
}

export const mapStateToProps = (state) => {
  return {
    items: state.items
  }
};

export default connect(
  mapStateToProps
)(App)

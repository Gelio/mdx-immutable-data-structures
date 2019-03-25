import React, { Component } from 'react';

export class Counter extends Component {
  shouldComponentUpdate(nextProps) {
    if (this.props.counter === nextProps.counter) {
      return false;
    }

    return true;
  }

  render() {
    const value = this.props.state.getIn(['counter', 'value']);

    return (
      <div class="counter">
        <span class="counter__value">{value}</span>
        <button class="counter__increment" onClick={this.props.increment}>
          +
        </button>
      </div>
    );
  }
}

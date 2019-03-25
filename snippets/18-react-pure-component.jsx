import React, { PureComponent } from 'react';

export class Counter extends PureComponent {
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

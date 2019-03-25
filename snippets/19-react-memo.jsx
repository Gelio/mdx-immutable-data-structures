import React, { useEffect } from 'react';

function Counter(props) {
  const value = props.state.getIn(['counter', 'value']);

  useEffect(() => {
    console.log('Counter is at', value);
  }, [value]);

  return (
    <div class="counter">
      <span class="counter__value">{value}</span>
      <button class="counter__increment" onClick={this.props.increment}>
        +
      </button>
    </div>
  );
}

export const MemoizedCounter = React.memo(Counter);

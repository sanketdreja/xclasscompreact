import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    // Initial state with count set to 0
    this.state = {
      count: 0,
    };

    // Binding the methods
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  // Method to handle incrementing the count
  increment() {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  }

  // Method to handle decrementing the count
  decrement() {
    this.setState((prevState) => ({
      count: prevState.count - 1,
    }));
  }

  // Render method to display the current count and buttons
  render() {
    return (
      <div>
        {/* Display the count */}
        <h1>Counter App</h1>
        <p>Count: {this.state.count}</p>
        {/* Increment button */}
        <button onClick={this.increment}>Increment</button>
        {/* Decrement button */}
        <button onClick={this.decrement}>Decrement</button>
      </div>
    );
  }
}

export default Counter;

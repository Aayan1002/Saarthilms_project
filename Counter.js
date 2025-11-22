import React, { Component } from 'react';

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
  }

  handleIncrease = () => {
    this.setState({ count: this.state.count + 1 });
  };

  handleDecrease = () => {
    this.setState({ count: this.state.count - 1 });
  };

  handleReset = () => {
    this.setState({ count: 0 });
  };

  render() {
    return (
      <div style={{ marginTop: "30px" }}>
        <h2>Counter using Class Component:</h2>
        <h1>{this.state.count}</h1>

        <button 
          onClick={this.handleIncrease} 
          style={{ margin: "10px", padding: "10px 20px", cursor: "pointer" }}
        >
          Add ➕
        </button>

        <button 
          onClick={this.handleDecrease} 
          style={{ margin: "10px", padding: "10px 20px", cursor: "pointer" }}
        >
          Decrease ➖
        </button>

        <button 
          onClick={this.handleReset} 
          style={{ margin: "10px", padding: "10px 20px", background: "#ff4d4d", cursor: "pointer" }}
        >
          Reset 🔁
        </button>
      </div>
    );
  }
}

export default Counter;

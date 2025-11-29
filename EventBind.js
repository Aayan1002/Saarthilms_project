import React, { Component } from 'react';

class EventBind extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: 'Hello 👋'
    };

    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler() {
    this.setState({
      message: 'Goodbye 👋'
    });
    console.log('Button clicked – message changed!');
  }

  render() {
    return (
      <div style={styles.container}>
        <div style={styles.card}>
          <h1 style={styles.text}>{this.state.message}</h1>
          <button style={styles.button} onClick={this.clickHandler}>
            Click Me
          </button>
        </div>
      </div>
    );
  }
}

// --- Inline Styling (clean and minimal) ---

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    background: '#f5f6fa'
  },
  card: {
    background: '#ffffff',
    padding: '40px 50px',
    borderRadius: '12px',
    boxShadow: '0px 4px 15px rgba(0,0,0,0.1)',
    textAlign: 'center',
  },
  text: {
    marginBottom: '20px',
    fontFamily: 'Arial, sans-serif',
    color: '#2d3436'
  },
  button: {
    background: '#0984e3',
    color: 'white',
    padding: '12px 25px',
    border: 'none',
    fontSize: '16px',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: '0.2s',
  }
};

export default EventBind;

import React, { Component } from 'react';
import { Section } from './Section/Section';

export class App extends Component {
  state = {
        good: 0,
        neutral: 0,
        bad: 0,
  }
  onCountTotal = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }

  onCountPositive = () => {
    return Math.round(this.state.good / this.onCountTotal() * 100)
  }

  onSetState = (option) => {
    this.setState(prevState => ({
      [option]: prevState[option] + 1
    }))
  };
  
  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101'
        }}
      >
        <Section
          title={"Please Leave feedback"}
          options={Object.keys(this.state)}
          onBtnClick={this.onSetState}
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.onCountTotal()}
          positive={this.onCountPositive()}
        />
      </div>
  );
  }
  
};

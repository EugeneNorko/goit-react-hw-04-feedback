import React, { Component } from 'react';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from 'components/Statistics/Statistics';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  countTotal = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositive = () => {
    return Math.round((this.state.good / this.countTotal()) * 100);
  };

  updateState = option => {
    this.setState(prevState => ({
      [option]: prevState[option] + 1,
    }));
  };

  render() {
    return (
      <div className="container">
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onBtnClick={this.updateState}
          />
        </Section>
        <Section title="Statistics">
          {this.countTotal() > 0 ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotal()}
              positive={this.countPositive()}
            />
          ) : (
            <p>There is no feedback</p>
          )}
        </Section>
      </div>
    );
  }
}

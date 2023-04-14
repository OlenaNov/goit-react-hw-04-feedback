import React, { Component } from "react";

import FeedbackOptions from "./FeedbackOptions";
import Statistics from "./Statistics";
import options from "./options";
import Section from "./Section";
import Notification from "./Notification";

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };


  handleFeedback = e => {
    const valueFeedback = e.currentTarget.name;

    this.setState(prevState => ({
        [valueFeedback]: prevState[valueFeedback] + 1,
    }))
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
};

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    if(good) {
        return Math.round(good / total * 100);
    }; 
};

  render () {
    return (
        <>
        <Section title="Please leave feedback">
            <FeedbackOptions 
            options={options()}
            onLeaveFeedback={this.handleFeedback}
            />
        </Section>
        <Section title="Statistics">
        {this.countTotalFeedback() 
        ? (
            <Statistics 
            good={this.state.good} 
            neutral={this.state.neutral} 
            bad={this.state.bad} 
            total={this.countTotalFeedback} 
            positivePercentage={this.countPositiveFeedbackPercentage}
            />) 
            : <Notification message="There is no feedback"></Notification>}
        </Section>
        </>
    )
  }
};
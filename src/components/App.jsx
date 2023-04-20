import React, { useState } from "react";

import FeedbackOptions from "./FeedbackOptions";
import Statistics from "./Statistics";
import options from "./options";
import Section from "./Section";
import Notification from "./Notification";

export function App() {

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleFeedback = e => {
    const valueFeedback = e.currentTarget.name;

    switch(valueFeedback) {
      case 'good':
        setGood(s => s + 1);
        break;

      case 'neutral':
        setNeutral(s => s + 1);
        break;

      case 'bad':
        setBad(s => s + 1);
        break;

      default:
        return;
    };
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
};

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    if(good) {
        return Math.round(good / total * 100);
    }; 
};

    return (
        <>
        <Section title="Please leave feedback">
            <FeedbackOptions 
            options={options()}
            onLeaveFeedback={handleFeedback}
            />
        </Section>
        <Section title="Statistics">
        {countTotalFeedback() 
        ? (
            <Statistics 
            good={good} 
            neutral={neutral} 
            bad={bad} 
            total={countTotalFeedback} 
            positivePercentage={countPositiveFeedbackPercentage}
            />) 
            : <Notification message="There is no feedback"></Notification>}
        </Section>
        </>
    )
};
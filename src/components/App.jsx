import { useState } from 'react';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from 'components/Statistics/Statistics';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const countTotal = () => {
    return good + neutral + bad;
  };

  const countPositive = () => {
    return Math.round((good / countTotal()) * 100);
  };

  const handleFeedbackClick = name => {
    // console.log(e);
    switch (name) {
      case `Good`:
        setGood(prevState => prevState + 1);
        break;
      case 'Neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'Bad':
        setBad(prevState => prevState + 1);
        break;
      default:
        return;
    }
  };

  return (
    <div className="container">
      <Section title="Please leave feedback">
        <FeedbackOptions onBtnClick={handleFeedbackClick} />
      </Section>
      <Section title="Statistics">
        {countTotal() > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotal()}
            positive={countPositive()}
          />
        ) : (
          <p>There is no feedback</p>
        )}
      </Section>
    </div>
  );
};
// export class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };
//   countTotal = () => {
//     const { good, neutral, bad } = this.state;
//     return good + neutral + bad;
//   };

//   countPositive = () => {
//     return Math.round((this.state.good / this.countTotal()) * 100);
//   };

//   updateState = option => {
//     this.setState(prevState => ({
//       [option]: prevState[option] + 1,
//     }));
//   };

//   render() {
//     return (
//       <div className="container">
//         <Section title="Please leave feedback">
//           <FeedbackOptions
//             options={Object.keys(this.state)}
//             onBtnClick={this.updateState}
//           />
//         </Section>
//         <Section title="Statistics">
//           {this.countTotal() > 0 ? (
//             <Statistics
//               good={this.state.good}
//               neutral={this.state.neutral}
//               bad={this.state.bad}
//               total={this.countTotal()}
//               positive={this.countPositive()}
//             />
//           ) : (
//             <p>There is no feedback</p>
//           )}
//         </Section>
//       </div>
//     );
//   }
// }

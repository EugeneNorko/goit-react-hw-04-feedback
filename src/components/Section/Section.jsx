import css from './Section.module.css';
import { FeedbackOptions } from '../FeedbackOptions/FeedbackOptions';
import { Statistics } from 'components/Statistics/Statistics';

export const Section = ({ title, options, onBtnClick, good, neutral, bad, total, positive }) => {
    return (
        <>
            <section className={css.section}>
                <h1 className={css.section__title}>{title}</h1>
                <FeedbackOptions options={options} onBtnClick={onBtnClick} />
                
                {total > 0 ?
                    <Statistics
                        title={"Statistics"}
                        good={good}
                        neutral={neutral}
                        bad={bad}
                        total={total}
                        positive={positive} />
                    : <p>No feedback given</p> }
            </section>
        </>
    )
}
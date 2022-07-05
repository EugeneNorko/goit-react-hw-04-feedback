import css from './Statistics.module.css';

export const Statistics = ({title, good, neutral, bad, total, positive}) => {
    return (
        <>
            <h2 className={css.statistics__title}>{title}</h2>
            <p className={css.statistics__item}>Good:{good}</p>
            <p className={css.statistics__item}>Neutral:{neutral}</p>
            <p className={css.statistics__item}>Bad:{bad}</p>
            <p className={css.statistics__item}>Total:{total}</p>
            <p className={css.statistics__item}>Positive Feedback:{positive}%</p>
        </>
    );
}
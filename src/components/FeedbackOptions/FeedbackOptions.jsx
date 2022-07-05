import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, onBtnClick }) => {
  return (
    <p className={css['feedback__button-wrapp']}>
      {options.map(option => {
        return (
          <button
            key={option}
            type="button"
            className={css.feedback__button}
            onClick={() => onBtnClick(option)}
          >
            {option}
          </button>
        );
      })}
    </p>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.array,
  onBtnClick: PropTypes.func,
};

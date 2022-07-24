import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ onBtnClick }) => {
  const FEEDBACK_BUTTON = ['Good', 'Neutral', 'Bad'];
  return (
    <p className={css['feedback__button-wrapp']}>
      {FEEDBACK_BUTTON.map(button => {
        return (
          <button
            key={button}
            type="button"
            className={css.feedback__button}
            onClick={() => onBtnClick(button)}
          >
            {button}
          </button>
        );
      })}
    </p>
  );
};

FeedbackOptions.propTypes = {
  onBtnClick: PropTypes.func,
};

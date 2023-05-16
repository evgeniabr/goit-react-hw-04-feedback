import React from 'react';
import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

export function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <div>
      {options.map(item => {
        return (
          <button
            className={css.button}
            key={item}
            type="button"
            name={item}
            onClick={onLeaveFeedback}
          >
            {item}
          </button>
        );
      })}
    </div>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

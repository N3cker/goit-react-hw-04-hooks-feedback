import PropTypes from 'prop-types';

const FeedbackOptions = ({ value, setValue, buttonName }) => {
  const handleClick = () => {
    setValue(value + 1);
  };

  return <button onClick={handleClick}>{buttonName}</button>;
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  value: PropTypes.number.isRequired,
  setValue: PropTypes.func.isRequired,
  buttonName: PropTypes.string.isRequired,
};

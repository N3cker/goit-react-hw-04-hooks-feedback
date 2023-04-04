import PropTypes from 'prop-types';
import Notification from './Notification';

const Statistics = ({ g, n, b, t, p }) => {
  if (t) {
    return (
      <ul>
        <li>Good: {g}</li>
        <li>Neutral: {n}</li>
        <li>Bad: {b}</li>
        <li>Total: {t}</li>
        <li>Positive Feedback: {p}%</li>
      </ul>
    );
  } else {
    return (
      <div>
        <Notification message={'There is no feedback'} />
      </div>
    );
  }
};

export default Statistics;

Statistics.propTypes = {
  g: PropTypes.number.isRequired,
  n: PropTypes.number.isRequired,
  b: PropTypes.number.isRequired,
  t: PropTypes.number.isRequired,
  p: PropTypes.number.isRequired,
};

import PropTypes from 'prop-types';

export default function Stats({ label, percentage }) {
  return (
    <>
      <span className="label">{label}</span>
      <span className="percentage">{percentage}</span>
    </>
  );
}

Stats.propTypes = {
  label: PropTypes.string,
  persentage: PropTypes.number,
};

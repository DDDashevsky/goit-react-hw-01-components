import PropTypes from 'prop-types';
import Stats from './Stats';

export default function Data({ title, stats }) {
  return (
    <section className="statistics">
      {title && <h2 className="title">{title}</h2>}

      <ul className="stat-list">
        {stats.map(item => (
          <li key={item.id}>
            <Stats label={item.label} percentage={item.percentage} />
          </li>
        ))}
      </ul>
    </section>
  );
}

Data.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array,
};

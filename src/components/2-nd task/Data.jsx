import PropTypes from 'prop-types';
import Stats from './Stats';
import getRandomHexColor from 'randomHex';
import css from 'components/2-nd task/Data.module.css';

export default function Data({ title, stats }) {
  return (
    <section className={css.stats}>
      {title && <h2 className={css.statsTitle}>{title}</h2>}

      <ul className={css.statsList}>
        {stats.map(item => (
          <li
            className={css.statsListItem}
            style={{
              flexBasis: 300 / stats.length,
              backgroundColor: getRandomHexColor(),
            }}
            key={item.id}
          >
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

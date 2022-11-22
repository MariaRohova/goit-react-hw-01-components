import PropTypes from 'prop-types';
import css from './Statistics.module.css';
import getRandomHexColor from '../utils/randomColor'

export function Statistics ({ title, stats }) {
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title} </h2>}

      <ul className={css.statList}>
        {stats.map(({ id, label, percentage }) => (
          <li
            style={{ backgroundColor: getRandomHexColor() }}
            className={css.item}
            key={id}
          >
            <span className={css.label}>{label}</span>
            <span className={css.percentage}>{percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}


Statistics.protoTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
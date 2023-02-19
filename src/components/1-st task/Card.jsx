import PropTypes from 'prop-types';
import clsx from 'clsx';
import css from './Card.module.css';

export default function UserCard({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) {
  return (
    <div className={css.profile}>
      <div className={css.description}>
        <img src={avatar} alt="User avatar" className={css.avatar} />
        <p className={clsx(css.descriptionItem, css.name)}>{username}</p>
        <p className={css.descriptionItem}>@p{tag}</p>
        <p className={css.descriptionItem}>{location}</p>
      </div>

      <ul className={css.stats}>
        <li className={css.statsContainer}>
          <span className={css.statsLabel}>Followers</span>
          <span className={css.statsQuantity}>{followers}</span>
        </li>
        <li className={css.statsContainer}>
          <span className={css.statsLabel}>Views</span>
          <span className={css.statsQuantity}>{views}</span>
        </li>
        <li className={css.statsContainer}>
          <span className={css.statsLabel}>Likes</span>
          <span className={css.statsQuantity}>{likes}</span>
        </li>
      </ul>
    </div>
  );
}

UserCard.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.object,
  followers: PropTypes.number,
  views: PropTypes.number,
  likes: PropTypes.number,
};

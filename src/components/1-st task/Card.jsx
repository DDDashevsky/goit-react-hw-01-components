import PropTypes from 'prop-types';
import css from './Card.module.css';

import {
  Avatar,
  Card,
  Description,
  DescriptionItem,
  Stats,
  StatsIem,
  StatsItem,
  StatsLabel,
  StatsQuantity,
} from './Card.styled';

export default function UserCard({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) {
  return (
    <Card>
      <Description>
        <Avatar src={avatar} alt="User avatar" />
        <DescriptionItem name>{username}</DescriptionItem>
        <DescriptionItem>@p{tag}</DescriptionItem>
        <DescriptionItem>{location}</DescriptionItem>
      </Description>

      <Stats>
        <StatsItem>
          <StatsLabel>Followers</StatsLabel>
          <StatsQuantity>{followers}</StatsQuantity>
        </StatsItem>
        <StatsItem>
          <StatsLabel>Views</StatsLabel>
          <StatsQuantity>{views}</StatsQuantity>
        </StatsItem>
        <StatsItem>
          <StatsLabel>Likes</StatsLabel>
          <StatsQuantity>{likes}</StatsQuantity>
        </StatsItem>
      </Stats>
    </Card>
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

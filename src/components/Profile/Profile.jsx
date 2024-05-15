import css from "./Profile.module.css";

const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <div className={css.profile}>
      <div className={css.wrapCard}>
        <img className={css.img} src={avatar} alt={username} />
        <p className={css.name}>{username}</p>
        <p className={css.tag}>@{tag}</p>
        <p className={css.location}>{location}</p>
      </div>

      <ul className={css.list}>
        <li className={css.item}>
          <span className={css.statName}>Followers</span>
          <span className={css.stat}>{stats.followers}</span>
        </li>
        <li className={css.item}>
          <span className={css.statName}>Views</span>
          <span className={css.stat}>{stats.views}</span>
        </li>
        <li className={css.item}>
          <span className={css.statName}>Likes</span>
          <span className={css.stat}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;

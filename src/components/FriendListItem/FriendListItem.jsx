// import clsx from "clsx";
import css from "./FriendListItem.module.css";

const FriendListItem = ({ avatar, name, isOnline }) => {
  // const classNames = { clsx("status", isOnline? "online" : "offline") };

  return (
    <div className={css.wrapper}>
      <img className={css.img} src={avatar} alt="Avatar" width="48" />
      <p className={css.name}>{name}</p>
      <p
        className={
          isOnline
            ? css.status + " " + css.online
            : css.status + " " + css.offline
        }
      >
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
};

export default FriendListItem;

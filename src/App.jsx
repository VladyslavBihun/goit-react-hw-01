import Profile from "./components/Profile/Profile";
import data from "./userData.json";
import FriendList from "./components/FriendList/FriendList";
import friends from "./friends.json";

function App() {
  return (
    <>
      <Profile
        name={data.username}
        tag={data.tag}
        location={data.location}
        avatar={data.avatar}
        stats={data.stats}
      />
      <FriendList friends={friends} />
    </>
  );
}

export default App;

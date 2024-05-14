import Profile from "./components/Profile/Profile"
import data from './userData.json'


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
    </>
  )
}

export default App

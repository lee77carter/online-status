import "./styles.css";
import { useState, useEffect } from "react";
import Friend from "./Friend";

const App = () => {
  const [friendData, setFriendData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const request = await fetch(
          "https://gist.githubusercontent.com/skillcrush-curriculum/8231fb5350d726663f2bb16af7cf6945/raw/0dde3b3942214ed39a08479b334c752bea05b3a6/friend-status.json"
        );
        const friendStatus = await request.json();
        setFriendData(friendStatus);
      } catch (e) {
        console.log("Something went wrong", e);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      {friendData.map((friend) => {
        return <Friend key={friend.id} friend={friend} />;
      })}
    </div>
  );
};

export default App;

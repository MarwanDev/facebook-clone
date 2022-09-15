import React, { useEffect, useState } from "react";
import "./Feed.css";
import StoryReel from "./StoryReel";
import MessageSender from "./MessageSender";
import Post from "./Post";
import db from "./firebase";

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc") 
      .onSnapshot((snapshot) =>
        setPosts(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
      );
  }, {});
  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />
      {posts.map((post) => (
        <Post
          key={post.id}
          profilePic={post.data.profilePic}
          message={post.data.message}
          timestamp={post.data.timestamp}
          username={post.data.username}
          image={post.data.image}
        />
      ))}
      {/* <Post
        profilePic="https://media.istockphoto.com/videos/colored-smoke-on-a-dark-background-blue-and-red-light-with-smoke-video-id1341408852?b=1&k=20&m=1341408852&s=640x640&h=C6ymXpr_Jn6-WqQmHHuS8z6TGBtkWDQ9x6tFs_hsBjs="
        message="It works yeah!!!"
        timestamp="This is a timestamp"
        username="Marwan"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb5gcScctXDD7o8lFclIPw2qP2IlKhxOaFJw&usqp=CAU"
      /> */}
      {/* <Post
        profilePic="https://www.adultswim.com/misc/primal-backgrounds/media/BG1/BG1_Desktop_1280x720.jpg"
        message="It works yeah!!!"
        timestamp="This is a timestamp"
        username="Marwan"
        image="https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569__480.jpg"
      /> */}
    </div>
  );
}

export default Feed;

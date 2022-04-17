import { Avatar, Button } from "@mui/material";
import React, { useState } from "react";
import "./TweetBox.css";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import db from "../../firebase";

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = (e) => {
    // firebaseのデータベースにデータを追加する。
    e.preventDefault();

    addDoc(collection(db, "posts"), {
      displayName: "プログラミングチュートリアル",
      username: "sample_react",
      verified: true,
      text: tweetMessage,
      //http://shincode.info/wp-content/uploads/2021/12/icon.png
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkYiQH1MxKWKHkUk9HTu2XSN6OEkiR1nInKA&usqp=CAU",
      image: tweetImage,
      //https://source.unsplash.com/random
      timestamp: serverTimestamp(),
    });

    setTweetMessage("");
    setTweetImage("");
  };

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox_input">
          <Avatar />
          <input
            value={tweetMessage}
            placeholder="いまどうしてる？"
            type="text"
            onChange={(e) => setTweetMessage(e.target.value)}
          ></input>
        </div>
        <input
          value={tweetImage}
          className="tweetBox_ImageInput"
          placeholder="画像のURLを入力してください"
          type="text"
          onChange={(e) => setTweetImage(e.target.value)}
        ></input>
        <Button
          className="tweetBox_tweetButton"
          type="submit"
          onClick={sendTweet}
        >
          ツイートする
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;

import Search from "@mui/icons-material/Search";
import React from "react";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";
import "./Widgets.css"

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets_input">
        <Search className="widgets_searchIcon" />
        <input placeholder="キーワード検索" type="text" />
      </div>

      <div className="widgets_widgetContainer">
        <h2>いまどうしてる？</h2>

        {/* ライブラリの追加・追記 */}
        <TwitterTweetEmbed tweetId="1513299628803903492" />

        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="NBA"
          options={{ height: 400 }}
        />

        <TwitterShareButton
          url={"https://twitter.com/SS_jacsert"}
          options={{ text: "#React.js勉強中", via: "SS_jacsert" }}
        />
      </div>
    </div>
  );
}

export default Widgets;

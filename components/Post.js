import React, { useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import avatar from "../assets/avatar.png";
import styles from "../styles";
import {
  faCommentAlt,
  faEllipsisV,
  faGift,
  faShareAlt,
  faThumbsDown,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";

const Post = () => {
  let cmt = 96;
  const [vt, setVt] = useState(240);
  const [upVote, setUpvote] = useState(false);
  const [downVote, setDownvote] = useState(false);

  const handleUpvote = () => {
    setUpvote(!upVote);
    setVt((vt) => vt + 1);
  };
  const handleDownvote = () => {
    setDownvote(!downVote);
    setVt((prevState) => prevState - 1);
  };
  return (
    <>
      <View style={styles.postContainer}>
        <View style={styles.profileContainer}>
          <View style={{ flexDirection: "row", paddingLeft: 10 }}>
            <Image style={styles.profileLogo} source={avatar} />
            <View style={styles.userContainer}>
              <Text style={styles.redditText}>r/SubReddit</Text>
              <Text style={styles.subText}>u/ujjwal313 . 5h . i.imgur</Text>
            </View>
          </View>
          <FontAwesomeIcon icon={faEllipsisV} color="#888c8f" />
        </View>
        <TouchableOpacity activeOpacity={0.8}>
          <Image
            source={{
              uri: "https://source.unsplash.com/random/300×300/",
            }}
            style={styles.postImage}
          />
        </TouchableOpacity>
        <View style={styles.interactionContainer}>
          <View style={styles.voteContainer}>
            <TouchableOpacity activeOpacity={1} onPress={handleUpvote}>
              <FontAwesomeIcon
                icon={faThumbsUp}
                color={upVote ? "#fe4500" : "#888c8f"}
                size={17}
              />
            </TouchableOpacity>
            <Text style={styles.voteNumber}>{vt}</Text>
            <TouchableOpacity activeOpacity={1} onPress={handleDownvote}>
              <FontAwesomeIcon
                icon={faThumbsDown}
                color={downVote ? "#93b3fe" : "#888c8f"}
                size={17}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.commentContainer}>
            <FontAwesomeIcon icon={faCommentAlt} color="#888c8f" size={17} />
            <Text style={styles.commentNumber}>{cmt}</Text>
          </View>
          <View style={styles.shareContainer}>
            <FontAwesomeIcon icon={faShareAlt} color="#888c8f" size={17} />
            <Text style={styles.shareText}>Share</Text>
          </View>
          <FontAwesomeIcon icon={faGift} color="#888c8f" size={17} />
        </View>
        <View style={styles.bottomBar}></View>
      </View>
    </>
  );
};

export default Post;

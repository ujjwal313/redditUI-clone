import React, { useState, useEffect } from "react";
import {
  StatusBar,
  View,
  Image,
  TextInput,
  Text,
  ScrollView,
} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import avatar from "./assets/avatar.png";
import coin from "./assets/coin.png";
import styles from "./styles";
import {
  faBox,
  faChevronDown,
  faFire,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import Post from "./components/Post";
import Navbar from "./components/Navbar";

export default function App() {
  const [active, setActive] = useState(true);
  return (
    <>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <View style={styles.navContainer}>
          <Image style={styles.tinyLogo} source={avatar} />
          <View style={styles.searchContainer}>
            <View style={styles.iconWrapper}>
              <FontAwesomeIcon icon={faSearch} color="#888c8f" />
            </View>
            <TextInput
              style={styles.input}
              placeholder="Search"
              placeholderTextColor="#888c8f"
            />
          </View>
          <Image style={styles.tinyLogo} source={coin} />
        </View>
        <ScrollView>
          <View style={styles.linkContainer}>
            <Text style={active ? styles.active : styles.linkText}>Home</Text>
            <Text style={styles.linkText}>Popular</Text>
          </View>
          <View style={styles.menuContainer}>
            <View style={styles.container1}>
              <FontAwesomeIcon icon={faFire} color="#888c8f" />
              <Text style={styles.menuText}>HOT POSTS</Text>
              <FontAwesomeIcon icon={faChevronDown} color="#888c8f" />
            </View>
            <FontAwesomeIcon icon={faBox} color="#888c8f" />
          </View>
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
        </ScrollView>
        <Navbar />
      </View>
    </>
  );
}

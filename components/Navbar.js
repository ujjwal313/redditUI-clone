import {
  faBell,
  faCommentDots,
  faHome,
  faPlus,
  faThLarge,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import React from "react";
import { TouchableOpacity, View } from "react-native";
import styles from "../styles";

const Navbar = () => {
  return (
    <>
      <View style={styles.navbarContainer}>
        <TouchableOpacity>
          <FontAwesomeIcon icon={faHome} color="#fff" size={25} />
        </TouchableOpacity>
        <TouchableOpacity>
          <FontAwesomeIcon icon={faThLarge} color="#fff" size={25} />
        </TouchableOpacity>
        <TouchableOpacity>
          <FontAwesomeIcon icon={faPlus} color="#fff" size={25} />
        </TouchableOpacity>
        <TouchableOpacity>
          <FontAwesomeIcon icon={faCommentDots} color="#fff" size={25} />
        </TouchableOpacity>
        <TouchableOpacity>
          <FontAwesomeIcon icon={faBell} color="#fff" size={25} />
        </TouchableOpacity>
      </View>
    </>
  );
};

export default Navbar;

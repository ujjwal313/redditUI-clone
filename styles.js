import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
  },
  navContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10,
    paddingHorizontal: 5,
    paddingBottom: 5,
  },
  tinyLogo: {
    height: 30,
    width: 30,
    borderRadius: 50,
  },
  searchContainer: {
    backgroundColor: "#1e1e1e",
    color: "#fff",
    width: "80%",
    borderRadius: 5,
    height: 40,
    flexDirection: "row",
    alignItems: "center",
  },
  iconWrapper: {
    paddingLeft: 10,
  },
  input: {
    color: "#fff",
    width: "100%",
    borderRadius: 5,
    height: 40,
    paddingLeft: 10,
  },
  linkContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 30,
  },
  linkText: {
    color: "#fff",
    paddingHorizontal: 10,
  },
  active: {
    color: "#fff",
    paddingHorizontal: 10,
    borderBottomColor: "#0d6ab5",
    paddingBottom: 10,
    borderBottomWidth: 3,
  },
  menuContainer: {
    flexDirection: "row",
    backgroundColor: "#0a0a0a",
    height: 40,
    alignItems: "center",
    justifyContent: "space-between",
    paddingRight: 10,
  },
  container1: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: 150,
  },
  menuText: {
    color: "#fff",
  },
  postContainer: {
    height: "auto",
  },
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  redditText: {
    color: "#fff",
  },
  subText: {
    color: "#888c8f",
    fontSize: 12,
  },
  profileLogo: {
    width: 30,
    height: 30,
    borderRadius: 50,
  },
  userContainer: {
    width: 170,
    paddingLeft: 10,
  },
  postImage: {
    height: 450,
    width: "100%",
    marginTop: 10,
  },
  interactionContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 50,
    paddingRight: 10,
  },
  voteContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: 80,
    paddingLeft: 10,
  },
  voteNumber: {
    color: "#fff",
  },
  commentContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: 40,
  },
  commentNumber: {
    color: "#fff",
  },
  shareContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: 60,
  },
  shareText: {
    color: "#fff",
  },
  bottomBar: {
    height: 10,
    backgroundColor: "#0a0a0a",
  },
  interactionIcon: {
    height: 10,
    width: 10,
  },
  navbarContainer: {
    height: 45,
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "row",
  },
});

export default styles;

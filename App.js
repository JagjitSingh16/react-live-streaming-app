import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { io } from "socket.io-client";

export default function App() {
  const [roomId, setRoomId] = useState();
  const [userName, setUserName] = useState();

  useEffect(() => {
    const API_URL = "https://6ee7-175-176-185-138.in.ngrok.io/";
    socket = io(`${API_URL}`);
    socket.on("connection", () => console.log("connected"));
  }, []);

  // const socketUrl = "https://6ee7-175-176-185-138.in.ngrok.io/";
  // let socket = useRef(null);

  // useEffect(() => {
  //   socket.current = io(socketUrl, {
  //     autoConnect: false,
  //   });
  // }, [socketUrl]);

  const joinRoom = () => {
    // const API_URL = "https://6ee7-175-176-185-138.in.ngrok.io/";
    // socket = io(`${API_URL}`);
    // socket.on("connection", () => {
    //   console.log("connected");
    //   socket.emit("join-room", { roomId: roomId, userName: userName });
    // });

    socket.emit("join-room", { roomId: roomId, userName: userName });
  };

  return (
    <View style={styles.container}>
      <View style={styles.startMeetingsContainer}>
        <View style={styles.info}>
          <TextInput
            style={styles.textInput}
            value={userName}
            onChangeText={(text) => setUserName(text)}
            placeholder="Enter your username"
            placeholderTextColor="#767476"
          />
        </View>
        <View style={styles.info}>
          <TextInput
            style={styles.textInput}
            value={roomId}
            onChangeText={(text) => setRoomId(text)}
            placeholder="Enter room Id"
            placeholderTextColor="#767476"
          />
        </View>
        <View style={{ alignItems: "center" }}>
          <TouchableOpacity
            style={styles.startMeetingsBtn}
            onPress={() => joinRoom()}
          >
            <Text style={{ color: "white", fontWeight: "bold" }}>
              Start Meeting
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1c1c1c",
    justifyContent: "center",
    padding: 10,
  },
  info: {
    width: "100%",
    backgroundColor: "#373538",
    height: 60,
    borderBottomColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 10,
  },
  textInput: {
    color: "white",
    height: "100%",
    paddingLeft: 10,
  },
  startMeetingsBtn: {
    width: "100%",
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0470DC",
    height: 50,
    borderRadius: 15,
  },
});

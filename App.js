import React from "react";
import { TouchableOpacity, StyleSheet, Text, View } from "react-native";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      greeting: "Welcome!"
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text} testID="title_label">
          {this.state.greeting}
        </Text>
        <TouchableOpacity
          testID="hello_button"
          onPress={this.onButtonPress.bind(this)}
        >
          <Text style={styles.button_text}>Say Hello</Text>
        </TouchableOpacity>
      </View>
    );
  }

  onButtonPress(greeting) {
    this.setState({
      greeting: "Hello world!"
    });
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    fontSize: 25,
    marginBottom: 30
  },
  button_text: {
    color: "blue",
    marginBottom: 20
  }
});

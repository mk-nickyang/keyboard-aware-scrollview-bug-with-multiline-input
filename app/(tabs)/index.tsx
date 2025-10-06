import * as React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import {
  KeyboardAwareScrollView
} from "react-native-keyboard-controller";

export default function HomeScreen() {
  const [text, setText] = React.useState("");

  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView>
        <View style={styles.contentContainer}>
          <TextInput
            autoFocus
            multiline
            value={text}
            onChangeText={(value) => setText(value)}
            scrollEnabled={false}
            style={styles.input}
          />
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1},
  contentContainer: { padding: 16, borderWidth: 1, borderColor: 'lightgray' },
  input: { fontSize: 45 }
});

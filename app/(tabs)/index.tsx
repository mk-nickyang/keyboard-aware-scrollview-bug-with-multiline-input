import * as React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import {
  KeyboardAwareScrollView
} from "react-native-keyboard-controller";

export default function HomeScreen() {

  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView bottomOffset={20}>
        <TextInput
          autoFocus
          multiline
          scrollEnabled={false}
          style={styles.input}
        />
      </KeyboardAwareScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1},
  input: { fontSize: 20, color: 'white' }
});

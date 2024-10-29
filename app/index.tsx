import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import React from "react";
import { StyleSheet } from "react-native";
import { Link } from "expo-router";
export default function WellcomeScreen() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">Welcome</ThemedText>
      <ThemedText style={styles.description}>
        This is a simple welcome screen.
      </ThemedText>
      <ThemedText style={styles.login_btn}>
        <Link href="/login">Login now</Link>
      </ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  description: {
    fontSize: 18,
    lineHeight: 24,
    textAlign: "center",
  },
  code: {
    fontSize: 18,
    lineHeight: 24,
    textAlign: "center",
    fontWeight: "bold",
  },
  login_btn: {
    fontSize: 18,
    lineHeight: 24,
    textAlign: "center",
    fontWeight: "bold",
    color: "blue",
    marginTop: 20,
  },
});

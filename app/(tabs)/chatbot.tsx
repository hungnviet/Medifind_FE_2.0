import React from "react";
import { StyleSheet } from "react-native";
import { Link } from "expo-router";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

export default function ChatbotScreen() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">Chatbot</ThemedText>
      <ThemedText style={styles.description}>
        This is a simple chatbot screen.
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
});

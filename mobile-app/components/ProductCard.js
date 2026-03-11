import React from "react";
import { View, Text, Image, StyleSheet, Pressable } from "react-native";

export default function ProductCard({ title, description, price, image }) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: image }} style={styles.image} />

      <Text style={styles.title}>{title}</Text>

      <Text style={styles.description}>{description}</Text>

      <Text style={styles.price}>€{price}</Text>

      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>Bekijk product</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 12,
    width: "45%",
    marginBottom: 20,
  },

  image: {
    width: "100%",
    height: 120,
    borderRadius: 10,
    marginBottom: 10,
  },

  title: {
    fontSize: 16,
    fontWeight: "bold",
  },

  description: {
    color: "gray",
    marginBottom: 5,
  },

  price: {
    color: "#007aff",
    fontWeight: "bold",
    marginBottom: 10,
  },

  button: {
    backgroundColor: "#007aff",
    padding: 8,
    borderRadius: 8,
    alignItems: "center",
  },

  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

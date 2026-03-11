import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  Button,
  Switch,
} from "react-native";

import ProductCard from "./components/ProductCard";

export default function App() {
  const [search, setSearch] = useState("");
  const [isEnabled, setIsEnabled] = useState(false);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Snow & Ski Shop</Text>

      <TextInput
        style={styles.input}
        placeholder="Zoek snowboard of ski..."
        value={search}
        onChangeText={setSearch}
      />

      <View style={styles.switchContainer}>
        <Text>Alleen aanbiedingen</Text>
        <Switch
          value={isEnabled}
          onValueChange={() => setIsEnabled(!isEnabled)}
        />
      </View>

      <Button title="Filter producten" onPress={() => alert("Filter actief")} />

      <View style={styles.products}>
        <ProductCard
          title="Burton Snowboard"
          description="Perfect voor freestyle riders"
          price="499"
          image="https://images.unsplash.com/photo-1517649763962-0c623066013b"
        />

        <ProductCard
          title="Atomic Skis"
          description="Ideaal voor piste en snelheid"
          price="699"
          image="https://images.unsplash.com/photo-1516569422860-11f0b0c1b63d"
        />

        <ProductCard
          title="Nitro Snowboard"
          description="All-mountain performance"
          price="549"
          image="https://images.unsplash.com/photo-1603575448360-153f093fd0f5"
        />

        <ProductCard
          title="Salomon Skis"
          description="Perfect voor beginners"
          price="399"
          image="https://images.unsplash.com/photo-1519681393784-d120267933ba"
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0f172a",
    padding: 20,
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "white",
    marginBottom: 20,
    textAlign: "center",
  },

  input: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 10,
    marginBottom: 15,
  },

  switchContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },

  products: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginTop: 20,
  },
});

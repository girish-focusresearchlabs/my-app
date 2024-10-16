import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { Card, Text, Button, Icon, Colors } from "react-native-ui-lib";
import AntDesign from "react-native-vector-icons/AntDesign";
export default function ProductCard() {
  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        {/* Image Section */}
        <Card.Section
          imageSource={{
            uri: "https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/vans.png",
          }}
          imageStyle={styles.cardImage}
        />

        {/* Like Icon */}
        <View style={styles.iconOverlay}>
          <Button
            backgroundColor="transparent"
            iconSource={() => (
              <AntDesign name="heart" size={24} color={Colors.red30} />
            )}
            onPress={() => alert("Liked!")}
          />
        </View>

        {/* Text Content */}
        <View style={styles.cardBody}>
          <Text text60 style={styles.cardTitle}>
            Sparx Running Shoe
          </Text>
          <View style={styles.flexContainer}>
            <Text text80 style={styles.cardSubtitle}>
              Style: Dark Greenish
            </Text>
            <View style={styles.ratingContainer}>
              <Text style={styles.ratingText}>4.5</Text>
              <AntDesign name="star" style={styles.starIcon} size={18} />
            </View>
          </View>

          <Text text70 style={styles.cardText}>
            gives possibility to combine the flexibility of tradition and
            advanced products which last for years.
          </Text>

          {/* Price and Add to Cart */}
          <View style={styles.buySection}>
            <Text style={styles.price}>$100</Text>
            <Button
              label="Add to Cart"
              backgroundColor={Colors.red30}
              iconSource={() => (
                <AntDesign name="shoppingcart" size={18} color={Colors.white} />
              )}
              onPress={() => alert("Added to Cart")}
              style={styles.cartButton}
            />
          </View>
        </View>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 200,
    // padding: 20,
    alignItems: "center",
  },
  card: {
    width: "90%",
    marginVertical: 20,
    padding: 10,
  },
  cardImage: {
    height: 200,
    width: "100%",
  },
  iconOverlay: {
    position: "absolute",
    top: 10,
    right: 10,
    zIndex: 1,
  },
  cardBody: {
    padding: 20,
  },
  cardTitle: {
    fontWeight: "bold",
  },
  cardSubtitle: {
    color: Colors.grey40,
    marginBottom: 10,
  },
  cardText: {
    marginVertical: 10,
    color: Colors.grey20,
  },
  buySection: {
    paddingTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  price: {
    color: Colors.green30,
    fontWeight: "bold",
    fontSize: 30,
  },
  cartButton: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 5,
  },
  ratingContainer: {
    backgroundColor: Colors.green20,
    padding: 6,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
  },
  ratingText: {
    color: "#fff",
  },
  starIcon: {
    marginLeft: 5,
    color: "#ffffff",
  },
  flexContainer: {
    paddingTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

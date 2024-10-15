import { Image, StyleSheet, Platform } from "react-native";
import {
  Colors,
  View,
  Card,
  Button,
  Text,
  Icon,
} from "react-native-ui-lib";
import AntDesign from "react-native-vector-icons/AntDesign";
import ParallaxScrollView from "@/components/ParallaxScrollView";
const cardImage = require("../../assets/images/card-example.jpg");

export default function HomeScreen() {
  const renderText2 = () => {
    return (
      <View paddingV-20 flex paddingH-10>
        <View row spread>
          <Text text60 $textDefault>
            NIC Ice cream
          </Text>
          <View row style={styles.ratingContainer}>
            <Text $white>4.5</Text>
            <AntDesign name="star" style={styles.starIcon} size={18} color="#ffffff" />
          </View>
        </View>

        <View row paddingT-8>
          <Text text85 style={{ fontWeight: "300" }}>
            Pure Veg
          </Text>
          <Text text85 style={{ fontWeight: "300", paddingLeft: 10 }}>
            Ice cream
          </Text>
          <Text text85 style={{ fontWeight: "300", paddingLeft: 10 }}>
            $200 for 1
          </Text>
        </View>
      </View>
    );
  };

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
      headerImage={
        <Image
          source={require("@/assets/images/partial-react-logo.png")}
          style={styles.reactLogo}
        />
      }
    >
      <View row marginV-10 paddingH-40 height={230}>
        <Card
          flex
          style={{
            marginTop: 20,
            position: "relative", 
          }}
          activeOpacity={1}
          marginR-20
        >
          {/* Cart Button */}
          <Button
            label="Cart"
            backgroundColor={Colors.green30} 
            iconSource={() => <Icon assetName="plus" tintColor="white" />} 
            style={styles.cartButton}
            iconOnRight={false}
            onPress={() => alert("Added to Cart")}
          />

          <Card.Section
            flex-3
            imageSource={cardImage}
            imageStyle={{ height: "100%" }}
          />
          {renderText2()}
        </Card>
      </View>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
  cartButton: {
    position: "absolute",
    top: 10,
    right: 10,
    zIndex: 1, // Ensure the button is above other components
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  ratingContainer: {
    
    backgroundColor: Colors.green10,
    padding:6,
    borderRadius: 8,
  },
  starIcon: {
    marginLeft: 5,
  },
});

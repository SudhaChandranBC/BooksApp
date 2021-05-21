import React from "react";
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  ScrollView,
  ImageBackground,
  Image,
  Pressable,
} from "react-native";
import bookDetails from "../Data/details.json";
import { useTheme } from "@react-navigation/native";

const Details = ({ navigation }) => {
  const { margin, dark, colors, width, status } = useTheme();
  const HEADER = 500;
  const BOOKW = 150;
  const BOOKH = BOOKW * 1.5;

  renderBookHeader = () => {
    return (
      <View style={styles.headerContainer}>
        <Image
          blurRadius={15}
          style={styles.bg}
          source={{ uri: bookDetails.imageUrl }}
        />
        <View style={styles.cover}>
          <View style={styles.imgBox}>
            <Image
              style={styles.bookImg}
              source={{ uri: bookDetails.imageUrl }}
            />
          </View>
        </View>
        <View style={styles.title}>
          <Text bold center size={21}>
            {bookDetails.book_title_bare}
          </Text>
          <Text
            size={12}
            style={styles.author}
          >{`by ${bookDetails.author_name}`}</Text>
        </View>
      </View>
    );
  };

  renderContactHeader = () => {
    // console.log(JSON.stringify(bookDetails))
    return (
      <View style={styles.headerContainer}>
        {/* <Image
          blurRadius={15}
          style={styles.bg}
          source={{ uri: bookDetails.author_image_url }}
        /> */}

        {/* <View style={styles.coverContainer}>
          <ImageBackground
            source={{
              uri: "https://1.bp.blogspot.com/-yrb6gKpau1U/WHDLabcjmbI/AAAAAAAADs8/Neet-zX2Ib43EPaz9EcfmP9hIrQo1lLugCEw/s1600/itm_mix-cute-profile-pictures2013-01-30_23-43-20_1.jpg",
            }}
            style={styles.coverImage}
          >
            <View style={styles.coverTitleContainer}>
              <Text style={styles.coverTitle} />
            </View>
            <View style={styles.coverMetaContainer}>
              <Text style={styles.coverName}>{bookDetails.user_name}</Text>
            </View>
          </ImageBackground>
        </View> */}
        {/* <View style={styles.profileImageContainer}>
          <Image
            source={{
              uri: "http://10.13.172.164:3231/" + bookDetails.profile_pic,
            }}
            style={styles.profileImage}
          />
        </View> */}
      </View>
    );
  };
  // Open book lists sheet
  const openSheet = () => {
    alert("openSheet Clicked!");
  };

  renderBookDetailBox = () => {
    return (
      // <View>
      //   <Text style={styles.detailText}>Mail: {bookDetails.user_email}</Text>
      //   <Text style={styles.subDetailText}>Phone: {bookDetails.user_phone}</Text>
      //   <Text style={styles.subDetailText}>Pet: {bookDetails.user_id}</Text>
      // </View>
      <View style={styles.detailsBox}>
        <View style={styles.detailsRow}>
          <Text center size={13}>
            RATING
          </Text>
          <Text bold style={styles.subDetails}>
            {bookDetails.avgRating}
          </Text>
        </View>
        <View style={[styles.detailsRow, styles.detailsRowBorder]}>
          <Text center size={13}>
            PAGES
          </Text>
          <Text bold style={styles.subDetails}>
            {bookDetails.numPages}
          </Text>
        </View>
        <Pressable onPress={openSheet} style={styles.detailsRow}>
          <Text center size={13}>
            STATUS
          </Text>
          <Text bold color={colors.card} style={styles.subDetails}>
            {"Completed"}
          </Text>
        </Pressable>
      </View>
    );
  };

  renderAboutAuthor = () => {
    return (
      <View style={styles.authorBox}>
        <Image
          source={{ uri: bookDetails.author_image_url }}
          style={styles.authorImage}
        />
        <View>
          <Text bold size={17} style={{ marginLeft: 20 }}>
            {bookDetails.author_name}
          </Text>
          <Text numberOfLines={2} style={styles.authorDetails}>
            {bookDetails.about_author.replace(/(<([^>]+)>)/gi, "")}
          </Text>
        </View>
      </View>
    );
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      backgroundColor: "white",
      paddingTop: 20,
    },
    productRow: {
      margin: 25,
    },
    scroll: {
      backgroundColor: "#00111111",
    },
    coverBio: {
      color: "black",
      fontSize: 15,
      fontWeight: "600",
    },
    coverContainer: {
      marginBottom: 1,
      position: "relative",
    },
    coverImage: {
      height: Dimensions.get("window").width * (3 / 4),
      width: Dimensions.get("window").width,
    },
    coverMetaContainer: {
      backgroundColor: "transparent",
      paddingBottom: 10,
      paddingLeft: 135,
    },
    coverName: {
      color: "green",
      fontSize: 28,
      fontWeight: "bold",
      paddingBottom: 2,
    },
    coverTitle: {
      color: "#FFF",
      fontSize: 24,
      fontWeight: "bold",
      textAlign: "center",
    },
    coverTitleContainer: {
      backgroundColor: "transparent",
      flex: 1,
      justifyContent: "space-between",
      paddingTop: 45,
    },
    headerContainer: {
      alignItems: "center",
      height: 500,
      zIndex: 10,
      paddingTop: status,
      justifyContent: "center",
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      shadowOffset: { height: 2 },
      backgroundColor: colors.card,
      shadowOpacity: 0.2,
    },
    detailsBox: {
      borderRadius: 10,
      flexDirection: "row",
      marginHorizontal: margin,
      backgroundColor: "#00111111",
    },
    detailsRow: {
      flex: 1,
      paddingVertical: 5,
      alignItems: "center",
    },
    detailsRowBorder: {
      borderLeftWidth: 3,
      borderRightWidth: 3,
      borderColor: dark ? "#ffffff22" : "#00111111",
    },
    subDetails: {
      fontSize: 15,
      textAlign: "center",
      marginTop: 15,
    },
    authorBox: {
      marginTop: margin,
      flexDirection: "row",
      alignItems: "center",
      marginHorizontal: margin,
    },
    authorImage: {
      width: 65,
      height: 65,
      borderRadius: 65,
      marginRight: margin,
    },
    authorDetails: {
      marginTop: 5,
      marginLeft: 20,
      opacity: 0.75,
      width: 300,
    },
    header: {
      width,
      zIndex: 10,
      height: HEADER,
      paddingTop: status,
      position: "absolute",
      justifyContent: "center",
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      shadowOffset: { height: 2 },
      backgroundColor: colors.card,
      shadowOpacity: 0.24,
    },
    bg: {
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      opacity: 1,
      position: "absolute",
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
    },
    imgBox: {
      borderRadius: 10,
      shadowRadius: 3,
      shadowOpacity: 0.3,
      shadowOffset: { width: 3, height: 3 },
    },
    bookImg: {
      width: BOOKW,
      height: BOOKH,
      borderRadius: 10,
    },
    author: {
      marginTop: 5,
    },
    cover: {
      alignItems: "center",
      opacity: 0.8,
      transform: [{ translateY: 90 }],
    },
    title: {
      paddingTop: 80,
      alignItems: "center",
      paddingHorizontal: 30,
      transform: [{ translateY: 15 }],
      opacity: 0.9,
    },
    title2: {
      left: 0,
      right: 0,
      bottom: 0,
      height: 44,
      position: "absolute",
      alignItems: "center",
      justifyContent: "center",
      paddingHorizontal: 10,
      // opacity: 0.9,
    },
    aboutBook: {
      marginLeft: 20,
      marginRight: 20,

      lineHeight: 25,
      textAlign: "justify",
    },
  });

  return (
    <ScrollView style={styles.scroll}>
      <View style={[styles.container, { paddingTop: 0 }]}>
        {/* <Text>Sudha Details</Text> */}
        {/* <Text>Mail: {bookDetails.user_email}</Text> */}
        <View style={styles.cardContainer}>
          {renderBookHeader()}
          {/* {renderContactHeader()} */}
          {/* <View style={styles.productRow}>{this.renderDescription()}</View> */}
          {/* <View style={styles.productRow}>{renderDetailBox()}</View> */}
          <View style={styles.productRow}>{renderBookDetailBox()}</View>
          <View style={styles.productRow}>{renderAboutAuthor()}</View>
          <Text size={16} numberOfLines={15} style={styles.aboutBook}>
            {bookDetails.description.replace(/(<([^>]+)>)/gi, " ")}
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default Details;

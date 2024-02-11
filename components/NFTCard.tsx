import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, Text, View } from "react-native";

import { StackNavigationProp } from "@react-navigation/stack";
import { COLORS, NFTData, SHADOWS, SIZES, assets } from "../constants";
import { RootStackParamList } from "../navigation/types";
import { CircleButton, RectButton } from "./Button";
import { EthPrice, NFTTitle, SubInfo } from "./SubInfo";

export type NFTDataType = (typeof NFTData)[0];

export type BidType = NFTDataType['bids'][0];

interface NFTCardType {
  data: NFTDataType;
}

const NFTCard: React.FC<NFTCardType> = ({ data }) => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  return (
    <View
      style={{
        backgroundColor: COLORS.white,
        borderRadius: SIZES.font,
        marginBottom: SIZES.extraLarge,
        margin: SIZES.base,
        ...SHADOWS.dark,
      }}
    >
      <View style={{ width: "100%", height: 250 }}>
        <Image
          source={data.image}
          resizeMode="cover"
          style={{
            width: "100%",
            height: "100%",
            borderTopLeftRadius: SIZES.font,
            borderTopRightRadius: SIZES.font,
          }}
        />
        <CircleButton
          imgUrl={assets.heart}
          handlePress={() => console.log("hello")}
          right={10}
          top={10}
        />
        </View> 
        <SubInfo />
        <View style={{ width: "100%", padding: SIZES.font }}>
          <NFTTitle
            title={data.name}
            subTitle={data.creator}
            titleSize={SIZES.large}
            subTitleSize={SIZES.small}
          />
          <View
            style={{
              marginTop: SIZES.font,
              flexDirection: "row",
              justifyContent: "space-between",
            alignItems: "center",
              width: "100%",
            }}
          >
          <EthPrice price={data.price} />
  
            <RectButton
              minWidth={120}
              fontSize={SIZES.font}
              handlePress={() => navigation.navigate("Details", { data: data })}
            />
          </View>
        </View>
      </View>
  );
};

export default NFTCard;

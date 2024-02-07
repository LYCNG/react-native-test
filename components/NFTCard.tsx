import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, View } from "react-native";

import { StackNavigationProp } from "@react-navigation/stack";
import { COLORS, NFTData, SHADOWS, SIZES, assets } from "../constants";
import { RootStackParams } from "../navigation/types";
import { CircleButton, RectButton } from "./Button";
import { EthPrice, NFTTitle, SubInfo } from "./SubInfo";

export type NFTDataType = (typeof NFTData)[0];

interface NFTCardType {
  data: NFTDataType;
}

const NFTCard: React.FC<NFTCardType> = ({ data }) => {
  const navigation = useNavigation<StackNavigationProp<RootStackParams>>();
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
    </View>
  );
};

export default NFTCard;

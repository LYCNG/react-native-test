import { FlatList, Image, SafeAreaView, StatusBar, Text, View } from "react-native";

import { COLORS, FONTS, NFTData, SHADOWS, SIZES, assets } from "../constants";
import { CircleButton, RectButton, SubInfo, FocusedStatusBar, DetailsBid, DetailsDes, } from "../components";
import { NavigationProps, RootScreenProps } from "../navigation/types";
import React from "react";
import { NFTDataType } from '../components/DetailsDes';
import { BidType } from "../components/NFTCard";



const DetailsHeader = ({data,navigation }:{ data:any,navigation:NavigationProps}) => (
  <View style={{width:'100%',height:373}}>
    <Image source={data.image} resizeMode='cover' style={{ width: '100%', height: '100%' }}  />
    <CircleButton
      imgUrl={assets.left}
      handlePress={() => navigation.goBack()}
      left={15}
      top={StatusBar.currentHeight?StatusBar.currentHeight+10:10}
    />
    <CircleButton
      imgUrl={assets.heart}
      handlePress={() => navigation.goBack()}
      right={15}
      top={StatusBar.currentHeight?StatusBar.currentHeight+10:10}
    />
  </View>
);

const Details = ({ route, navigation }:RootScreenProps<'Details'>) => {
  
  const { data }: {data:NFTDataType}  = route.params;
  
  return (
    <SafeAreaView style={{flex:1}}>
      <FocusedStatusBar barStyle='dark-content' backgroundColor='transparent' translucent={true} />
      <View style={{width:'100%', position:'absolute',bottom:0,paddingVertical:SIZES.font,justifyContent:'center',alignItems: 'center',backgroundColor:'rgba(255,255,255,0.5)',zIndex:1}}>
        <RectButton minWidth={170} fontSize={SIZES.large} handlePress={()=>console.log()} {...SHADOWS.dark} />
      </View>
      <FlatList
        data={data.bids}
        renderItem={({item}) => <DetailsBid bid={item} />}
        keyExtractor={(item)=>item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: SIZES.extraLarge * 3 }}
        ListHeaderComponent={<React.Fragment>
          <DetailsHeader data={data} navigation={navigation} />
          <SubInfo />
          <View style={{padding:SIZES.font}}>
            <DetailsDes data={data} />
            {data.bids.length >0 && (<Text style={{fontSize:SIZES.font,fontFamily:FONTS.semiBold,color:COLORS.primary}}>Current Bids</Text>)}
          </View>
        </React.Fragment>}
      />
    </SafeAreaView>
  )
};

export default Details;

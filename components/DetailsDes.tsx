import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { EthPrice, NFTTitle } from './SubInfo';
import { COLORS, SIZES, FONTS, NFTData } from '../constants';

export type NFTDataType = (typeof NFTData)[0];

const DetailsDes = ({ data }: { data: NFTDataType }) => {
  
  const [text, setText] = useState<string>(data.description.slice(0, 100));
  const [readMore, setReadMore] = useState<boolean>(false);

  const handleShowMore = () => { 
    if (!readMore) {
      setText(data.description);
      setReadMore(true);
    } else {
      setText(data.description.slice(0, 100));
      setReadMore(false);
    }
  };
  return (
    <React.Fragment>
         <View style={{width:'100%',flexDirection:'row',justifyContent: 'space-between',alignItems: 'center'}}>
          <NFTTitle title={data.name} subTitle={data.creator} titleSize={SIZES.extraLarge} subTitleSize={SIZES.font} />
          <EthPrice price={data.price} />
      </View>
      <View style={{marginVertical:SIZES.extraLarge*1.5,}}>
        <Text style={{ fontSize: SIZES.font, fontFamily: FONTS.semiBold, color: COLORS.primary }}>
          Description
        </Text>
        <View style={{marginTop:SIZES.base}}>
          <Text style={{fontSize:SIZES.small,fontFamily:FONTS.regular,color:COLORS.secondary,lineHeight:SIZES.large}}>
            {text}
            {!readMore ? '...' : null}
            <Text
              onPress={()=>handleShowMore}
              style={{ fontSize: SIZES.small, fontFamily: FONTS.semiBold, color: COLORS.primary }}>
              {readMore ? 'Show Less' : 'Read More'}
            </Text>
          </Text>
   
        </View>
      </View>
    </React.Fragment>
 
  )
}

export default DetailsDes
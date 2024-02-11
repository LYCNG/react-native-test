import { BottomTabNavigationProp, BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { CompositeNavigationProp, CompositeScreenProps } from "@react-navigation/native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StackNavigationProp, StackScreenProps } from "@react-navigation/stack";

//定義所有路由的類型
export type RootStackParamList = {
  Home: undefined;
  Details: { data: any };
  NotFound: undefined;
};

//定義 stack props 安全性參數類別
export type RootStackScreenProps<T extends keyof RootStackParamList> =
  StackScreenProps<RootStackParamList, T>;
  
export type NavigationProps = CompositeNavigationProp<BottomTabNavigationProp<RootStackParamList, "Details", undefined>, StackNavigationProp<RootStackParamList, keyof RootStackParamList, undefined>>

//定義stack內使用stack screen全域參數類型 <root, navigate>
export type RootScreenProps<T extends keyof RootStackParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<RootStackParamList, T>,
    RootStackScreenProps<keyof RootStackParamList>
  >;


//宣告全域的 stack link, 繼承上面定義的路由類型，確保 useNavigation root 的類別安全性
declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
};

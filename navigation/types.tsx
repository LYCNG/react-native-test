import type { NativeStackScreenProps } from "@react-navigation/native-stack";

type Props = NativeStackScreenProps<RootStackParamList, "Home", "Details">;

//定義所有路由的類型
export type RootStackParamList = {
  Home: undefined;
  Details: { data: any };
  NotFound: undefined;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParams = {
  Home: undefined;
  Details: { data: any };
};

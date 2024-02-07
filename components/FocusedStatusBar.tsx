import { useIsFocused } from "@react-navigation/native";
import React from "react";
import { StatusBar } from "react-native";

interface IProps<T> {
  props: T;
}

const FocusedStatusBar = (props: any) => {
  const isFocused = useIsFocused();
  return isFocused ? <StatusBar animated={true} {...props} /> : null;
};

export default FocusedStatusBar;

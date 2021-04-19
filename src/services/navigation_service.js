import React from "react";
import { StackActions } from "@react-navigation/native";

const navigatorRef = React.createRef();

const navigate = (routeName, params = {}) =>
  navigatorRef.current?.navigate(routeName, params);

const currentRoute = () =>
  navigatorRef.current?.getCurrentRoute().name;

const push = (routeName, params = {}) =>
  navigatorRef.current?.dispatch(StackActions.push(routeName, params));

const pop = () => {
  navigatorRef.current?.dispatch(StackActions.pop(count));
}

export {
  navigatorRef,
  navigate,
  push,
  pop,
  popToTop,
  currentRoute
};

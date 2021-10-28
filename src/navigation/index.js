import React from "react";
import "react-native-gesture-handler";
import { Text } from "react-native";
import { horizontalAnimation, verticalAnimation } from "./TransitionSpecs";
import { NavigationContainer, useBackButton } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {
  Splash,
  Notification,
  IntroScreen,
} from "./Route";
import DrawerScreen from "./Drawer";
import { Provider } from "react-redux";
import configureStore from "./../redux/store";
import { } from "./Route";
Text.defaultProps = Text.defaultProps || {};
Text.defaultProps.allowFontScaling = false;
const Stack = createStackNavigator();
const store = configureStore();
const AppNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>

    <Stack.Screen
      name="Splash"
      component={Splash}
      navigationOptions={{ headerShown: false, header: false }}
    />
     <Stack.Screen
      name="IntroScreen"
      component={IntroScreen}
      navigationOptions={{ headerShown: false, header: false }}
    />
    <Stack.Screen
      name={"Home"}
      component={DrawerScreen}
      options={verticalAnimation}
    />
    <Stack.Screen
      name={"Notification"}
      component={Notification}
      options={horizontalAnimation}
    />

  </Stack.Navigator>
);
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.navigatorRef = React.createRef();
  }
  render() {
    return (
      <Provider store={store}>
        <NavigationContainer>
          <AppNavigator />
        </NavigationContainer>
      </Provider>
    );
  }
}

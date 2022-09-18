import { useRef, useEffect } from "react";
import { StatusBar } from "react-native";
import { Background } from "./src/components/Background";
import {
  useFonts,
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_900Black,
} from "@expo-google-fonts/inter";
import * as Notifications from "expo-notifications";

import Loading from "./src/components/Loading";
import { Routes } from "./src/routes";
import "./src/service/notificationConfigs";
import "./src/service/getPushNotificationToken";
import { Subscription } from "expo-modules-core";
import { getPushNotificationToken } from "./src/service/getPushNotificationToken";

export default function App() {
  const getNotificationListener = useRef<Subscription>();
  const responseNotificationListener = useRef<Subscription>();

  useEffect(() => {
    getPushNotificationToken();
  });

  useEffect(() => {
    getNotificationListener.current =
      Notifications.addNotificationReceivedListener((notification) =>
        console.log(notification)
      );

    responseNotificationListener.current =
      Notifications.addNotificationResponseReceivedListener((response) =>
        console.log(response)
      );


      return () => {
        if(getNotificationListener.current && responseNotificationListener.current){
          Notifications.removeNotificationSubscription(getNotificationListener.current)
          Notifications.removeNotificationSubscription(responseNotificationListener.current)
        }
      }
  });
  const [fontsLoader] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_900Black,
  });

  return (
    <Background>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      {fontsLoader ? <Routes /> : <Loading />}
    </Background>
  );
}

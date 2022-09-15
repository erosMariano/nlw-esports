import { View, Text, ViewProps } from "react-native";
import React from "react";
import { styles } from "./style";

interface Props extends ViewProps {
  title: string;
  subtitle: string;
}

export const Heading = ({ title, subtitle, ...rest }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {title}
      </Text>
      <Text style={styles.subtitle}>
        {subtitle}
      </Text>
    </View>
  );
};

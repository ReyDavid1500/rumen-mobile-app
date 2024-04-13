import React from "react";
import { Text, StyleSheet, StyleProp, TextStyle } from "react-native";

interface StyledTextProps {
  bold?: boolean;
  big?: boolean;
  small?: boolean;
  white?: boolean;
  medium?: boolean;
  children?: React.ReactNode;
  style?: StyleProp<TextStyle>;
}

const styles = StyleSheet.create({
  text: {
    fontSize: 15,
    color: "black",
  },
  white: {
    color: "#fff",
  },
  bold: {
    fontWeight: "700",
  },
  big: {
    fontSize: 20,
  },
  medium: {
    fontSize: 16,
  },
  small: {
    fontSize: 12,
  },
});

export default function StyledText({
  bold,
  big,
  small,
  white,
  medium,
  children,
  style,
}: StyledTextProps) {
  const textStyles = [
    styles.text,
    bold && styles.bold,
    big && styles.big,
    small && styles.small,
    white && styles.white,
    medium && styles.medium,
    style,
  ];
  return <Text style={textStyles}>{children}</Text>;
}

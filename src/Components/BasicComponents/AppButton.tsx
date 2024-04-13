import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import StyledText from "../StyledComponents/StyledText";

type ButtonProps = {
  title: string;
  onPress: () => void;
  disabled?: boolean;
};

const AppButton: React.FC<ButtonProps> = ({
  title,
  onPress,
  disabled,
  ...props
}) => {
  return (
    <TouchableOpacity
      style={[styles.button, disabled && styles.disabled]}
      onPress={onPress}
      disabled={disabled}
      {...props}
    >
      <StyledText white small bold>
        {title}
      </StyledText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#F77F00",
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: "center",
  },
  disabled: {
    opacity: 0.5,
  },
});

export default AppButton;

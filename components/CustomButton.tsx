import { Text, TouchableOpacity } from "react-native";

type ButtonProps = {
  title: string;
  handlePress: () => void;
  isLoading?: boolean;
  containerStyles?: string;
  textStyles?: string;
};

const CustomButton: React.FC<ButtonProps> = ({
  title,
  handlePress,
  isLoading,
  containerStyles,
  textStyles,
}) => {
  return (
    <TouchableOpacity
      className={`bg-rumen-orange rounded-lg p-2 h-16 justify-center ${containerStyles} ${
        isLoading ? "opacity-50" : ""
      }`}
      onPress={handlePress}
      disabled={isLoading}
    >
      <Text
        className={`text-black font-semibold text-lg mx-3 text-center ${textStyles}`}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

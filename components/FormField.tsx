import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { icons } from "../constants";

type FormFieldProps = {
  title: string;
  value: string;
  handleChangeText: (e: string) => void;
  otherStyles: string;
  keyBoardType?: string;
  placeholder?: string;
};

const FormField: React.FC<FormFieldProps> = ({
  title,
  value,
  handleChangeText,
  otherStyles,
  keyBoardType,
  placeholder,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View className={`space-y-2 ${otherStyles}`}>
      <Text className="text-base text-gray-100 font-pmedium">{title}</Text>
      <View className="border-2 border-rumen-orange focus:border-light-orange w-full h-16 rounded-lg bg-gray-800 flex-row items-center px-3">
        <TextInput
          className="flex-1 text-white font-psemibold text-base"
          placeholder={placeholder}
          value={value}
          placeholderTextColor="#7b7b8b"
          onChangeText={handleChangeText}
          secureTextEntry={
            (title === "Contraseña" || title === "Valida tu Contraseña") &&
            !showPassword
          }
        />
        {(title === "Contraseña" || title === "Valida tu Contraseña") && (
          <TouchableOpacity
            onPressIn={() => setShowPassword(true)}
            onPressOut={() => setShowPassword(false)}
          >
            <Image
              source={!showPassword ? icons.eye : icons.eyeHide}
              className="h-8 w-8"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default FormField;

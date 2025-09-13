import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { Dispatch, SetStateAction, useState } from "react";
import { Pressable, Text, View } from "react-native";
import SmartScript from "./tab-content.tsx/smart-script";

const ModalDisplay = (props: {
  onOpenModal: Dispatch<SetStateAction<boolean>>;
}) => {
  const [page, setpage] = useState<"smart" | "advanced">("smart");
  const { onOpenModal } = props;

  return (
    <View className="bg-black flex-1 pt-6">
      <Pressable onPress={() => onOpenModal(false)} className="ml-2">
        <Ionicons name={"close-outline"} size={36} color={"white"} />
      </Pressable>
      <View className="flex-row mt-6 mx-4">
        <Pressable className="flex-1" onPress={() => setpage("smart")}>
          {page === "smart" && (
            <LinearGradient
              colors={["red", "blue"]}
              end={{ x: 0.8, y: 0.2 }}
              style={{
                height: 4,
                left: 0,
                right: 0,
                top: 39,
                position: "absolute",
              }}
            />
          )}
          <Text
            className={`text-center text-2xl pb-4 ${page === "smart" ? "font-bold text-white" : "text-gray-500 border-b border-gray-500"}`}
          >
            Smart Script
          </Text>
        </Pressable>
        <Pressable className="flex-1" onPress={() => setpage("advanced")}>
          {page === "advanced" && (
            <LinearGradient
              colors={["red", "blue"]}
              end={{ x: 0.8, y: 0.2 }}
              style={{
                height: 4,
                left: 0,
                right: 0,
                top: 39,
                position: "absolute",
              }}
            />
          )}
          <Text
            className={`text-center text-2xl pb-4 ${page === "advanced" ? "font-bold text-white" : "text-gray-500 border-b border-gray-500"}`}
          >
            Advanced Script
          </Text>
        </Pressable>
      </View>
      {page === "smart" && <SmartScript />}
      {page === "advanced" && (
        <Text className="text-white text-3xl font-bold text-center pt-20 flex-1 justify-center items-center">
          Hire Me! I'm the best!!!💪🏾
        </Text>
      )}
    </View>
  );
};

export default ModalDisplay;

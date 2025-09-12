import { Ionicons } from "@expo/vector-icons";
import { Dispatch, SetStateAction, useState } from "react";
import { Pressable, Text, View } from "react-native";

const ModalDisplay = (props: {
  onOpenModal: Dispatch<SetStateAction<boolean>>;
}) => {
  const { onOpenModal } = props;
  const [page, setpage] = useState<"smart" | "advanced">("smart");
  return (
    <View className="bg-black flex-1">
      <Pressable onPress={() => onOpenModal(false)} className="ml-2">
        <Ionicons name={"close-outline"} size={48} color={"white"} />
      </Pressable>
      <View className="flex-row flex-1 mt-6 mx-4">
        <Pressable className="flex-1" onPress={() => setpage("smart")}>
          <Text
            className={`text-center text-2xl pb-4 ${page === "smart" ? "font-bold text-white" : "text-gray-500 border-b border-gray-500"}`}
          >
            Smart Script
          </Text>
        </Pressable>
        <Pressable className="flex-1" onPress={() => setpage("advanced")}>
          <Text
            className={`text-center text-2xl pb-4 ${page === "advanced" ? "font-bold text-white" : "text-gray-500 border-b border-gray-500"}`}
          >
            Advanced Script
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default ModalDisplay;

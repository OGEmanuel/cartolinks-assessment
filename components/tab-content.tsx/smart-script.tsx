import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { Dispatch, SetStateAction, useState } from "react";
import {
  FlatList,
  Image,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";

const IMAGES = [
  {
    id: 1,
    uri: "https://res.cloudinary.com/dl56ef7sx/image/upload/v1750419071/lerone-pieters-mi0gOEn0vJw-unsplash_y4pw8v.jpg",
  },
  {
    id: 2,
    uri: "https://res.cloudinary.com/dl56ef7sx/image/upload/v1750419066/nir-himi-HnQ21X8Gc7U-unsplash_k547dg.jpg",
  },
  {
    id: 3,
    uri: "https://res.cloudinary.com/dl56ef7sx/image/upload/v1750418625/yunus-tug-jSDGLSpa23o-unsplash_hwamqw.jpg",
  },
  {
    id: 4,
    uri: "https://res.cloudinary.com/dl56ef7sx/image/upload/v1750418607/jubeo-hernandez-ZmWLGkPe1Sg-unsplash_maxllv.jpg",
  },
  {
    id: 5,
    uri: "https://res.cloudinary.com/dl56ef7sx/image/upload/v1750417437/antonio-verdin--QQFJD2_R7A-unsplash_h5laww.jpg",
  },
  {
    id: 6,
    uri: "https://res.cloudinary.com/dl56ef7sx/image/upload/v1750415760/mark-basarab-y421kXlUOQk-unsplash_hjm4zu.jpg",
  },
  {
    id: 7,
    uri: "https://res.cloudinary.com/dl56ef7sx/image/upload/v1750415544/tanya-barrow-axZOHkGyAIY-unsplash_ujrc8l.jpg",
  },
];

const SmartScript = () => {
  const [selected, setSelected] = useState(1);
  const [value, setValue] = useState(
    "stunning promotional image of a deliciously decorated cake, emphasizing its layers, frosting, and toppings in an exciting setting."
  );

  return (
    <ScrollView className="mt-8">
      <Text className="text-white text-2xl font-bold mx-4">
        What type of posters do you want to create?
      </Text>
      <View className="mt-6">
        <FlatList
          data={IMAGES}
          horizontal
          renderItem={({ item }) => (
            <PosterItem
              {...item}
              onSetSelected={setSelected}
              selected={selected}
            />
          )}
          keyExtractor={(item) => `${item.id}`}
        />
      </View>
      <View className="bg-slate-600 h-60 mx-4 mt-8 p-4 rounded-lg">
        <TextInput
          placeholder="Type here..."
          multiline={true}
          onChangeText={(newText) => setValue(newText)}
          value={value}
          textAlignVertical="top"
          className="text-white text-2xl h-40"
        />
        <MaterialCommunityIcons
          name="image-plus"
          size={36}
          color={"white"}
          className="self-end"
        />
      </View>
      <View className="mt-6 mx-4">
        <Text className="text-gray-500 text-2xl">Settings</Text>
        <View className="bg-slate-600 mt-3 rounded-lg p-8">
          <View className="flex-row justify-between border-b pb-8 border-gray-500">
            <Text className="text-white text-2xl font-medium">Size</Text>
            <View className="flex-row items-center gap-1.5">
              <Text className="text-2xl text-gray-300">1080 x 1920 px</Text>
              <MaterialIcons
                name="arrow-forward-ios"
                size={20}
                color={"#d1d5db"}
              />
            </View>
          </View>
          <View className="flex-row justify-between pt-8">
            <Text className="text-white text-2xl font-medium">Category</Text>
            <View className="flex-row items-center gap-1.5">
              <Text className="text-2xl text-gray-300">Foods and Beverage</Text>
              <MaterialIcons
                name="arrow-forward-ios"
                size={20}
                color={"#d1d5db"}
              />
            </View>
          </View>
        </View>
      </View>
      <View className="mt-20 mb-16 mx-4">
        <Pressable className="bg-white flex-row items-center gap-5 justify-center active:opacity-70 py-4 rounded-xl">
          <View className="rounded-full size-max overflow-hidden">
            <LinearGradient
              colors={["red", "blue"]}
              end={{ x: 0.8, y: 0.2 }}
              style={{
                height: 20,
                width: 20,
              }}
            />
          </View>
          <Text className="font-semibold text-xl text-center">Generate</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};

export default SmartScript;

const PosterItem = (props: {
  uri: string;
  id: number;
  onSetSelected: Dispatch<SetStateAction<number>>;
  selected: number;
}) => {
  const { uri, id, onSetSelected, selected } = props;

  return (
    <Pressable
      onPress={() => onSetSelected(id)}
      className={`rounded-2xl px-2 overflow-hidden`}
    >
      <Image
        className={`h-52 w-40 border-[4px] rounded-xl ${selected === id ? "border-white" : "border-transparent"}`}
        source={{
          uri: uri,
        }}
      />
    </Pressable>
  );
};

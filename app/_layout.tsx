import "@/global.css";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

const RootLayout = () => {
  return (
    <>
      <StatusBar style="light" />
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: "black",
          },
          headerTintColor: "white",
          contentStyle: { backgroundColor: "black" },
        }}
      />
    </>
  );
};

export default RootLayout;

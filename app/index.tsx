import ModalDisplay from "@/components/modal-display";
import { useState } from "react";
import { Button, Modal, View } from "react-native";

const HomePage = () => {
  const [open, setOpen] = useState(true);
  return (
    <View className="flex-1 justify-center items-center">
      <Button title="Open" onPress={() => setOpen(true)} />
      <Modal
        visible={open}
        animationType="slide"
        presentationStyle="pageSheet"
        onRequestClose={() => setOpen(false)}
      >
        <ModalDisplay onOpenModal={setOpen} />
      </Modal>
    </View>
  );
};

export default HomePage;

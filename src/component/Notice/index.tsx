import {
  Button,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { useState } from "react";
import { useFetchNoticePopup } from "../../api";
import { BaseURL } from "../../api/axiosSetup";

export const Notice = () => {
  const { data } = useFetchNoticePopup();
  const [currentModalIndex, setCurrentModalIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(true);

  const handleOpenNextModal = () => {
    if (currentModalIndex < data.length - 1) {
      setCurrentModalIndex(currentModalIndex + 1);
    } else {
      setIsOpen(false);
    }
  };

  const handleOpenAll = () => {
    setIsOpen(true);
    setCurrentModalIndex(0);
  };

  return (
    <>
      {data && isOpen && (
        <>
          <Modal isOpen={true} onClose={handleOpenNextModal}>
            <ModalOverlay />
            <ModalContent w={"fit-content"} h={"fit-content"}>
              <ModalHeader>{data[currentModalIndex].title}</ModalHeader>
              <ModalBody>
                <ModalCloseButton
                  bg={"primary.500"}
                  textColor={"white"}
                  borderRadius={"full"}
                  top={-3}
                  right={-4}
                  onClick={handleOpenNextModal}
                />
                <Image
                  src={`${BaseURL}/${data[currentModalIndex].image}`}
                  alt="Random Image"
                />
              </ModalBody>
            </ModalContent>
          </Modal>
          <Button
            variant={"outline"}
            colorScheme={"primary"}
            w={"fit-content"}
            onClick={handleOpenAll}
            borderRadius={0}
          >
            Close All
          </Button>
        </>
      )}
    </>
  );
};

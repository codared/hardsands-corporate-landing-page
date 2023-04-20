import { ChangeEvent, FormEvent, useState } from "react";
import { Box, Text, Heading, Button, Flex } from "@chakra-ui/react";
import LeadsForm from "./components/LeadsForm";
import CustomModal from "components/CustomModal";
import FormInput from "./components/FormInput";

const EditLead = () => {
  const [showPreview, setShowPreview] = useState(false);
  const [showSaveFormModal, setShowSaveFormModal] = useState(false);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [text, setText] = useState("");

  const handleFirstNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setLastName(e.target.value);
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePhoneNoChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPhoneNo(e.target.value);
  };

  const handleTextChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const submitForm = (e: FormEvent) => {
    e.preventDefault();

    setShowSaveFormModal(true);
  };

  const formData = {
    firstName,
    lastName,
    email,
    phoneNo,
    text,
    handleFirstNameChange,
    handleLastNameChange,
    handleEmailChange,
    handlePhoneNoChange,
    handleTextChange,
  };

  const toggleModal = () => {
    setShowPreview((prev) => !prev);
  };

  const saveForm = () => {
    setShowPreview(false);
    setShowSaveFormModal(false);
  };

  return (
    <>
      <Box>
        <Heading>Templates</Heading>{" "}
        <Text color="#737373" fontSize="14px">
          Please select one of the template to assign and modify any card action
          to any member of your team
        </Text>
        <Box mt={16}>
          <Flex justifyContent={"space-between"}>
            <Heading fontSize={"1.25rem"} color={"#DF9F71"} mb={4}>
              Lead Action
            </Heading>
            <p onClick={toggleModal}>previw</p>
          </Flex>

          <Box bg="#fff" p={2} display={["grid", "flex"]} gap={[2, 8, 32]}>
            <Box border="1px solid #d9d9d9" p={6}>
              <Button border="0.5px solid #d9d9d9" bg="#fff" w={200}>
                + Create Form
              </Button>
            </Box>
            <Box maxW={"517px"}>
              <LeadsForm formData={formData} togglePreview={toggleModal} />
            </Box>
          </Box>
        </Box>
      </Box>
      {showPreview && (
        <CustomModal
          hideBtn={!showSaveFormModal}
          isOpen={showPreview}
          onClose={toggleModal}
        >
          {!showSaveFormModal ? (
            <LeadsForm
              formData={formData}
              isPreview={showPreview}
              togglePreview={toggleModal}
              submitForm={submitForm}
            />
          ) : (
            <Box w={"383px"} p="1.5rem 2rem">
              <FormInput label="Form Name" />
              <Button bg="brand.300" color="#fff" w="full" onClick={saveForm}>
                Save
              </Button>
            </Box>
          )}
        </CustomModal>
      )}
    </>
  );
};

export default EditLead;

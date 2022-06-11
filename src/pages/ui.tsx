import {
  Box,
  Container,
  Switch,
  SimpleGrid,
} from "@chakra-ui/react";
import CartItemCard from "components/CartItemCard";
import Footer from "components/Footer";
import Navigation from "components/Navigation";
import UserProductCard from "components/UserProductCard";
import ProductCard from "components/ProductCard";
import { HomePage } from "modules/hardsands";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import React from "react";

// function DrawerExample() {
//   const { isOpen, onOpen, onClose } = useDisclosure();
//   const btnRef = React.useRef();

//   return (
//     <>
//       {/* @ts-ignore */}
//       <Button ref={btnRef} colorScheme="teal" onClick={onOpen}>
//         Open
//       </Button>
//       <Drawer
//         isOpen={isOpen}
//         placement="right"
//         onClose={onClose}
//         // @ts-ignore
//         finalFocusRef={btnRef}
//       >
//         <DrawerOverlay>
//           <DrawerContent>
//             <DrawerCloseButton />
//             <DrawerHeader>Create your account</DrawerHeader>

//             <DrawerBody>
//               <Input placeholder="Type here..." />
//             </DrawerBody>

//             <DrawerFooter>
//               <Button variant="outline" mr={3} onClick={onClose}>
//                 Cancel
//               </Button>
//               <Button colorScheme="blue">Save</Button>
//             </DrawerFooter>
//           </DrawerContent>
//         </DrawerOverlay>
//       </Drawer>
//     </>
//   );
// }

const UIPage = () => {
  return (
    <ParallaxProvider>
      <Navigation />
      {/* <Drawer /> */}
      <Container maxW="container.lg">
        <SimpleGrid columns={[2, 3, 4]} spacing={[2, 3, 5]}>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </SimpleGrid>
      </Container>
      <Parallax speed={-10}>
        <UserProductCard />
      </Parallax>
      <Switch opacity="0.5" colorScheme="orange" size="lg" />
      <Box>
        <CartItemCard />
        <CartItemCard />
        <CartItemCard />
        <CartItemCard />
      </Box>
      <Footer />
    </ParallaxProvider>
  );
};

export default UIPage;

import { Box } from "@chakra-ui/react";

import HeroSection from "./HeroSection";
import UsageDemoSection from "./UsageDemoSection";
import ProductShowcaseSection from "./ProductShowcaseSection";
import OurClientsSection from "./OurClientsSection";
import PreviousDesignedCardSection from "./PreviousDesignedCardSection";
import ReviewSection from "./ReviewSection";
import GetStartedSection from "./GetStartedSection";
import ComunitySection from "./ComunitySection";
import { CommunityImages } from "modules/shared/constants";

const HomePage = () => {
  return (
    <Box>
      {/* Hero Section */}
      <HeroSection />
      {/* End Hero Section */}

      {/* Product Showcase Section */}
      <ProductShowcaseSection />
      {/* End Product Showcase Section */}

      {/* Our Clients Section */}
      <OurClientsSection />
      {/* End Our Clients Section */}

      {/* Usage Demo Section */}
      <UsageDemoSection />
      {/* End Usage Demo Section */}

      {/* Previous Designed Card Section */}
      <PreviousDesignedCardSection />
      {/* End Previous Designed Card Section */}

      {/* Review Section */}
      <ReviewSection />
      {/* End Review Section */}

      {/* Get Started Section */}
      <GetStartedSection />
      {/* End Get Started Section */}

      {/* Instagram Commmunity Section */}
      {/* <ComunitySection
        images={CommunityImages}
        pt={20}
        bgColor="moss"
        color="sandstone"
      /> */}
      {/* End Instagram Commmunity Section */}
    </Box>
  );
};

export default HomePage;

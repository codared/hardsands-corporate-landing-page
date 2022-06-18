import { Box } from "@chakra-ui/react";

import { ParallaxProvider } from "react-scroll-parallax";
import HeroSection from "./HeroSection";
import ShareYourBusinessSection from "./ShareYourBusinessSection";
import TakeControlSection from "./TakeControlSection";
import UsageDemoSection from "./UsageDemoSection";
import ProductShowcaseSection from "./ProductShowcaseSection";

const HomePage = () => {
  return (
    <Box overflow="hidden">
      <ParallaxProvider>
        {/* Hero Section */}
        <HeroSection />
        {/* End Hero Section */}

        {/* Share your business Section */}
        <ShareYourBusinessSection />
        {/* End Share your business Section */}

        {/* Take Control Section */}
        <TakeControlSection />
        {/* End Take Control Section */}

        {/* Usage Demo Section */}
        <UsageDemoSection />
        {/* End Usage Demo Section */}

        {/* Product Showcase Section */}
        <ProductShowcaseSection />
        {/* End Product Showcase Section */}

        {/* What Customers are saying Section */}
        {/* End What Customers are saying Section */}
      </ParallaxProvider>
    </Box>
  );
};

export default HomePage;

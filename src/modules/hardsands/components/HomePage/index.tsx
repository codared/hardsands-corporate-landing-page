const HomePage = () => {
  return (
    <Box>
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

import { Navbar, Hero, WhyChooseUs, Reviews, PhotoBooths, Wedding, Party, Facts, GoogleReviews, OurWorkGallery, CoverageMap, FAQs, QuoteRequest, PremiumFeatures, Branding, Footer } from './components';

function App() {
  return (
    <div className="min-h-screen bg-showtime-dark text-white font-sans selection:bg-showtime-red selection:text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <WhyChooseUs />
      <Reviews />
      <PhotoBooths />
      <PremiumFeatures />
      <Branding />
      <Wedding />
      <Party />
      <Facts />
      <GoogleReviews />
      <OurWorkGallery />
      <CoverageMap />
      <FAQs />
      <QuoteRequest />
      {/* Additional sections like 'Our Work' could go here in a larger build */}
      <Footer />
    </div>
  );
}

export default App;

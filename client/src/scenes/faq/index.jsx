import React from "react";
import FAQPage from "scenes/faq/faqs";
import HeaderWebsite from "components/landingComponents/header";
import Footer from "components/landingComponents/footer";

const index = () => {
  return (
    <>
      <HeaderWebsite />
      <FAQPage />
      <Footer />
    </>
  );
};

export default index;

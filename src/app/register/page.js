import Breadcrumb1 from "@/components/common/Breadcrumb1";
import Footer from "@/components/footer/Footer";
import InnerPageHeader1 from "@/components/header/InnerPageHeader1";
import Header from "@/components/header/Header";
import RegisterForm from "@/components/register/Register";

export const metadata = {
  title: "Bhargava Auctions",
  icons: {
    // icon: "/assets/img/fav-icon.svg",
    icon: "/assets/img/bh-auction-logo.jpeg",
  },
};
const RegisterPage = () => {
  
  return (
    <>
      {/* <InnerPageHeader1 /> */}
      <Header />
      <Breadcrumb1 currentPage="Register" pagetitle="Register" />
      <RegisterForm />
      <Footer />
    </>
  );
};

export default RegisterPage;

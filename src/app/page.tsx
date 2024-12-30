import Navbar from "./components/NavBar";
import AuthorCard from "./components/AuthorCard";
import Mega from "./components/Mega";
import Feature from "./components/Feature";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Feature/>
      <Mega/>
      <AuthorCard/>
      <Footer/>
    </div>
  );
}

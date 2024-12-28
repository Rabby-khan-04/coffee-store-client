import Banner from "../../components/Home/Banner";
import Featured from "../../components/Home/Featured";
import Features from "../../components/Home/Features";
import InstaFeed from "../../components/Home/InstaFeed";

const Home = () => {
  return (
    <main>
      <Banner />
      <Features />
      <Featured />
      <InstaFeed />
    </main>
  );
};

export default Home;

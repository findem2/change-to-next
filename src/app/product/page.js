import Footer from "../component/footer/footer";
import Content from "../component/pageproduct/content/content";
import Description from "../component/pageproduct/description/description";
import FFP from "../component/pageproduct/ffp/ffp";
import InTheBox from "../component/pageproduct/in the box/in the box";
import Swipers from "../component/pageproduct/swiper/swipers";
import TechSpecs from "../component/pageproduct/tech specs/tech specs";
import YoutubePlayBtn from "../component/pageproduct/youtube play btn/youtube play btn";
import Features from "../component/spac/features";

export default function Product() {
  return (
    <div>
      <Swipers />
      <Content />
      <Description />
      <YoutubePlayBtn />
      <FFP />
      <Features />
      <TechSpecs />
      <InTheBox />
    </div>
  );
}

import Footer from "../component/footer/footer";
import Content from "../component/pageproduct/content/content";
import Description from "../component/pageproduct/description/description";
import FFP from "../component/pageproduct/ffp/ffp";
import Swipers from "../component/pageproduct/swiper/swipers";
import YoutubePlayBtn from "../component/pageproduct/youtube play btn/youtube play btn";
import SPAC from "../component/spac/spac";

export default function Product() {
  return (
    <div>
      <Swipers />
      <Content />
      <Description />
      <YoutubePlayBtn />
      <FFP />
      <SPAC />
      <Footer />
    </div>
  );
}

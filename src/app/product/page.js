import Footer from "../component/footer/footer";
import Content from "../component/pageproduct/content/content";
import Description from "../component/pageproduct/description/description";
import Swipers from "../component/pageproduct/swiper/swipers";

export default function Product() {
  return (
    <div>
      <Swipers />
      <Content />
      <Description />
      <Footer />
    </div>
  );
}

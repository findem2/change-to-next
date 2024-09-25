import Bugatti from "./component/bugatti/bugatti";
import Craftsmanship from "./component/craftsmanship/crafts";
import Footer from "./component/footer/footer";
import Connect from "./component/M&D Connect/connect";
import ProdectLine from "./component/products/productsline";
import MySwiper from "./component/swifer/myswiper";
import Trinity from "./component/trinity/trinity";

export default function Home() {
  return (
    <div>
      <MySwiper />
      <ProdectLine />
      <Trinity />
      <Craftsmanship />
      <Bugatti />
      <Connect />
    </div>
  );
}

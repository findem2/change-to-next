// import Item1 from "./item1";
// import Item2 from "./item2";
// import Item3 from "./item3";
// import Item4 from "./item4";
import Item from "./item";

const ProdectLine = () => {
  return (
    <div className="p-12 px-5 md:px-8 lg:px-12">
      <div className="text-2xl lg:text-4xl text-gray-600 mb-8">
        Featured Products
      </div>
      <div className="flex w-full">
        <Item></Item>
        {/* <Item1></Item1>
        <Item2></Item2>
        <Item3></Item3>
        <Item4></Item4> */}
      </div>
    </div>
  );
};

export default ProdectLine;

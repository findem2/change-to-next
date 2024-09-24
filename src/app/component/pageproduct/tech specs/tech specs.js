import ConnectivityCharging from "../../modal/connectivity&charging";
import MaterialsDesign from "../../modal/materials&design";
import SoundFeatures from "../../modal/sound&features";

const TechSpecs = () => {
  return (
    <div className="px-5 py-20">
      <div className="text-xl text-gray-700 pb-6">Tech Specs</div>
      <div className="">
        <MaterialsDesign />
        <SoundFeatures />
        <ConnectivityCharging />
      </div>
    </div>
  );
};

export default TechSpecs;

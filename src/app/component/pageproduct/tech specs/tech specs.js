import ConnectivityCharging from "../../modal/connectivity&charging";

const TechSpecs = () => {
  return (
    <div className="px-5 py-20">
      <div className="text-xl text-gray-700 pb-6">Tech Specs</div>
      <div className="space-y-16">
        <ConnectivityCharging />
        <div className="text-gray-700">Sound and Features</div>
        <div className="text-gray-700">Connectivity and Charging</div>
      </div>
    </div>
  );
};

export default TechSpecs;

import PixelBlast from "./PixelBlast";
import home from "../../assets/kyc.png";

export default function KYCHome() {
  return (
    <div className="relative h-screen w-full bg-black overflow-hidden rounded-4xl">
      {/* Full-screen animated background */}
      <PixelBlast
        variant="circle"
        pixelSize={6}
        color="blue"
        patternScale={3}
        patternDensity={2}
        pixelSizeJitter={0.5}
        speed={2}
        edgeFade={0.1}
        transparent
      />

      {/* Centered content */}
      <div className="absolute inset-0 flex items-center justify-center z-10 px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 lg:gap-16 max-w-7xl w-full">
          {/* Larger Image */}
          <div className="shrink-0">
            <img
              src={home}
              alt="Home"
              className="h-80 w-auto sm:h-96 md:h-112 lg:h-128 object-contain drop-shadow-2xl"
            />
          </div>

          {/* Text with Gradient on "Compliance" */}
          <div className="text-center md:text-left">
            <h1 className="text-white text-8xl font-bold leading-snug">
              <span className="block md:inline">Know Your </span>
              <span className="bg-linear-to-r from-indigo-600 via-teal-500 to-cyan-500 bg-clip-text text-transparent">
                Compliance
              </span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

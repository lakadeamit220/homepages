import PixelBlast from "./PixelBlast";
import home from "../../assets/kyc.png";

export default function KYCHome() {
  return (
    <div className="relative h-screen w-full bg-black overflow-hidden">
      {/* Full-screen animated background */}
      <PixelBlast
        variant="circle"
        pixelSize={6}
        color="blue"
        patternScale={3}
        patternDensity={1.2}
        pixelSizeJitter={0.5}
        enableRipples
        rippleSpeed={0.4}
        rippleThickness={0.12}
        rippleIntensityScale={1.5}
        liquid
        liquidStrength={0.12}
        liquidRadius={1.2}
        liquidWobbleSpeed={5}
        speed={0.6}
        edgeFade={0.25}
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
              <span
                className="bg-linear-to-r from-[#40ffaa] via-[#4079ff] to-[#40ffaa] bg-clip-text text-transparent inline-block"
                style={{
                  backgroundImage: `linear-gradient(90deg, #40ffaa, #4079ff, #40ffaa, #4079ff, #40ffaa)`,
                  backgroundSize: "200% 100%",
                  animation: "gradientShift 3s ease infinite",
                }}
              >
                Compliance
              </span>
            </h1>
          </div>
        </div>
      </div>

      {/* Optional: Add animation keyframes if not in global CSS */}
      <style jsx>{`
        @keyframes gradientShift {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
      `}</style>
    </div>
  );
}

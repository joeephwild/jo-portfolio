import Spline from "@splinetool/react-spline";

const Hero = () => {
  return (
    <div className="w-full items-center mt-[10%] flex flex-col  space-y-16">
      <div className=" flex lg:flex-row-reverse flex-col">
        <p className="font-normal font-Kufam ml-[20px]  text-[16px] lg:!w-[489px] lg:h-[96px] leading-[24px] text-[#fff] !max-w-[333px] !max-h-[144px]">
          Interactive front-end/Blockchain developer with full-stack
          capabilities based in Lagos, Nigeria. Passionate about creating
          memorable digital experiences through dynamic and engaging user
          interfaces. Let's work together to bring your project to life!
        </p>
        <h2 className="text-[24px]  lg:text-[80px] lg:!max-w-[980px] lg:mt-16 lg:!max-h-[218px] lg:leading-[109.12px] font-black font-Nunito leading-[32px] !max-w-[292px] !max-h-[66px] text-[#D5FF40]">
          FULL-STACK ETHEREUM DEVELOPER.
        </h2>
      </div>

      <div className="object-cover ">
        <Spline scene="https://prod.spline.design/K9kzwdXjVRchIdrf/scene.splinecode" />
      </div>
    </div>
  );
};

export default Hero;

import { Services } from "../utils";

const Stack = () => {
  return (
    <section className="mt-[20%] w-full">
      <h1 className="md:text-[40px] text-[30px] font-bold font-Nunito leading-[52px] text-[#D5FF40]">
        What can i do?.
      </h1>

      <div className="grid-cols-1 mt-9 md:grid-cols-2 gap-16 grid items-center  mx-[20px] md:mx-0 lg:mx-auto space-y-16 md:space-y-20 w-full">
        {Services.map((item, i) => (
          <div
            key={i}
            className="flex flex-col items-start md:items-center w-full h-full space-y-5"
          >
            <h3 className="text-[14px] font-Kufam w-[297px] items-start flex h-[24p] font-bold text-[#fff]">
             {i + 1}:  {item.title}
            </h3>
            <p className="text-[16px] font-normal font-Kufam md:max-w-[512px] !max-w-[383px] !max-h-[144px] leading-[24px] text-[#fff]">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stack;


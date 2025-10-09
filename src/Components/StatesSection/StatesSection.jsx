const StatesSection = () => {
  return (
    <div className="py-6 md:py-10 lg:py-20 bg-gradient-to-br from-[#632EE3] to-[#9F62F2] text-white">
      <h3 className="text-center font-bold text-2xl md:text-4xl lg:text-5xl">
        Trusted by Millions, Built for You
      </h3>
      <section className="mx-auto space-y-4 mt-3 md:mt-7 lg:mt-10 w-11/12 text-center grid grid-cols-1 md:grid-cols-3">
        <div>
          <p className="text-xs">Total Downloads</p>
          <p className="font-extrabold text-3xl md:text-6xl md:my-2 lg:my-4">26.6M</p>
          <p className="text-xs">21% more than last month</p>
        </div>
        <div>
          <p className="text-xs">Total Reviews</p>
          <p className="font-extrabold text-3xl md:text-6xl md:my-2 lg:my-4">906K</p>
          <p className="text-xs">46% more than last month</p>
        </div>
        <div>
          <p className="text-xs">Active Apps</p>
          <p className="font-extrabold text-3xl md:text-6xl md:my-2 lg:my-4">13</p>
          <p className="text-xs">3 more will Launch</p>
        </div>
      </section>
    </div>
  );
};

export default StatesSection;

function HomeSection({ name, children }) {
  return (
    <div className="bg-white rounded-[10px] sm:p-[30px] p-5 mt-4">
      <div className="flex justify-between uppercase">
        <h1 className="sm:text-lg text-base font-bold">{name}</h1>
        <button className="text-[#666666] text-[13px]">View All</button>
      </div>
      {children}
    </div>
  );
}

export default HomeSection;

function FilterByName({ setInputText }) {
  return (
    <div>
      <div className="relative block ">
        <input
          className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
          placeholder="Search for anything..."
          name="search"
          id="id"
          type="text"
          onChange={(e) => setInputText(e.target.value.toLowerCase())}
        />
      </div>
    </div>
  );
}

export default FilterByName;

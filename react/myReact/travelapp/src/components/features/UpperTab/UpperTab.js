import DarkMode from "../DarkMode/DarkMode";


function UpperTab() {
  return (
    // <div className="relative flex justify-between h-20 align-middle bg-slate-600">
        <div className="bg-White dark:bg-DarkBlue drop-shadow-md">
       <div className="flex items-center justify-between w-full px-4 py-6 mx-auto max-w-7xl">
        <h1 className="text-xl font-bold md:text-xl dark:text-White ">
          Where in the World?
        </h1>
        <DarkMode />
      </div>
    </div>
  );
}

export default UpperTab;

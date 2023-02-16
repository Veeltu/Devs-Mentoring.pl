import DarkMode from "../DarkMode/DarkMode";


function UpperTab() {
    return (
        <div className="h-10 relative flex flex-row justify-between bg-slate-600">
            <h1>tekstfrom UpperTab</h1>
            <DarkMode/>
        </div>
    );
}

export default UpperTab;
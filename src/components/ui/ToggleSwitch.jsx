export function ToggleSwitch() {
    return (
      <label className="relative inline-flex items-center cursor-pointer">
        <input type="checkbox" className="sr-only peer" />
        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none dark:bg-zinc-800 rounded-full peer dark:peer-checked:bg-orange-500 peer-checked:bg-orange-500 transition-all"></div>
        <div className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform peer-checked:translate-x-5"></div>
      </label>
    );
  }
  
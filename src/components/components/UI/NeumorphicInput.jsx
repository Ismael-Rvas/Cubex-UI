export function NeumorphicInput({ placeholder }) {
    return (
      <input
        type="text"
        placeholder={placeholder}
        className="w-full px-4 py-2 rounded-xl bg-slate-100 dark:bg-zinc-800 text-slate-800 dark:text-white shadow-inner dark:shadow-inner-dark border border-transparent focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
      />
    );
  }
  
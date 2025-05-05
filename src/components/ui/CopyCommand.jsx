import { Terminal, Copy, Check } from "lucide-react";
import { useState } from "react";

export default function CopyCommand({ command }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(command);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800); // Volver al icono de Copy después de 1 segundo
    } catch (err) {
      console.error("Error al copiar", err);
    }
  };

  return (
    <div
      onClick={handleCopy}
      className="relative flex items-center px-6 py-3 bg-transparent border border-gray-200 dark:border-gray-700 text-black dark:text-white rounded-lg text-xs font-semibold transition cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800"
    >
      <Terminal className="w-4 h-4 mr-2" />
      {command}
      <div className="ml-2 relative w-4 h-4">
        <Copy
          className={`absolute w-4 h-4 transition-opacity duration-500 ${
            copied ? "opacity-0" : "opacity-100 hover:opacity-80"
          }`}
        />
        <Check
          className={`absolute w-4 h-4 transition-opacity duration-500 ${
            copied ? "opacity-100" : "opacity-0"
          } text-green-500`}
        />
      </div>
    </div>
  );
}

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export const ToggleTheme = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <button
      onClick={toggleTheme}
      className="
        flex items-center gap-2 rounded-lg border px-4 py-2 text-sm font-medium
        transition-all duration-200 hover:cursor-pointer hover:opacity-80
        border-zinc-300 bg-white text-black
      "
    >
      {theme === "light" ? (  <>  <Moon size={18} /> <span>Dark</span>  </>  ) :
       (  <> <Sun size={18} /> <span>Light</span> </>   )}
    </button>
  );
};
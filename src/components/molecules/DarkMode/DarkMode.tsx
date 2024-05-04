import React, { useState } from "react";
import Button from "src/components/atoms/Button";
import { MoonIcon } from "src/components/atoms/Icons/MoonIcon";

type Props = {
  onChange?: (mode: "dark" | "light") => void;
};

const DarkMode: React.FC<Props> = ({ onChange }) => {
  const [mode, setMode] = useState<"dark" | "light">("light");

  const handleClick = (value: "dark" | "light") => {
    setMode(value);
    onChange?.(value);
  };

  return (
    <div className="flex items-center rounded-md bg-white">
      <Button onClick={() => handleClick("dark")} noBackground={mode !== "dark"} className="w-[47px] !bg-[none] px-0">
        <MoonIcon className={mode !== "dark" ? "text-gray-400" : "text-white"} />
      </Button>
    </div>
  );
};

export default DarkMode;

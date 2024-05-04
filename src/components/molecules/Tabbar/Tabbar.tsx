import clsx from "clsx";
import React, { useEffect, useState } from "react";

type Props = {
  items?: { label: string; value: string | number }[];
  value?: string | number;
};

const Tabbar: React.FC<Props> = ({ items, value }) => {
  const [tabActive, setTabActive] = useState(value);

  useEffect(() => {
    setTabActive(value);
  }, [value]);

  return (
    <div className="flex items-center justify-between gap-x-[50px] rounded-[20px] bg-white px-5 py-4 shadow-main">
      {items?.map((item) => (
        <div
          onClick={() => setTabActive(item.value)}
          className={clsx(
            "cursor-pointer rounded-[20px] border border-transparent px-4 text-base",
            tabActive === item.value && "!border-primary bg-[#F5E2FE] text-primary"
          )}
          key={item.value}
        >
          {item.label}
        </div>
      ))}
    </div>
  );
};

export default Tabbar;

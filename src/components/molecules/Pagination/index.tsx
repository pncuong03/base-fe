import React, { useState } from "react";

const Pagination: React.FC = () => {
  const [num, setNum] = useState(1);
  const [cur, setCur] = useState(1);

  const pages = [{ page: num }, { page: num + 1 }, { page: num + 2 }];

  function next() {
    setNum(num + 1);
  }

  function previous() {
    num > 1 && setNum(num - 1);
  }

  return (
    <nav aria-label="Page navigation" className="flex justify-center">
      <div className="inline-flex">
        <div>
          <button
            className="h-10 px-3 text-white transition-colors rounded-l-lg focus:shadow-outline"
            onClick={previous}
          >
          </button>
        </div>

        {pages.map((pg, i) => (
          <button
            key={i}
            onClick={() => setCur(pg.page)}
            className={`h-10 px-5 text-white transition-colors focus:shadow-outline ${
              cur === pg.page && "bg-[#14F195]"
            }`}
          >
            {pg.page}
          </button>
        ))}

        <div>
          <button
            className="h-10 px-3 transition-colors rounded-r-lg focus:shadow-outline"
            onClick={next}
          >
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Pagination;

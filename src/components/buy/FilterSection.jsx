import React, { useEffect } from "react";

const FilterSection = ({ filters, setFilters }) => {
  const handleFilterChange = (e) => {
    const { name, value, checked } = e.target;

    setFilters((prev) => {
      if (checked) {
        return {
          ...prev,
          [name]: [...prev[name], value],
        };
      } else {
        return {
          ...prev,
          [name]: prev[name].filter((item) => item !== value),
        };
      }
    });
  };

  const clearFilters = () => {
    setFilters({ brand: [], year: [], color: [], price: [] });
  };


  return (
    <>
      <aside className="w-75 sticky top-0 h-fit">
        <div className="flex flex-row justify-between px-8 py-5 static top-0 right-0 left-0 text-secondary">
          <p className="text-2xl font-semibold">Filters</p>
          <button className="underline" onClick={clearFilters}>
            Clear all
          </button>
        </div>
        <div className="px-8 py-5">
          <div className="flex flex-col gap-1 mb-3">
            <div className="text-2xl">Price Range :</div>
            <div className="flex flex-row flex-wrap gap-2">
              <label className=" cursor-pointer text-white">
                <input
                  type="checkbox"
                  name="price"
                  value="0-150000"
                  className="peer hidden"
                  onChange={handleFilterChange}
                  checked={filters.price.includes("0-150000")}
                />
                <span className=" text-xs bg-secondary px-2 py-1 border-2  border-secondary rounded-full  peer-checked:bg-white peer-checked:text-secondary peer-checked:border-secondary">
                  Below 1.5L
                </span>
              </label>
              <label className=" cursor-pointer text-white">
                <input
                  type="checkbox"
                  name="price"
                  value="150000-250000"
                  className="peer hidden"
                  onChange={handleFilterChange}
                  checked={filters.price.includes("150000-250000")}
                />
                <span className=" text-xs bg-secondary px-2 py-1 border-2  border-secondary rounded-full  peer-checked:bg-white peer-checked:text-secondary peer-checked:border-secondary">
                  1.5L - 2.5L
                </span>
              </label>
              <label className=" cursor-pointer text-white">
                <input
                  type="checkbox"
                  name="price"
                  value="250000-500000"
                  className="peer hidden"
                  onChange={handleFilterChange}
                  checked={filters.price.includes("250000-500000")}
                />
                <span className=" text-xs bg-secondary px-2 py-1 border-2  border-secondary rounded-full  peer-checked:bg-white peer-checked:text-secondary peer-checked:border-secondary">
                  Above 2.5L
                </span>
              </label>
            </div>
          </div>

          <div className="flex flex-col gap-1  text-secondary mb-3">
            <div className="text-2xl">Brand :</div>
            <div className="flex flex-col gap-0">
              <label>
                <input
                  type="checkbox"
                  name="brand"
                  value="KTM"
                  onChange={handleFilterChange}
                  checked={filters.brand.includes("KTM")}
                />
                KTM
              </label>
              <label>
                <input
                  type="checkbox"
                  name="brand"
                  value="TVS"
                  onChange={handleFilterChange}
                  checked={filters.brand.includes("TVS")}
                />
                TVS
              </label>
              <label>
                <input
                  type="checkbox"
                  name="brand"
                  value="Bajaj"
                  onChange={handleFilterChange}
                  checked={filters.brand.includes("Bajaj")}
                />
                Bajaj
              </label>
              <label>
                <input
                  type="checkbox"
                  name="brand"
                  value="Royal Enfield"
                  onChange={handleFilterChange}
                  checked={filters.brand.includes("Royal Enfield")}
                />
                Royal Enfield
              </label>
              <label>
                <input
                  type="checkbox"
                  name="brand"
                  value="Yamaha"
                  onChange={handleFilterChange}
                  checked={filters.brand.includes("Yamaha")}
                />
                Yamaha
              </label>
            </div>
          </div>
          <div className="flex flex-col gap-1  text-secondary mb-3">
            <div className="text-2xl">Year Range :</div>
            <div className="flex flex-row flex-wrap gap-2">
              <label className=" cursor-pointer text-white">
                <input
                  type="checkbox"
                  name="year"
                  onChange={handleFilterChange}
                  value="2019-2020"
                  className="peer hidden"
                  checked={filters.year.includes("2019-2020")}
                />
                <span className=" text-xs bg-secondary px-2 py-1 border-2  border-secondary rounded-full  peer-checked:bg-white peer-checked:text-secondary peer-checked:border-secondary">
                  2019-2020
                </span>
              </label>
              <label className=" cursor-pointer text-white">
                <input
                  type="checkbox"
                  name="year"
                  onChange={handleFilterChange}
                  value="2020-2021"
                  className="peer hidden"
                  checked={filters.year.includes("2020-2021")}
                />
                <span className=" text-xs bg-secondary px-2 py-1 border-2  border-secondary rounded-full  peer-checked:bg-white peer-checked:text-secondary peer-checked:border-secondary">
                  2020-2021
                </span>
              </label>
              <label className=" cursor-pointer text-white">
                <input
                  type="checkbox"
                  name="year"
                  onChange={handleFilterChange}
                  value="2021-2022"
                  className="peer hidden"
                  checked={filters.year.includes("2021-2022")}
                />
                <span className=" text-xs bg-secondary px-2 py-1 border-2  border-secondary rounded-full  peer-checked:bg-white peer-checked:text-secondary peer-checked:border-secondary">
                  2021-2022
                </span>
              </label>
              <label className=" cursor-pointer text-white">
                <input
                  type="checkbox"
                  name="year"
                  onChange={handleFilterChange}
                  value="2022-2023"
                  className="peer hidden"
                  checked={filters.year.includes("2022-2023")}
                />
                <span className=" text-xs bg-secondary px-2 py-1 border-2  border-secondary rounded-full  peer-checked:bg-white peer-checked:text-secondary peer-checked:border-secondary">
                  2022-2023
                </span>
              </label>
              <label className=" cursor-pointer text-white">
                <input
                  type="checkbox"
                  name="year"
                  onChange={handleFilterChange}
                  value="2023-2024"
                  className="peer hidden"
                  checked={filters.year.includes("2023-2024")}
                />
                <span className=" text-xs bg-secondary px-2 py-1 border-2  border-secondary rounded-full  peer-checked:bg-white peer-checked:text-secondary peer-checked:border-secondary">
                  2023-2024
                </span>
              </label>
              <label className=" cursor-pointer text-white">
                <input
                  type="checkbox"
                  name="year"
                  onChange={handleFilterChange}
                  value="2024-2025"
                  className="peer hidden"
                  checked={filters.year.includes("2024-2025")}
                />
                <span className=" text-xs bg-secondary px-2 py-1 border-2  border-secondary rounded-full  peer-checked:bg-white peer-checked:text-secondary peer-checked:border-secondary">
                  2024-2025
                </span>
              </label>
            </div>
          </div>
          <div className="flex flex-col gap-1  text-secondary mb-3">
            <div className="text-2xl">Color :</div>
            <div className="flex flex-col gap-0">
              <label>
                <input
                  type="checkbox"
                  name="color"
                  onChange={handleFilterChange}
                  value="Red"
                  checked={filters.color.includes("Red")}
                />
                Red
              </label>
              <label>
                <input
                  type="checkbox"
                  name="color"
                  onChange={handleFilterChange}
                  value="Black"
                  checked={filters.color.includes("Black")}
                />
                Black
              </label>
              <label>
                <input
                  type="checkbox"
                  name="color"
                  onChange={handleFilterChange}
                  value="White"
                  checked={filters.color.includes("White")}
                />
                White
              </label>
              <label>
                <input
                  type="checkbox"
                  name="color"
                  onChange={handleFilterChange}
                  value="Grey"
                  checked={filters.color.includes("Grey")}
                />
                Grey
              </label>
              <label>
                <input
                  type="checkbox"
                  name="color"
                  onChange={handleFilterChange}
                  value="Blue"
                  checked={filters.color.includes("Blue")}
                />
                Blue
              </label>
            </div>
          </div>
          <div></div>
          <div></div>
        </div>
      </aside>
    </>
  );
};

export default FilterSection;

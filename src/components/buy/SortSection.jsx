import React, { useEffect } from "react";

const SortSection = ({
  sort,
  setSort,

}) => {

  return (
    <>
      <div className="flex flex-row justify-between  px-5">
        <div className="flex text-xl gap-2 justify-center items-center">
          <span id="listcount" className="text-md font-semibold"></span>
        </div>
        <div className="flex px-5 items-center gap-1">
          <div className="flex items-center mx-1">
            <p className="text-xl font-semibold">Sort By</p>
          </div>
          <div className="">
            <select
              name="sortBuy"
              id="sortBuy"
              className="border-2 border-secondary px-2 py-1 rounded-md"
              onChange={(e) => setSort(e.target.value)}
            >
              <option value="" className="text-gray-200">
                Default
              </option>
              <option value="rating_htl">Ratings</option>
              <option value="vehicle_model_year_lth">
                Model year (low - high)
              </option>
              <option value="vehicle_model_year_htl">
                Model year (high - low)
              </option>
              <option value="vehicle_selling_price_lth">
                Price (low - high)
              </option>
              <option value="vehicle_selling_price_htl">
                Price (high - low)
              </option>
            </select>
          </div>
        </div>
      </div>
    </>
  );
};

export default SortSection;

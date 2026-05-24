import { useEffect, useState } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

import BikeCard from "../components/buy/BikeCardBuy";
import FilterSection from "../components/buy/FilterSection";
import SearchSection from "../components/buy/SearchSection";
import SortSection from "../components/buy/SortSection";


const Buy = () => {
   const [dataList, setDataList] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const [visibleCount, setVisibleCount] = useState(9);
  const [filters, setFilters] = useState({
    brand: [],
    year: [],
    color: [],
    price: [],
  });

  useEffect(() => {
    fetch("/data/reride_dummy_bikes_80_realistic.json")
      .then((res) => res.json())
      .then((data) => {
        setDataList(data);
        setFilteredData(data);
      });
  }, []);


  useEffect(() => {
    let result = [...dataList];

    if (search !== "") {
      result = result.filter(
        (bike) =>
          bike.vehicle_model.toLowerCase().includes(search.toLowerCase()) ||
          bike.vehicle_brand.toLowerCase().includes(search.toLowerCase())
      );
    }

    result = result.filter((bike) => {
      const brandMatch =
        filters.brand?.length === 0 ||
        filters.brand?.includes(bike.vehicle_brand);

      const colorMatch =
        filters.color?.length === 0 ||
        filters.color?.includes(bike.vehicle_colour);

      const priceMatch =
        filters.price?.length === 0 ||
        filters.price?.some((range) => {
          const [min, max] = range.split("-");
          return (
            bike.vehicle_selling_price >= +min &&
            bike.vehicle_selling_price <= +max
          );
        });

      const yearMatch =
        filters.year?.length === 0 ||
        filters.year?.some((range) => {
          const [min, max] = range.split("-");
          return (
            bike.vehicle_model_year >= +min && bike.vehicle_model_year <= +max
          );
        });

      return brandMatch && colorMatch && priceMatch && yearMatch;
    });

    if (sort === "vehicle_selling_price_lth") {
      result = [...result].sort((a, b) => a.vehicle_selling_price - b.vehicle_selling_price);
    } else if (sort === "vehicle_selling_price_htl") {
      result = [...result].sort((a, b) => b.vehicle_selling_price - a.vehicle_selling_price);
    } else if (sort === "vehicle_model_year_lth") {
      result = [...result].sort((a, b) => a.vehicle_model_year - b.vehicle_model_year);
    } else if (sort === "vehicle_model_year_htl") {
      result = [...result].sort((a, b) => b.vehicle_model_year - a.vehicle_model_year);
    } else if (sort === "rating_htl") {
      result = [...result].sort((a, b) => b.vehicle_rating - a.vehicle_rating);
    }

    setFilteredData(result);
  }, [dataList, search, filters, sort]);


  return (
    <>
      <Nav />
      <div>
        <SearchSection search={search} setSearch={setSearch} />

        <section className="flex">
          <FilterSection filters={filters} setFilters={setFilters} />

          <div className="flex flex-col w-full bg-primary">
            <div className="flex justify-between items-center">
              <div className="flex items-center p-5">
                <p className="">
                  {filteredData.length} out of {dataList.length} bikes
                </p>
              </div>
              <div>
                <SortSection sort={sort} setSort={setSort} />
              </div>
            </div>

            <div className="p-5 bg-primary">
              <div className="flex justify-center flex-wrap">
                {filteredData.slice(0, visibleCount).map((bike, i) => (
                  <BikeCard key={i} bike={bike} />
                ))}
              </div>

              <div className="flex justify-center">
                {visibleCount < filteredData.length && (
                  <button
                    onClick={() => setVisibleCount((prev) => prev + 9)}
                    className="mt-4 px-4 py-2 bg-white text-secondary border-2 border-secondary rounded-md"
                  >
                    Load More
                  </button>
                )}
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default Buy;

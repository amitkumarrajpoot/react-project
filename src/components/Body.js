import ResturantCard from "./ResturantCard";
import reslist from "../utils/mockData";

const Body = () => {
  return (
    <div className="body">
      <div className="filter">
        <button className="filter-btn">Top Rated Resturant</button>
      </div>
      <div className="rest-container">
        {reslist.map((restaturant) => (
          <ResturantCard key={restaturant.info.id} resData={restaturant} />
        ))}
      </div>
    </div>
  );
};

export default Body;

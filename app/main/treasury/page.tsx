import Categories from "@/components/Categories";
import SearchBar from "@/components/SearchBar";

const Treasury = () => {
  return (
    <div className="treasury">
      <div className="container">
        <div className="treasury-inner pt-8 pb-14">
          <h1 className="hidden">Treasury</h1>
          <div className="treasury-top flex flex-col gap-6">
            <SearchBar />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Treasury;

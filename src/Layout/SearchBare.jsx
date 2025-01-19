import { useDispatch, useSelector } from "react-redux";
import { SearchAction } from "../Redux/Action/SearchAction";

function SearchBare() {
  const stateSearch = useSelector(state => state.search);
  const dispatch = useDispatch();
  
  const handleInputChange = (e) => {
    dispatch(SearchAction(e.target.value));
  };

  return (
    <>
      <input
        placeholder="Search"
        className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#1C160C] focus:outline-0 focus:ring-0 border-none bg-[#F4EFE6] focus:border-none h-full placeholder:text-[#A18249] px-4 rounded-l-none border-l-0 pl-2 text-base font-normal leading-normal"
        value={stateSearch.search}
        onChange={handleInputChange}
      />
    </>
  );
}

export default SearchBare;



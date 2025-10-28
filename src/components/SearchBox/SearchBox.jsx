import s from "./SearchBox.module.css";
import { changeFilter } from "../../redux/filtersSlice";
import { useDispatch, useSelector } from "react-redux";

function SearchBox() {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filter);
  const handleChangeQuery = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div className={s.box}>
      <span>Find contacts by name</span>
      <input
        className={s.input}
        name="search"
        type="text"
        value={filter}
        onChange={handleChangeQuery}
      />
    </div>
  );
}

export default SearchBox
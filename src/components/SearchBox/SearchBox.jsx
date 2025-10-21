import s from "./SearchBox.module.css";

function SearchBox({ value, onChange }) {
  return (
    <div className={s.box}>
      <span>Find contacts by name</span>
      <input
        className={s.input}
        name="search"
        onChange={onChange}
        value={value}
        type="text"
      />
    </div>
  );
}

export default SearchBox
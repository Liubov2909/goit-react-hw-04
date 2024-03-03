import css from "./SearchBar.module.css";
import { IoMdSearch } from "react-icons/io";

const SearchBar = ({ onSearch }) => {
  return (
    <header className={css.header}>
      <form className={css.form} onSubmit={onSearch}>
        <input
          className={css.input}
          autoComplete="off"
          name="search"
          autoFocus
          type="text"
          placeholder="Search images and photos"
        />
        <button type="submit" className={css.button}>
          <IoMdSearch className={css.icon} />
        </button>
      </form>
    </header>
  );
};
export default SearchBar;

import css from "./SearchBar.module.css";
import { IoMdSearch } from "react-icons/io";
import toast from "react-hot-toast";

const SearchBar = ({ onSubmit }) => {
  const handleSearch = (e) => {
    e.preventDefault();
    const searchTerm = e.target.search.value.trim();
    if (!searchTerm) {
      toast.error("Fill in the input field");
      return;
    }
    onSubmit(searchTerm);
  };

  return (
    <header className={css.header}>
      <form className={css.form} onSubmit={handleSearch}>
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

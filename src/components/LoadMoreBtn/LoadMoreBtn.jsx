import css from "./LoadMoreBtn.module.css";

const LoadMoreBtn = ({ loadMoreImages }) => {
  return (
    <button className={css.btn} type="button" onClick={loadMoreImages}>
      Load more
    </button>
  );
};

export default LoadMoreBtn;

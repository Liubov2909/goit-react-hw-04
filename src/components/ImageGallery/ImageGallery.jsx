import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

const ImageGallery = ({ images, openModal }) => {
  return (
    <ul className={css.list}>
      {images.map((image) => (
        <li
          className={css.item}
          key={image.id}
          onClick={() => openModal(image)}
        >
          <ImageCard src={image.urls.small} alt={image.slug} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;

import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import getImages from "./request";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import SearchBar from "./components/SearchBar/SearchBar";
import ErrorMessage from "./components/ErrorMessage /ErrorMessage ";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import Loader from "./components/Loader/Loader";
import ImageModal from "./components/ImageModal/ImageModal";

function App() {
  const [query, setQuery] = useState("");
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [showLoader, setShowLoader] = useState(false);
  const [error, setError] = useState(false);
  const [selectedImageUrl, setSelectedImageUrl] = useState(null);

  useEffect(() => {
    if (query === "") {
      return;
    }

    const addNewImages = async () => {
      try {
        setShowLoader(true);
        setError(false);
        const data = await getImages(query, page);
        if (page === 1) {
          setImages(data);
        } else {
          setImages((prevImages) => [...prevImages, ...data]);
        }
        toast.success("HTTP success!");
      } catch (error) {
        setError(true);
        toast.error("Error fetching images");
      } finally {
        setShowLoader(false);
      }
    };
    addNewImages();
  }, [query, page]);

  function handleQuery(resQuery) {
    setQuery(resQuery);
    setPage(1);
    setError(null);
    setImages([]);
  }

  const handleMoreImages = () => {
    setPage(page + 1);
    setShowLoader(true);
  };

  const openModal = (image) => {
    setSelectedImageUrl(image);
  };

  const closeModal = () => {
    setSelectedImageUrl(null);
  };

  return (
    <>
      <SearchBar onSubmit={handleQuery} />
      {error && <ErrorMessage error={error} />}
      {images.length > 0 && (
        <ImageGallery images={images} openModal={openModal} />
      )}
      {showLoader && <Loader />}
      {images.length > 0 && <LoadMoreBtn loadMoreImages={handleMoreImages} />}
      <Toaster position="top-right" reverseOrder={false} />
      <ImageModal
        isOpen={selectedImageUrl !== null}
        onRequestClose={closeModal}
        imageUrl={selectedImageUrl ? selectedImageUrl.urls.regular : ""}
        imageAlt={selectedImageUrl ? selectedImageUrl.alt : ""}
      />
    </>
  );
}

export default App;

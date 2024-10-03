import { useState, useEffect } from 'react';
import { fetchImages } from '../../services/image-api';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import ImageGallery from '../ImageGallery/ImageGallery';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import Loader from '../Loader/Loader';
import ImageModal from '../ImageModal/ImageModal';



export default function App() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(999);
  const [selectedImage, setSelectedImage] = useState(null);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    if (query === "") {
      return;
    }

      async function getImages() {
        try {
          setLoading(true);
          setError(false);
          const res = await fetchImages(query, page);
          setImages((prevImages) => [...prevImages, ...res.images]);
          setTotalPages(res.totalPages);
        } catch {
          setError(true);
        } finally {
          setLoading(false);
        }
    };

      getImages();
  }, [query, page]);
  
  const handleSearch = (newQuery) => {
    setQuery(newQuery);
    setPage(1);
    setImages([]);
  };

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  const handleClickImage = image => {
    setSelectedImage(image);
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
    setSelectedImage(null);
  };

  return (
    <>
      <SearchBar onSubmit={handleSearch} />
      {images.length > 0 && <ImageGallery images={images} onClickImage={handleClickImage}/>}
      {error && <ErrorMessage />}
      {loading && <Loader />}
      {images.length > 0 && !loading && page < totalPages &&<LoadMoreBtn onClick={handleLoadMore}/>}
      {page >= totalPages && <b>END OF COLLECTION!!!</b>}
      {selectedImage && <ImageModal image={selectedImage} onClose={closeModal} />}
    </>
  )
}


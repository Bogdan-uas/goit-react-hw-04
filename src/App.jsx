import './App.css'
import ImageGallery from './components/ImageGallery/ImageGallery.jsx';
import SearchBar from './components/SearchBar/SearchBar.jsx';
import { fetchGalleryPicturesFromTopic } from "./gallery-api.js";
import ErrorMessage from './components/ErrorMessage/ErrorMessage.jsx';
import { useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";

function App() {
  const [pictures, setPictures] = useState([]);
  const [loading, setLoading] = useState(false);
  const color = useState("#0d6aff");
  const [error, setError] = useState(false);

  const handleSearch = async (topic) => {
    try {
      setPictures([]);
      setError(false);
      setLoading(true);
      const data = await fetchGalleryPicturesFromTopic(topic);
      setPictures(data);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <SearchBar onSubmit={handleSearch} />
      {loading &&
      <ClipLoader
        color={color}
        loading={loading}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
      }
      {error ? <ErrorMessage/> : pictures.length > 0 && <ImageGallery items={pictures} gallery={pictures}/>}
    </>
  )
}

export default App

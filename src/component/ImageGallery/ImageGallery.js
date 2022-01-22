import "./ImageGallery.scss";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";

const ImageGallery = ({ pictures, onClick }) => {
  return (
    <ul className="ImageGallery">
      {pictures.map(({ id, webformatURL, largeImageURL }) => (
        <ImageGalleryItem
          id={id}
          webformatURL={webformatURL}
          largeImageURL={largeImageURL}
          onClick={onClick}
        />
      ))}
    </ul>
  );
};

export default ImageGallery;

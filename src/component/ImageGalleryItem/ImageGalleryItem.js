import "./ImageGalleryItem.scss";

const ImageGalleryItem = ({ largeImageURL, webformatURL, id, onClick }) => {
  return (
    <li key={id} className="ImageGalleryItem">
      <img
        src={webformatURL}
        alt=""
        className="ImageGalleryItem-image "
        onClick={() => onClick(largeImageURL)}
      />
    </li>
  );
};

export default ImageGalleryItem;

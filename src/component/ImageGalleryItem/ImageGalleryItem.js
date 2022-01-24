import "./ImageGalleryItem.scss";

const ImageGalleryItem = ({ largeImageURL, webformatURL, onClick }) => {
  return (
    <li className="ImageGalleryItem">
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

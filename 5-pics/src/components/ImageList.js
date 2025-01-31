import "./ImageList.css";
import ImageShow from "./ImageShow";

function ImageList({ images }) {
  const renderImages = images.map((img) => {
    return <ImageShow image={img} key={img.id} />;
  });

  return <div className="image-list">{renderImages}</div>;
}

export default ImageList;

import "./ImageList.css";
import ImageShow from "./ImageShow/ImageShow";

function ImageList({ images }) {
  const renderedImages = images.map((image, index) => {
    return <ImageShow image={image} key={image.id} />;
  });
  console.log(images);

  return <div className="image-list">{renderedImages}</div>;
}

export default ImageList;

import css from "./ImageGallery.module.css";

import ImageCard from "../ImageCard/ImageCard";


export default function ImageGallery({images, onClickImage}) {
  return (
    <div className={css.container}>
      <ul className={css.list}>
      {images.map(image => (
        <li className={css.item} key={image.id}>
            <ImageCard image={image} onClick={onClickImage}/>
        </li>
      ))}
      </ul>
    </div>
  )
}

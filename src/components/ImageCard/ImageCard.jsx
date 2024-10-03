import css from "./ImageCard.module.css";

export default function ImageCard({image, onClick}) {
  return (
    <>
      <img className={css.image} src={image.urls.small} alt={image.alt_description} onClick={() => onClick(image)}/>
	  </>
  )
}

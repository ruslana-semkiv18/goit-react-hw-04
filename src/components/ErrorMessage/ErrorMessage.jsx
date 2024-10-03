import css from "./ErrorMessage.module.css";

export default function ErrorMessage() {
  return (
    <div className={css.container}>
      <p>404 NOT FOUND</p>
    </div>
  )
}

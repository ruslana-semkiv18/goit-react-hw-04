import css from "./Loader.module.css";

import { ThreeDots } from 'react-loader-spinner'

export default function Loader() {
  return (
    <div className={css.container}>
      <ThreeDots height="80" width="80" color="#4e75ff" />
    </div>
  )
}

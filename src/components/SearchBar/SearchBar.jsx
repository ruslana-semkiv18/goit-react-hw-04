import css from "./SearchBar.module.css";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";


export default function SearchBar({ onSubmit }) {
  const [value, setValue] = useState("");

  const handleInput = (e) => {
    setValue(e.target.value);
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.trim() === "") {
      toast.error("Please enter a search query!");
      return;
    }
    onSubmit(value);
    setValue(""); 
  };

  return (
    <header className={css.container}>
      <Toaster position="top-right" />
      <form onSubmit={handleSubmit} className={css.form}>
        <input
          type="text"
          value={value}
          onChange={handleInput}
          className={css.input}
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button type="submit" className={css.button}>Search</button>
      </form>
    </header>
  )
}

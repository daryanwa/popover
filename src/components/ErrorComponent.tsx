import React from "react";
import style from "./error.module.css";
import { Link } from "react-router-dom";

function ErrorComponent() {
  return (
    <div>
      <span className={style.error}>404</span>
      <Link to="/" className={style.button}>
        BACK TO HOMEPAGE
      </Link>
    </div>
  );
}

export default ErrorComponent;

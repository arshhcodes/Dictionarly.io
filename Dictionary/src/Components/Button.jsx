import classes from "./Button.module.css";
import { useDispatch } from "react-redux";
import { themeActions } from "../store";
export default function Button() {
  const dispatch = useDispatch();
  function themeHandler(e) {
    e.target.checked
      ? dispatch(themeActions.setDarkTheme())
      : dispatch(themeActions.setLightTheme());
  }
  return (
    <div className="-translate-y-2.5">
      <input
        type="checkbox"
        id="switch"
        className="checkbox"
        onChange={themeHandler}
      />
      <label htmlFor="switch" className={classes.toggle}></label>
    </div>
  );
}

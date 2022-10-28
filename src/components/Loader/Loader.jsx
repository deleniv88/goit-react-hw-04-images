
import BeatLoader from "react-spinners/ClipLoader";
import css from '../Loader/Loading.module.css';

const Loader = () => {
  return (
    <div className={css.spinnerContainer}>
      <BeatLoader className={css.loadingSpinner}
        color='red'
        size={150}
        aria-label="Loading spinner"
        data-testid="loader"/>
    </div>
  );
};

export default Loader;


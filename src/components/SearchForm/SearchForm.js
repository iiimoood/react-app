import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useDispatch } from 'react-redux';
import { updateSearchString } from '../../redux/store';

const SearchForm = () => {
  const dispatch = useDispatch();

  return (
    <form className={styles.searchForm}>
      <TextInput placeholder="Search..." />
      <Button
        onClick={(e) => {
          e.preventDefault();
          dispatch(updateSearchString({}));
        }}
      >
        <span className="fa fa-search" />
      </Button>
    </form>
  );
};

export default SearchForm;

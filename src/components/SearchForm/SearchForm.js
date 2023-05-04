import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useDispatch } from 'react-redux';
import {
  updateSearchString,
  getSearchString,
} from '../../redux/searchStringReducerRedux';
import { useState } from 'react';
import { useSelector } from 'react-redux';

const SearchForm = () => {
  const stateSearchString = useSelector(getSearchString);
  const dispatch = useDispatch();
  const [searchString, setSearchString] = useState(stateSearchString);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateSearchString(searchString));
  };

  return (
    <form className={styles.searchForm} onSubmit={handleSubmit}>
      <TextInput
        placeholder="Search..."
        value={searchString}
        onChange={(e) => setSearchString(e.target.value)}
      />
      <Button>
        <span className="fa fa-search" />
      </Button>
    </form>
  );
};

export default SearchForm;

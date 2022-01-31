import { Button } from '@mui/material';
import { useFetchSearchData } from '../hooks/useFetchSearchData';

export const SearchButton = (props) => {
  const { children } = props;
  const { fetchData } = useFetchSearchData();
  const onClickFetchData = () => {
    console.log('onClickFetchData()が実行されました');
    fetchData();
  };

  return (
    <Button color="primary" variant="contained" onClick={onClickFetchData}>
      {children}
    </Button>
  );
};

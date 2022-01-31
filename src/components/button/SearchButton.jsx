import { Button } from '@mui/material';
import { useFetchMovies } from '../hooks/useFetchMovies';

export const SearchButton = (props) => {
  const { children } = props;
  const { results } = useFetchMovies();
  const onCLickEvent = () => {
    console.log('ボタンが押されました');
    console.log(results);
  };

  return (
    <Button color="primary" variant="contained" onClick={onCLickEvent}>
      {children}
    </Button>
  );
};

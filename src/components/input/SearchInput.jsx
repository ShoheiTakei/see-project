import { useFetchSearchData } from '../hooks/useFetchSearchData';

export const SearchInput = () => {
  const { changeInputText } = useFetchSearchData();
  const onChangeText = (event) => {
    console.log('onChangeTextが実効されました');
    changeInputText(event.target.value);
  };
  return (
    <input
      onChange={onChangeText}
      type="search"
      placeholder="映画のタイトルを入力する"
    />
  );
};

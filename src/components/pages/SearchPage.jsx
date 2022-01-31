import styled from 'styled-components';
import media from 'styled-media-query';
import { SearchInput } from '../input/SearchInput';
import { SearchButton } from '../button/SearchButton';
import { ResultWrapper } from '../wrapper/ResultWrapper';

export const SearchPage = () => {
  return (
    <SearchPageWrapper>
      <SearchInput />
      <SearchButton>検索</SearchButton>
      <ResultWrapper />
    </SearchPageWrapper>
  );
};

const SearchPageWrapper = styled.div`
  font-size: 3rem;
  text-align: center;
  p,
  Button {
    margin-top: 3rem;
  }
  Button {
    width: 100px;
    font-size: 2rem;
  }
  input {
    border: 2px solid #ffff;
    border-radius: 0.67rem;
    margin-top: 3rem;
    ::placeholder {
      text-align: center;
      line-height: normal;
      font-size: 2rem;
      font-weight: bold;
    }
  }
     .resultWrapper {
    display: flex;
    overflow-y: hidden;
    overflow-x: scroll;
    &::-webkit-scrollbar {
      display: none;
    }
  ${media.lessThan('medium')`
    /* screen width is less than 768px (medium) */
    background: red;

      img {
      width: 40rem;
      max-height: 45rem;
      margin: 5rem;
      object-fit: contain;
      transition: transform 450ms;
      &:hover {
        transform: scale(1.08);
      }
    }
  }
  `}

  ${media.between('medium', 'large')`
    /* screen width is between 768px (medium) and 1170px (large) */
    background: green;
 
    img {
      width: 60rem;
      max-height: 65rem;
      margin: 5rem;
      object-fit: contain;
      transition: transform 450ms;
      &:hover {
        transform: scale(1.08);
      }
    }
  }
  `}

  ${media.greaterThan('large')`
    /* screen width is greater than 1170px (large) */
    background: blue;
  
    img {
      width: 60rem;
      max-height: 65rem;
      margin: 5rem;
      object-fit: contain;
      transition: transform 450ms;
      &:hover {
        transform: scale(1.08);
      }
    }
  }
  `}
`;

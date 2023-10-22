import React from 'react'
import styled from 'styled-components';
// 
import search from '../../assets/Inputs/search.svg';

const Search = ({margin}) => {
  return (
    <SearchBox style={{margin: margin ? margin : ""}}>
        <img src={search} alt="" />
        <input type="text" placeholder='Search' />
    </SearchBox>
  )
}

export default Search;

const SearchBox = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    border-radius: 8px;
    border: 1px solid #D0D5DD;
    background: #FFF;
    box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
    width: 300px;
    padding: 8.5px 10px;
    img{
        width: 15px;
    }
    input{
        width: 100%;
        height: 100%;
        border: none;
        outline: none;
        color: #333;
        &::placeholder{
            color: #667085;
            font-size: 13px;
            font-weight: 400;
        }
    }
`;

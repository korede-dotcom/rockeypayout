import React from 'react'
import styled from 'styled-components';
import Search from './Inputs/Search';

const FlexItems = ({text}) => {
  return (
    <FlexItemsBox>
        <div className="left">
            <p>{text}</p>
        </div>
        <div className="right">
            <Search />
        </div>
    </FlexItemsBox>
  )
}

export default FlexItems;

const FlexItemsBox = styled.div`
    width: 100%;
    padding: 20px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    // margin-bottom: 10px;
    .left{
        p{
            color: #090814;
            font-size: 18px;
            font-weight: 400;
        }
    }
`;
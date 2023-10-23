import React, {useState, useEffect} from 'react'
import Header from './Header';
import Sidebar from './Sidebar';
// 
import styled from 'styled-components';

const Layout = ({children}) => {
  const [activeTab, setActiveTab] = useState('Gateway');
  // const locate = window.location.pathname.split("/", );
  // const locate = window.location.pathname.split('/').reduce((acc, pathPart) => {
  //   if (pathPart === 'security') {
  //     return `${acc} `;
  //   } else {
  //     return `${acc}/${pathPart}`;
  //   }
  // }, '').trim();
  const parts = window.location.pathname.split('/').filter((part) => part !== 'security');
  // const locate = parts.map(part => part.replace(/-/g, ' ')).join(' ');
  const locate = parts
  .map(part => part.replace(/-/g, ' '))
  .map(part => part.charAt(0).toLocaleUpperCase() + part.slice(1))
  .join(' ');
  const [id, setId] = useState();
  useEffect(() => {

  }, [activeTab])
  // const [selectedCategory, setSelectedCategory] = useState('Gateway');
  // useEffect(() => {
  //   console.log("activeTab:", activeTab)
  // },[activeTab])

  return (
    // <LayoutContainer>
    //     <Sidebar selectedCategory="Gateway" />
    //     <Main>
    //         <Header />
    //     </Main>
    // </LayoutContainer>
    <LayoutContainer>
    <Sidebar selectedCategory={activeTab} />
    <Main>
      <Header setPropsPassed={setActiveTab} />
      <Content>
        <Path>
          <span>pages</span>
          <span>/</span>
          <span>{activeTab}</span>
          <span>/</span>
          <span className='bold'>{locate}</span>
        </Path>
        {children}
      </Content>
    </Main>
  </LayoutContainer>
  
  )
}

export default Layout;

const LayoutContainer = styled.div`
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    display: flex;
`;

const Main = styled.main`
    width: calc(100vw - 200px);
    display: flex;
    flex-direction: column;
`;

const Content = styled.div`
  height: calc(100% - 85px);
  padding: 15px 25px;
  background: #FCFCFC;
  overflow-y: auto;
    border: 1px solid #EAECF0;
    scrollbar-gutter: stable;
  &::-webkit-scrollbar {
    display: none;
  }

`;

const Path = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 25px;
  span{
    color: #999;
    font-size: 12px;
    font-weight: 300;
  }
  .bold{
    color: #333;
    font-weight: 400;
    text-transform: capitalize;
  }
`;
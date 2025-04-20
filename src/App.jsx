import { useState } from 'react'
import Header from './components/Header'
import SearchBar from './components/SearchBar'
import FoodList from './components/FoodList';
import FoodDetails from './components/FoodDetails';
import Container from './components/Container';
import InnerContainer from './components/InnerContainer';

import './App.css';

function App() {
  const [content, setContent] = useState([]);

  const [id,setId] = useState("");

  return (
    <>
      <Header />
      <SearchBar setContent={setContent}/>
      <Container>
        <InnerContainer>
          <FoodList content={content} setId={setId}/>
        </InnerContainer>
        <InnerContainer>
          <FoodDetails id = {id} />
        </InnerContainer>
      </Container>
      {console.log(id)}
    </>
  )
}

export default App

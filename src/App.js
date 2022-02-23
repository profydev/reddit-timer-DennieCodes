import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import GlobalStyles from './components/GlobalStyles';

import Header from './components/Header';
import Footer from './components/Footer';
import Landing from './components/Landing';
import Search from './components/Search';

const AppContainer = styled.div``;
const Main = styled.main``;

function App() {
  return (
    <Router>
      <GlobalStyles />
      <AppContainer>
        <Header />
        <Main>
          <Routes>
            <Route exact path="/" element={<Landing />} />
            <Route exact path="/search" element={<Search />} />
          </Routes>
        </Main>
        <Footer />
      </AppContainer>
    </Router>
  );
}

export default App;

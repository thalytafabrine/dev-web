import React, { Component } from 'react';
import NavBar from '../components/NavBar/NavBar';
import SubjectsList from '../components/Subject/SubjectsList';

class HomePage extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <SubjectsList/>
      </div>
    );
  }
}

export default HomePage;

import React from 'react';
import { Container } from '@material-ui/core';
import HeroSectionImageRight from './components/HeroSectionImageRight';
import HeroSectionImageLeft from './components/HeroSectionImageLeft';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './Data';

function Home() {
  return (
    <div className='Home'>
      <Container>
        <HeroSectionImageRight {...homeObjOne} />
        <HeroSectionImageLeft {...homeObjTwo} />
        <HeroSectionImageRight {...homeObjThree} />
        <HeroSectionImageLeft {...homeObjFour} />
      </Container>
    </div>
  );
}

export default Home;

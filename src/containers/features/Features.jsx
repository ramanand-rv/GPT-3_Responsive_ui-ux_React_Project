import React from 'react';
import './features.css';
import { Feature } from '../../components';

const featureData = [
  {
    title: 'Improving end distrusts instantly',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem nam facere ad, nihil laborum maiores rerum autem beatae repellat labore dolor deleniti iste.'

  },
  {
    title: 'Become the tended active',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem nam facere ad, nihil laborum maiores rerum autem beatae repellat labore dolor deleniti iste.'

  },
  {
    title: 'Message or am nothing',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem nam facere ad, nihil laborum maiores rerum autem beatae repellat labore dolor deleniti iste.'

  },
  {
    title: 'Really boy law county',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem nam facere ad, nihil laborum maiores rerum autem beatae repellat labore dolor deleniti iste.'

  }
]
const Features = ({title, text}) => {
  return (
    <div className="gpt3__features section__padding" id='features'>
      <div className="gpt3__features-heading">
        <h1 className="gradient__text">
        The Future is Now and You Just Need To Realize It. Step into Future Today & Make it Happen.
        </h1>
        <p>Request Early Access to Get Started</p>
      </div>
      <div className="gpt3__feature-container">
        {featureData.map((item, index) =>{
          <Feature />
        })}

      </div>
    </div>
    )
}

export default Features
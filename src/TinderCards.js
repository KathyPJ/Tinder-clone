import React, { useEffect, useState} from 'react';
import "./TinderCards.css";
import TinderCard from 'react-tinder-card';
//import { SwipeableDrawer } from '@material-ui/core';
import axios from './axios';

function TInderCards() {
  // const [people, setPeople] = useState([
  //   {
  //       name: 'Elon Musk',
  //       url: 'https://en.wikipedia.org/wiki/Elon_Musk#/media/File:Elon_Musk_Royal_Society_(crop2).jpg'
  //   },
  //   {
  //     name: 'Jeff Bezos',
  //     url: 'https://en.wikipedia.org/wiki/Jeff_Bezos#/media/File:Jeff_Bezos_at_Amazon_Spheres_Grand_Opening_in_Seattle_-_2018_(39074799225)_(cropped).jpg'
  // }
  // ]);

  const [people, setPeople] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const req = await axios.get('/tinder/cards');

      setPeople(req.data);
    }
    fetchData();
  }, []);

  const swiped = (direction, nameToDelete) => {
    console.log("removing: " + nameToDelete);
    //setLastDirection(direction);
  }

  const outOfFrame = (name) => {
    console.log(name + " left the screen!");
  }

  //const setLastDirection

  return (
    <div className='tinderCards'>
        <div className='tinderCards__cardContainer'>
          {people.map((person) => (
            <TinderCard
              className='swipe'
              key={person.name}
              preventSwipe={['up', 'down']}
              onSwipe={(dir) => swiped(dir, person.name)}
              onCardLeftScreen={() => outOfFrame(person.name)}
            >
              <div
                style={{ backgroundImage: "url(" + person.imgUrl + ")" }}
                className="card"
              >
                <h3>{person.name}</h3>
              </div>
            </TinderCard>
          ))}
        </div>
    </div>
  )
}

export default TInderCards
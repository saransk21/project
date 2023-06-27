import './episodes.css'
import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { useParams } from 'react-router-dom';

const GET_CHARACTER = gql`
  query GetCharacter($id: ID!) {
    character(id: $id) {
      id
      name
      species
      status
      origin {
        name
      }
      location {
        name
      }
      episode {
        id
        name
        air_date
      }
    }
  }
`;

function Episodes() {
    const {id}=useParams();
  const { loading, error, data } = useQuery(GET_CHARACTER, {
    variables: { id },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const character = data.character;

  return (
    <div className='con'>
        <div className='contain'>
      <h1>Episodes List:</h1>

      <h2>Name : {character.name}</h2>

        {
            character.episode.map((item)=>
            <div>
            <h4>{item.id}, Episode Name : {item.name}</h4>
            <p>Air-date : {item.air_date}</p>
            </div> )
        }
    </div>
    </div>
  );
}

export default Episodes;

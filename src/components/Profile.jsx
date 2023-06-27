import React from "react";
import { useQuery, gql } from "@apollo/client";
import "./profile.css";
import { Link } from "react-router-dom";

const GET_CHARACTERS = gql`
  query {
    characters {
      results {
        id
        name
        status
        species
        type
        gender
        origin {
          name
        }
        location {
          name
        }
        image
        episode {
          name
          air_date
        }
      }
    }
  }
`;

const Profile = () => {
  const { loading, error, data } = useQuery(GET_CHARACTERS);
  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  const { results: characters } = data.characters;

  return (
    <div>
      <h1>Rick and Morty Characters</h1>
      <div className="container">
        {characters.map((character) => (

          <div key={character.id} className="profile">
            <Link to={`/${character.id}`} className="name">
               <h2 >{character.name}</h2>
            </Link>
            
            <p>Status: {character.status}</p>
            <p>Species: {character.species}</p>
            <p>Gender: {character.gender}</p>
            <p>Origin: {character.origin.name}</p>
            <p>Location: {character.location.name}</p>
            <img src={character.image} alt={character.name} />
            

          </div>
        ))}
      </div>
    </div>
  );
};

export default Profile;

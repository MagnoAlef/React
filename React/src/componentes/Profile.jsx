/**
 * Em um novo projeto React com Vite crie um componente chamado “Profile” que seja capaz de aceitar as props avatar,
 * name, bio, email, phone, githubUrl, linkedinUrl e twitterUrl. O componente Profile deverá então renderizar um cartão
 * de perfil de acordo com a imagem abaixo.

Obs.: os estilos não precisam ficar exatamente iguais, esses apenas são os estilos usados na resolução,
 mas é um desafio extra de CSS caso você queira tentar alcançar a maior precisão possível.
 */


import PropTypes from 'prop-types';
import styles from '../styles/styles.module.css'
import { useState } from 'react';
//import Title from '../Title/Title';

export const Profile = ({title , posterImage , description , phone, email , gitHubUrl}) => {

  //Uso do State
  // [valor,funcao que modificar o valor]
const [followText, setFollowText] = useState('Follow')

  function handleClick(){
    alert('Você agora esta seguindo')
    setFollowText('Following') 
  }
  return (
  <div className={styles.container}>
    <img className={styles.avatar}  src={posterImage} alt="imagens" />
    {/* <Title title={title}/> */}
    {/* //Exemplo de uso do children do componente Title 
    <Title>
      <span>{title}</span>
      <button>Follow</button>
    </Title> */}
    <button className={styles.followButton} onClick={handleClick}>{followText}</button> {/*  // Evento em React onClick */}
    <h2>{title}</h2>
    <div>{description}</div>
    <div>{phone}</div>
    <div>{email}</div>
    <div className={styles.links}>
      <a href={gitHubUrl} target='_blank' rel="noreferrer">GitHub</a>
    </div > 
        <link rel="stylesheet" href="https://github.com/MagnoAlef" />
  </div>
  );
};

Profile.propTypes = {
  title: PropTypes.string.isRequired,
  posterImage: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  phone: PropTypes.number.isRequired,
  email: PropTypes.string.isRequired,
  gitHubUrl:PropTypes.string.isRequired,
};

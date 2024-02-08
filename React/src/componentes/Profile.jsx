/**
 * Em um novo projeto React com Vite crie um componente chamado “Profile” que seja capaz de aceitar as props avatar,
 * name, bio, email, phone, githubUrl, linkedinUrl e twitterUrl. O componente Profile deverá então renderizar um cartão
 * de perfil de acordo com a imagem abaixo.

Obs.: os estilos não precisam ficar exatamente iguais, esses apenas são os estilos usados na resolução,
 mas é um desafio extra de CSS caso você queira tentar alcançar a maior precisão possível.
 */


import PropTypes from 'prop-types';

export const Profile = ({title , posterImage , description , phone, email}) => {
  return (
  <div>
     <button >
        <link rel="stylesheet" href="https://github.com/MagnoAlef" />
    </button>
    <img style={{borderRadius:25 , width: 50 , height:50}} src={posterImage} alt="imagens" />
    <br />
    <span>{title}</span>
    <br />
    <span>{description}</span>
    <br />
    <span>{phone}</span>
    <br />
    <span>
        {email}
    </span>
   
  </div>
  );
};

Profile.propTypes = {
  title: PropTypes.string.isRequired,
  posterImage: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  phone: PropTypes.number.isRequired,
  email: PropTypes.string.isRequired,
};

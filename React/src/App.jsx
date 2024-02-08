
// import {Card} from './componentes/Card'
// import image from './assets/star.jpg';
// import esbPoster from './assets/esb-poster.jpg'
import magno from './assets/magno.jpeg'
import { Profile } from './componentes/Profile'


export default function App() {
  return (
<> 
  {/* <Card title = 'Novo titulo do card' posterImage ={image}  />
  <Card title= 'testando as props' posterImage ={esbPoster}/> */}
  <Profile title = 'Magno'  posterImage = { magno}  description = 'Desenvolvedor front-end'  phone = {31973286276} email = 'magno@gmail.com'  /> 
  <Profile title = 'Juliana'  posterImage = { magno}  description = 'Desenvolvedor back-end'  phone = {31973286276} email = 'juliana@gmail.com'  /> 
</>
  
  )
}



import {Card} from './componentes/Card'
import image from './assets/star.jpg';
import esbPoster from './assets/esb-poster.jpg'


export default function App() {
  return (
<> 
  <Card title = 'Novo titulo do card' posterImage ={image}  />
  <Card title= 'testando as props' posterImage ={esbPoster}/>
</>
  
  )
}


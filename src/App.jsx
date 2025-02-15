import './App.css'
import NavBar from './Components/NavBar/NavBar';
import Banner from './Components/Banner/Banner';
import RowPost from './Components/RowPost/RowPost';

import {action,originals,romantic,documentary,comedy,horror} from './Components/Urls/Urls';


function App(){
  return(
    <div className='App'>
      
      <NavBar/>
      <Banner/>
      <RowPost title="Netflix Origins" url={originals}/>
      <RowPost title="Action" ismall url={action}/>
      <RowPost title="Comedy" ismall url={comedy}/>
      <RowPost title="Romantic" ismall url={romantic}/>
      <RowPost title="Horror" ismall url={horror}/>
      <RowPost title="Documentary" ismall url={documentary}/> 
      
    </div>
  )
}

export default App;
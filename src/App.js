import img1 from './assets/img.webp'
import img2 from './assets/img2.webp'
import searchIcon from './assets/searchicon.png'
import logo from './assets/logo.png'
function App(){
  return (
    <div className="App">
    <header>
       <img class="imgLogo" src={logo}/>
       <div  class="searchBar"> 
           <input/>
           <img src={searchIcon}/>
       </div>
       <div class="headerWriting">
           Mettre mon logement sur AirBnB
       </div>
     </header>
     <section class="cardsContainer">
         <div class="card">
             <i class="fa-light fa fa-heart"></i>
             <img src={img1}/>
             <div>Texte</div>
         </div>
         <div class="card">
             <img src={img2}/>
             <div>Texte</div>
         </div>
         <div class="card">
             <img src={img1}/>
             <div>Texte</div>
         </div>
     </section>
   </div>
 );
  }
export default App;

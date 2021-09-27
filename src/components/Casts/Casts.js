import React from 'react';
import './Casts.css';
import Cast from '../Cast/Cast'

import { useEffect, useState } from 'react';



// using UseState.................................

const Casts = () => {
     const [casts, setcasts] = useState([]);
     const [cart,setCart] = useState([]);
     const [name,setName] = useState([]);
  // gathering data from local JSON file...................................
  useEffect(() => {
    fetch('./fakeData.JSON')
    .then(res => res.json())
    .then(data =>setcasts(data));
  }, [])

     const handleCast = (cast) =>{
       const newCart = [...cart, cast];
       setCart(newCart);
      
     }

    const handleName = (cast) =>{
       const newName = [...name, cast];
       setName(newName);
      
     }




// creating loop for cart section .........................................
      let total = 0;
      let names = " ";
      
      
       for(const cast of cart){
         total = total + cast.salary;
         names = names + cast.name + "," + "  ";
        
    
}
       
// main area code..............................................................
    return (
      <div className="motherDiv">
         <div >
            <h1>Amazing Cast Of<span className="tag"> Breaking Bad</span> </h1>
            <p className="motherDivP">Make Another Series with these Actors | Your Total Budget is <span className="tag">100 Million</span></p>

             <div className="cartBox"> 
             
             <div className="casts">
             {
// mapping data & cart area code ........................................
              casts.map(cast => <Cast 
                  key={cast.key} 
                  cast={cast}
                  handleCast={handleCast}
                  handleName={handleName}
                  
              ></Cast>)
              
              }
            </div>
            
            <div className="signing">
              <h4 className="signingh4">Cast Them For Another Series</h4>

              <h4 className="signingh5"><span className="tag">Cast Added : </span>{cart.length}</h4>
              
              <h4 className="signingh5"><span className="tag">Total Budget : </span> ${total} </h4>

              <h4 className="signingh5"><span className="tag">List Of Actors : </span> {names} </h4>
              
              
            </div>
             </div>
            
           
        </div>
      </div>
        
        
    );
};

export default Casts;
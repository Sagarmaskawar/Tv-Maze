import React from 'react';
import { useState } from 'react';





const Searchbar = () => {
    
    
    
    
    const[search, setSearch] = useState("");
    const[person,setPerson]=useState([]);
    const[show,setShow]=useState([]);
       
    
    
    
        const[val, setVal] = useState("Select Type First");
        
        const handle=(e)=>{
            
            if(e.target.value==="Actor"){
                setVal(" Search By Actor");
                setShow([]);
                
            }
            if(e.target.value==="shows"){
                setVal(" Search By Show");
                setPerson([]);
                
                
            }
          
        }  
 
        const handlechange=(e)=>{
            setSearch(e.target.value);
            e.preventDefault();
            if(search.trim()){
                if(val===" Search By Show"){
                    
                 fetch(`https://api.tvmaze.com/search/shows?q=${search}`)
                 .then(response=>response.json())
                 .then(setShow);
                 
                    
                }
                
                if(val===" Search By Actor"){
                    
                    
                    fetch(`https://api.tvmaze.com/search/people?q=${search}`)
                 .then(response=>response.json())
                 .then(setPerson);
                    
                }
                
            }
        }
        
        
        
   




   
  return <div>
         <div className='searchbar'>
       
          
                
               
            
                <form className='sform'>
                <label className='rad'> <input  type="radio" name="sele" value="Actor" onClick={handle}/>Actor{""} </label>
                    <label className='rad'> <input   type="radio"  name="sele" value="shows" onClick={handle}/>Shows{''} </label><br></br>
                    <input  className="in" type="text" placeholder={val} value={search} onChange={handlechange}/>
                    <button className='but' >Search</button>
                </form>
               
              
            

            
                
  </div>
  <div className='retval'>
                    <div className='display' >
                        
                        
                    {person.map((person) => (
                        <div className='dis'>
                            <div key={person.id}>
                            <img className='disimage'
                                src={
                                person.person.image
                                    ? person.person.image.medium
                                    : "https://tse4.mm.bing.net/th?id=OIP.psX1HEXtDs2423zvzDsJOAHaJ4&pid=Api&P=0&w=139&h=185"
                                }
                                alt="logo"
                            />
                            <br/>
                            <h3>{person.person.name}</h3> 
                            </div>
                        </div>
                       ))}
      
      {show.map((show) => (
        <div key={show.show.id}>
          <img
            src={
              show.show.image
                ? show.show.image.medium
                : "https://tse2.mm.bing.net/th?id=OIP.avxhtQqr5FoubGjq4sIXugHaEo&pid=Api&P=0&w=262&h=163"
            }
            alt="logo"
          />
           <h3>{show.show.name}</h3>
        </div>
      ))}
    </div>
 </div>

  </div>;
};

export default Searchbar;

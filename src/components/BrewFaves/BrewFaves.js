import React from 'react'
import siteIcon from '../../assets/weblink-icon.png'
import unFaveButton from '../../assets/active-fave.png'
import BreweryDetail from '../BreweryDetails/BreweryDetail'

function BrewFaves({id ,faveBreweries, unFaveBrewery}) {
  const displaySavedFaves = faveBreweries.map(brewery => {
    console.log('brewery?', brewery.name)
    const removeFromSaves = () => {
      unFaveBrewery(brewery)
    }
    return (
      <div key={brewery.id}>
        <h1>{brewery.name}</h1>
        <p>{brewery.phone}</p>
        <p>{brewery.street}</p>
        <p>{brewery.city}, {brewery.state}</p>
        <a href={brewery.website_url} alt={brewery.website_url}><img src={siteIcon}/></a>
        <button onClick={removeFromSaves}><img src={unFaveButton} alt='Remove from Faves'/></button>
      </div>
    )
    
  })

  return (
   <div className='saved-faves' key={id}>
     {displaySavedFaves.length > 0 ? displaySavedFaves : <p>You haven't saved anything!</p>}
  </div>
  )
}

export default BrewFaves


// export default function BrewFaves({id, name, addFaveBreweries, faveBreweries, unFaveBrewery}) {
//   console.log('please be nice!', faveBreweries)

//   const [isFaved, setIsFaved] = useState(false)
//   const [networkError, setNetworkError] = useState(false)
//   const [savedFaves, setSavedFaves] = useState([])
//   const url = useLocation()

//   useEffect(() => {
//     if(faveBreweries.includes(id)){ 
//       setIsFaved(true)
//       // toggleButton()
//     }
//   },[])
    
//   console.log('brewsbyZip', savedFaves)
//   const deleteFromFaves = faveBreweries.filter(brewery => brewery.id !== id)
//   unFaveBrewery(deleteFromFaves)
  


//       deleteIdea = (id) => {
//         console.log(id);
//         const filteredSaves = faveBreweries.filter(idea => idea.id != id);
    
//         this.setState({ ideas: filteredIdeas });
//       }
    
//   console.log('faveBreweries', faveBreweries)
//   console.log('oneBrewery', oneBrewery)
  
//   const saveFaveBrewery = () => {
//     if(!isFaved) {
//       addFaveBreweries(oneBrewery)
//       setIsFaved(true)
//       setToggleButton(unFaveButton)
//     } else {
//       unFaveBrewery(oneBrewery)
//       setIsFaved(false)
//       setToggleButton(faveButton)
//     }
//   }

//   return (
//     <>
//       <div className='brew-details' key={id}>
//         <h1>{name}</h1>
//         <p>{phone}</p>
//         <p>{street}</p>
//         <p>{city}, {state}</p>
//         <a href={link} alt={link}><img src={siteIcon}/></a>
//         <button onClick={saveFaveBrewery}>  
//           {url.pathname === `/breweries/${zipCode}` 
//             ? <img src={toggleButton} alt='Save to Faves'/>
//             : <img src={toggleButton} alt='Remove from Faves'/>}
//         </button>
//       </div>
//     </>
//   )
// }

  // const [oneBrewery, setOneBrewery] = useState
  // return (
  //   <div className='fave-breweries'>
  //         <>
  //           <div className='brew-details'>
  //             {faveBreweries.length > 0 
  //             ? <div>
  //                 <h1>NAME!!!!{name}</h1>
  //               </div>
  //             : <p>You haven't favorited anything!</p>}
  //           </div>
  //         </>
  //       </div>
  //   )
  // }
  // const displayFaveBreweries = faveBreweries.m(brewery => {console.log('justOne', brewery))
  //     console.log('anObject', displayFaveBreweries) 
      //         return <BreweryDetail 
      //           id={brewery.id}
      //           key={brewery.id}
      //           name={brewery.name}
      //           phone={brewery.phone}
  //           street={brewery.street}
  //           city={brewery.city} 
  //           state={brewery.state}
  //           link={brewery.website_url}
  //           // zipCode={zipCode}
  //           addFaveBreweries={addFaveBreweries}
  //           unFaveBrewery={unFaveBrewery}
  //           faveBreweries={faveBreweries}
  //         />
  //       }
  // })  
  
  // console.log ('this is not happening', displayFaveBreweries)
  
  //     }
    // return displayFaveBreweries
  // })
  // console.log('what is being passed', name)

//

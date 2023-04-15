import { restaurantList } from "./config";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
function filterData(searchText,restaurants)
{
 return  restaurants.filter((restaurant)=>restaurant.data.name.includes(searchText))
}


const Body = () => {
  const[restaurants,setRstaurants]=useState(restaurantList)

  //creating local variable in java script
  // let searchText="KFC";

  // searchText is a local state variable
  // creating local state variable in react using useState Hook
  const [searchText,setSerchText]=useState("");
  // const[serchClicked,setSearchClicked]=useState("false");
  //above useState is used to create state 
  //variables and it returns an array having 1st item as variable name and 
  //2nd item is function to update state variable
  //give default value inside useStae("KFC")

  return (
    <>
      <div className="search-container">
    
{/* Note 1.this input tag is not a normal inputb tag 
 2.Every component in React maintains a state 
 and we can put all the variables into state
 every time we have to create some local variable
  which we use state in it 
1.What is state??
2.What is Hook??
Hooks are nothing but kind of 
normal java sript function
one of the most important hook function is useStae 
which we get from react and is witten 
by facebook developers
wecan create our own custom hook as well
useState is a function to create state variables
this function returns a array and 1st
 avriable of this array is variable name
3.what is useState??
  */}
        <input
          type="text"
          className="search-input"
          placeholder="Search"

          value={searchText}
          onChange={(e)=>{
            //searchText=e.target.value;

            //e.target.value=>whatever I write in input
            setSerchText(e.target.value)
          }}
          
        />

{/* <h1>{serchClicked}</h1>  */}

        <button className="search-btn" onClick={()=>{
       //need to filter the data
       const data=filterData(searchText,restaurants);
       //updatethe stae-restaurants
          setRstaurants(data);
        }}>Search</button>
      </div>

      <div className="restaurant-list">
        {restaurants.map(function (x) {
          return <RestaurantCard {...x.data} key={x.data.id} />;
        })}

        {/* <RestaurantCard {...restaurantList[0].data}/>
        <RestaurantCard {...restaurantList[1].data}/>
        <RestaurantCard {...restaurantList[2].data}/>
         */}
      </div>
    </>
  );
};
export default Body;

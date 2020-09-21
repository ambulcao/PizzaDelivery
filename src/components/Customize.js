import React from 'react';
import Cheese from "../assets/BaseCheese.png";
import Base from "../assets/PizzaBase.png";
import Olive from "../assets/Olive.png";
import Pineapple from "../assets/Pineapple.png";
import Mushroom from "../assets/Mushroom.png";
import Basil from "../assets/Basil.png";
import Tomato from "../assets/Tomato.png";

export default function Customize({ ingredients, setIngredients }) {
  const onChange = (event, name) => {
    //console.log(localStorage);
    let newIngredients = JSON.parse(JSON.stringify(ingredients));
    newIngredients[name] = event;
    setIngredients(newIngredients);
    localStorage.setItem("ingredients", JSON.stringify(newIngredients));
  };
  //const changeIngredients = (name) => {
  //  let newIngredients = JSON.parse(JSON.stringify(ingredients)); 
    // Toggle That Ingredient  25:16 
  //  newIngredients[name] = !newIngredients[name]
  //  setIngredients(newIngredients);
  
  
  return (
    <div style= {{ display: "flex"}}>
       <div style={{ border: "2px solid black", flex: 1 }}>Image
        <div style={{maxHeight:500, maxWidth: 500, position: "relative" }}>
          <img src={Cheese} alt="Pizza Base" height="100%" width= "100%" className="ingredients" />
          <img src={Olive} alt="Pizza Base" height="100%" width= "100%" className="ingredients" />
          <img src={Pineapple} alt="Pizza Base" height="100%" width= "100%" className="ingredients" />
          <img src={Mushroom} alt="Pizza Base" height="100%" width= "100%" className="ingredients" />
          <img src={Basil} alt="Pizza Base" height="100%" width= "100%" className="ingredients" />
          <img src={Tomato} alt="Pizza Base" height="100%" width= "100%" className="ingredients" />
          <img src={Base} alt="Pizza Base" height="100%" width= "100%" />
        </div>
      </div>
      <div style={{ border: "2px solid black", flex: 1 }}>
        <label class="container-checkbox">
          Pineapple
          <input
            type="checkbox"
            checked={ingredients["pineapple"]}
            onChange={(event) => 
              onChange(event.currentTarget.checked, "pineapple")
            } 
          />
        <span class="checkmark"></span>
        </label>
        <label class="container-checkbox">
          Basil
          <input
            type="checkbox"
            checked={ingredients["basil"]}
            onChange={(event) => 
              onChange(event.currentTarget.checked, "basil")
            } 
          />
        <span class="checkmark"></span>
        </label>
        <label class="container-checkbox">
          Olive
          <input
            type="checkbox"
            checked={ingredients["olive"]}
            onChange={(event) => 
              onChange(event.currentTarget.checked, "olive")
            } 
          />
        <span class="checkmark"></span>
        </label>
        <label class="container-checkbox">
          Tomato
          <input
            type="checkbox"
            checked={ingredients["tomato"]}
            onChange={(event) => 
              onChange(event.currentTarget.checked, "tomato")
            } 
          />
        <span class="checkmark"></span>
        </label>
        <label class="container-checkbox">
          Mushroom
          <input
            type="checkbox"
            checked={ingredients["mushroom"]}
            onChange={(event) => 
              onChange(event.currentTarget.checked, "mushroom")
            } 
          />
        <span class="checkmark"></span>
        </label>
        <label class="container-checkbox">
          Cheese
          <input
            type="checkbox"
            checked={ingredients["cheese"]}
            onChange={(event) => 
              onChange(event.currentTarget.checked, "cheese")
            } 
          />
        <span class="checkmark"></span>
        </label>
      </div>
    </div>
  );
}
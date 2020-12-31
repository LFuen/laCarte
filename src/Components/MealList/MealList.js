import React, { Component } from "react";
import LaCarteContext from "../../context/LaCarteContext";
import { Link } from "react-router-dom";
import "./MealList.css";

class MealList extends Component {
  static contextType = LaCarteContext;

  render() {
    const { meals } = this.context;
    return (
      <div className="mealList">
        {meals.map((meal) => {
          return (
            <Link to={`/meals/${meal.id}`} key={meal.id}>
              <div className="polaroid">
                <span title="Pick Me!">
                  <img
                    className="chefMoji"
                    alt={meal.meal_name}
                    src={meal.img_url}
                  />
                </span>
                <div className="container">{<p>{meal.meal_name}</p>}</div>
              </div>
            </Link>
          );
        })}
      </div>
    );
  }
}

export default MealList;

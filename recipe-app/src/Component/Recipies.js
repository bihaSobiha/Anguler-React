import React from 'react';
import { Link } from 'react-router-dom';

const Recipes = props => (
    <div className="container">
        <div className="row">
            {props.recipes.map((abc) => {
                return (
                    <div key={abc.recipe_id} className="col-md-4">
                        <div className="recipe__box">
                            <img className="recipe__box-img" src={abc.image_url} alt={abc.title} />

                            <div className="recipe__text">
                                <h5 className="recipes__title">{abc.title.length < 20 ? `${abc.title}` : `${abc.title.substring(0, 25)}...`}</h5>
                                <p className="recipes__subtitle">Publisher:<span>{abc.publisher}</span></p>
                            </div>
                            <button className="recipe__button">
                                <Link to={{
                                    pathname: `/recipe/${abc.recipe_id}`,
                                    state: { recipe: abc.title }
                                }}>View Recipe</Link>
                            </button>
                        </div>
                    </div>
                )
            })}
        </div>
    </div>
);

export default Recipes;
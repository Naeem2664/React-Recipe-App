import { useState } from "react";
import Loading from "../Loading/Loading";
import { BsSearch } from "react-icons/bs";
import axios from "axios";

function Recipe_Listing() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState();
  const [limit, setLimit] = useState();

  const YOUR_APP_ID = "611fcec1";
  const YOUR_APP_KEY = "fac2e362edd9d2acbefcd30ae1266ecd";
  const url = `https://api.edamam.com/search?q=${query}&
  app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}
  &from=0&to=${limit}&health=alcohol-free`;

  const getData = async () => {
    const response = await axios.get(url);

    setRecipes(response.data.hits);
    console.log(recipes);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getData();
  };
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="container mt-5 mb-5 recipe-page p-3">
          <div className="row">
            <div className="col mt-5 mb-5 m-auto ">
              <h3 className="text-center m-4">
                Search Your Favorite Recipe Here!
              </h3>
              <form
                action=""
                className="text-center form-group m-auto form"
                style={{ maxWidth: "360px" }}
                onSubmit={handleSubmit}
              >
                <input
                  type="text"
                  placeholder="eg, chicken, fruits "
                  className="p-2 form-control m-1"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="How Many Recipes ?"
                  className="p-2 form-control m-1"
                  value={limit}
                  onChange={(e) => setLimit(e.target.value)}
                />
                <button
                  type="submit"
                  className="btn btn-warning p-3 search__btn"
                >
                  <BsSearch style={{ fontSize: "1.3rem" }} />
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
      {recipes.map((ele, index) => {
        return (
          <div className="container mt-5 recipe-page">
            <div className="row">
              <div className="col">
                <img
                  src={ele.recipe.image}
                  className="img-fluid mt-3"
                  style={{ height: "50vh", width: "100%" }}
                  alt="Banner Image"
                />
              </div>
            </div>
            <div className="row mt-5">
              <div className="col">
                <h1> {ele.recipe.label} </h1>
                <h4>
                  Type:{ele.recipe.cuisineType} {ele.recipe.dishType}
                </h4>
                <h4></h4>
                <p>
                  <u>
                    <i>Calories:{Math.floor(ele.recipe.calories)}</i>
                  </u>
                </p>
              </div>
            </div>
            <div className="row mt-5">
              <div className="col-md-3">
                <h3>Ingredients</h3>
                <hr />
                <p>{ele.recipe.ingredientLines[0]}</p>
                <p>{ele.recipe.ingredientLines[1]}</p>
                <p>{ele.recipe.ingredientLines[2]}</p>
                <p>{ele.recipe.ingredientLines[3]}</p>
                <p>{ele.recipe.ingredientLines[4]}</p>
                <p>{ele.recipe.ingredientLines[5]}</p>
                <p>{ele.recipe.ingredientLines[5]}</p>
                <p>{ele.recipe.ingredientLines[6]}</p>
                <p>{ele.recipe.ingredientLines[7]}</p>
                <p>{ele.recipe.ingredientLines[8]}</p>
                <p>{ele.recipe.ingredientLines[9]}</p>
                <p>{ele.recipe.ingredientLines[10]}</p>
              </div>
              <div className="col-md-9">
                <h3>Nutrients</h3>
                <hr />
                <p>
                  {ele.recipe.digest[0].label}:{" "}
                  {Math.floor(ele.recipe.digest[0].total)}{" "}
                  {ele.recipe.digest[0].unit}{" "}
                </p>
                <p>
                  {ele.recipe.digest[1].label}: {ele.recipe.digest[1].total}{" "}
                  {ele.recipe.digest[1].unit}{" "}
                </p>
                <p>
                  {ele.recipe.digest[2].label}: {ele.recipe.digest[2].total}{" "}
                  {ele.recipe.digest[2].unit}{" "}
                </p>
                <p>
                  {ele.recipe.digest[3].label}: {ele.recipe.digest[3].total}{" "}
                  {ele.recipe.digest[3].unit}{" "}
                </p>
                <p>
                  {ele.recipe.digest[4].label}: {ele.recipe.digest[4].total}{" "}
                  {ele.recipe.digest[4].unit}{" "}
                </p>
                <p>
                  {ele.recipe.digest[5].label}: {ele.recipe.digest[5].total}{" "}
                  {ele.recipe.digest[5].unit}{" "}
                </p>
                <p>
                  {ele.recipe.digest[6].label}: {ele.recipe.digest[6].total}{" "}
                  {ele.recipe.digest[6].unit}{" "}
                </p>
                <p>
                  {ele.recipe.digest[7].label}: {ele.recipe.digest[7].total}{" "}
                  {ele.recipe.digest[7].unit}{" "}
                </p>
                <p>
                  {ele.recipe.digest[8].label}: {ele.recipe.digest[8].total}{" "}
                  {ele.recipe.digest[8].unit}{" "}
                </p>
                <p>
                  {ele.recipe.digest[9].label}: {ele.recipe.digest[9].total}{" "}
                  {ele.recipe.digest[9].unit}{" "}
                </p>
                <p>
                  {ele.recipe.digest[10].label}: {ele.recipe.digest[10].total}{" "}
                  {ele.recipe.digest[10].unit}{" "}
                </p>
                <p>
                  {ele.recipe.digest[11].label}: {ele.recipe.digest[11].total}{" "}
                  {ele.recipe.digest[11].unit}{" "}
                </p>
                <p>
                  {ele.recipe.digest[12].label}: {ele.recipe.digest[12].total}{" "}
                  {ele.recipe.digest[12].unit}{" "}
                </p>
                <p>
                  {ele.recipe.digest[13].label}: {ele.recipe.digest[13].total}{" "}
                  {ele.recipe.digest[13].unit}{" "}
                </p>
                <p>
                  {ele.recipe.digest[14].label}: {ele.recipe.digest[14].total}{" "}
                  {ele.recipe.digest[14].unit}{" "}
                </p>
                <p>
                  {ele.recipe.digest[15].label}: {ele.recipe.digest[15].total}{" "}
                  {ele.recipe.digest[15].unit}{" "}
                </p>
                <p>
                  {ele.recipe.digest[16].label}: {ele.recipe.digest[16].total}{" "}
                  {ele.recipe.digest[16].unit}{" "}
                </p>
                <p>
                  {ele.recipe.digest[17].label}: {ele.recipe.digest[17].total}{" "}
                  {ele.recipe.digest[17].unit}{" "}
                </p>
                <p>
                  {ele.recipe.digest[18].label}: {ele.recipe.digest[18].total}{" "}
                  {ele.recipe.digest[18].unit}{" "}
                </p>
                <p>
                  {ele.recipe.digest[19].label}: {ele.recipe.digest[19].total}{" "}
                  {ele.recipe.digest[19].unit}{" "}
                </p>
                <p>
                  {ele.recipe.digest[20].label}: {ele.recipe.digest[20].total}{" "}
                  {ele.recipe.digest[20].unit}{" "}
                </p>
                <p>
                  {ele.recipe.digest[21].label}: {ele.recipe.digest[21].total}{" "}
                  {ele.recipe.digest[21].unit}{" "}
                </p>
                <p>
                  {ele.recipe.digest[22].label}: {ele.recipe.digest[22].total}{" "}
                  {ele.recipe.digest[22].unit}{" "}
                </p>
                <p>
                  {ele.recipe.digest[23].label}: {ele.recipe.digest[23].total}{" "}
                  {ele.recipe.digest[23].unit}{" "}
                </p>
                <p>
                  {ele.recipe.digest[24].label}: {ele.recipe.digest[24].total}{" "}
                  {ele.recipe.digest[24].unit}{" "}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Recipe_Listing;

import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestCategory from "./RestCategory";
import loading from "../images/loading.gif";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const restInfoFull = useRestaurantMenu(resId);
  //console.log('rest info',restInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards)
  const [showIndex, setShowIndex] = useState(null);
  if (restInfoFull === null)
    return (
    <div className="p-36">
      <img className="mx-auto h-16 w-16" src={loading} />
    </div>
    );
  const restInfo = restInfoFull.cards.filter(
    (r) => r?.card?.card?.info != undefined
  );
  const groupedCards = restInfoFull.cards.filter(
    (r) => r?.groupedCard?.cardGroupMap?.REGULAR != undefined
  );
  //console.log(groupedCards)
  const { name, cuisines, costForTwoMessage } = restInfo[0]?.card?.card?.info;
  let categories =
    groupedCards[0]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  if (categories === undefined) {
    categories =
      restInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (c) =>
          c.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      );
  }
  return (
    <div className="text-center">
      <h1 className="font-bold p-4 text-2xl">{name}</h1>
      <p className="font-bold text-lg">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      {categories.map((c, index) => (
        <RestCategory
          key={c?.card?.card.title}
          data={c?.card?.card}
          showAcc={index === showIndex ? true : false}
          setShowIndex={() => setShowIndex(index)}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;

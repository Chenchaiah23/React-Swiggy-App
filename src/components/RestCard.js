import { useContext } from "react";
import UserContext from "../utils/UserContext";
import { LOGO_URL } from "../utils/constants";

const RestCard = (props) => {
  const restData = props;
  //console.log(restData)
  const { name, avgRating, sla, cloudinaryImageId } = restData?.restData.info;
  const { loggedInUser } = useContext(UserContext);
  return (
    <div data-testid="rest-card-testid" className="m-4 p-4 w-52 shadow-xl shadow-black bg-green-100 hover:bg-green-600 hover:text-white">
      <img className="rounded-lg " src={LOGO_URL + cloudinaryImageId} />
      <h3 className="font-bold py-2"> {name}</h3>
      <h4> {avgRating}</h4>
      <h4> {sla.slaString}</h4>
      <h4> User name : {loggedInUser}</h4>
    </div>
  );
};
//Higher Order Component
export const withBestLabel = (RestCard) => {
  return (props) => {
    return (
      <div>
        <label
          style={{
            position: "absolute",
            backgroundColor: "black",
            color: "white",
          }}
        >
          <b>Best Rest</b>
        </label>
        <RestCard {...props} />
      </div>
    );
  };
};
export default RestCard;

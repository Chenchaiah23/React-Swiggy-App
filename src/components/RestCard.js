import { LOGO_URL } from "../utils/constants";
const RestCard = (props) => {
    const restData = props;
    const { name, avgRating, sla, cloudinaryImageId } = restData?.restData.info;
    return (
      <div className="rest-card" style={{ backgroundColor: "#f0f0f0" }}>
        <img
          className="rest-logo"
          src={LOGO_URL
             +
            cloudinaryImageId
          }
        />
        <h3> {name}</h3>
        <h4> {avgRating}</h4>
        <h4> {sla.slaString}</h4>
      </div>
    );
  };

  export default RestCard;
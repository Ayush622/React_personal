const RestaurantCard = (props) => {
    const { id, resData } = props;
    const { name, cuisines, costForTwo, avgRating, sla, cloudinaryImageId } =
      resData.info;
    return (
      <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
        <img
          src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
          alt="res-img"
          className="res-img"
        />
        <h3>{name}</h3>
        <h4>{cuisines.join(",")}</h4>
        <h4>{costForTwo}</h4>
        <h4>{avgRating} Stars</h4>
        <h4>{sla.slaString} Stars</h4>
      </div>
    );
  };

  export default RestaurantCard;
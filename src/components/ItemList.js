import { LOGO_URL } from "../utils/constants";

const ItemList = ({ items }) => {
  //console.log("items", items);
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-gray-200 border-b-2 text-left"
        >
          <div className="flex justify-between">
            <div className="w-9/12">
              <span className="text-lg font-bold">{item.card.info.name}</span>
              <span> - {item.card.info.price / 100}</span>
              <p className="text-xs text-gray-500">{item.card.info.description}</p>
            </div>
            <div className="w-3/12">
              <div className="absolute">
              <button className="p-2 bg-green-300 shadow-lg  rounded-lg">Add +</button>
              </div>
              <img src={LOGO_URL + item.card.info.imageId} className="rounded-xl"/>
              
            </div>
          </div>
          <div>
            
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;

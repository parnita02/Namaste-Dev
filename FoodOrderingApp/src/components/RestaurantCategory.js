RestaurantCategory = ({ data }) => {
  // console.log(data);
  return (
    <div>
      <div className="bg-gray-400">
        <span>{data.title}</span>
        <span>🔽</span>
      </div>
    </div>
  );
};
export default RestaurantCategory;

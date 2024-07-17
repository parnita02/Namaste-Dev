import { useEffect, useState } from "react";
import { MENU_API } from "./constants";

const useRestaurantPage = (resid) => {
  const [resInfo, setResInfo] = useState(null);

  // fetch data

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(MENU_API + resid);
    const json = await data.json();
    setResInfo(json.data);
  };

  return resInfo;
};
export default useRestaurantPage;

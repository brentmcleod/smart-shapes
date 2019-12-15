import { useState, useEffect } from "react";
import Axios from "axios";

const useData = () => {
  const [data, setData] = useState([]);
  const [layouts, setLayouts] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadData = async () => {
    const response1 = await Axios.get("data/data.json");
    const response2 = await Axios.get("data/layouts.json");

    setData(response1.data);
    setLayouts(response2.data);
    setLoading(false);
  };

  useEffect(() => {
    loadData();
  }, []);

  return [data, layouts, loading];
};

export { useData };

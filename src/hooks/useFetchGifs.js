import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
    const [imags, setImags] = useState([]);
    const [isLoading, setIsloading] = useState(true);

    const getImag = async () => {
        const newImag = await getGifs(category);
        try {
            setImags(newImag);
            setIsloading(false);
        } catch (error) { }
    }

    useEffect(() => {
        getImag();
    }, [])

  return {
    isLoading,
    imags
  }
}

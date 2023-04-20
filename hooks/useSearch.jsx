import { useState } from "react";
import { NFTData } from "../constants";

export default function useSearch() {

  const [nftData, setNftData] = useState(NFTData);

  const formatToLowerCase = value => {
    return value.toLowerCase()
  }

  const handleSearch = ({ value }) => {
    if (!value.length) setNftData(NFTData)

    const filteredData = NFTData.filter(({ name }) =>
    formatToLowerCase(name).includes(formatToLowerCase(value))
    );

    !filteredData.length ? setNftData(NFTData) : setNftData(filteredData);
  };
  return { handleSearch, nftData }
}

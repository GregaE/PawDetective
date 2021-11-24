import PawsItem from "./PawsItem/PawsItem";
import { useContext } from "react";

import { useSelector } from "react-redux";

import globalContext from "../../../services/globalContext";

const PawsList = () => {
  const { customProps } = useContext(globalContext);
  const { paws } = customProps;

  const filterBtn = useSelector((state) => state.filterBtn);

  const renderPaws = (paws) => {
    if (paws.length < 1) {
      return <p>There are no pets in this list 😉</p>;
    } else {
      return paws
        .filter((paw) => {
          if (filterBtn === "Lost") {
            return paw.lostOrFound === true;
          } else if (filterBtn === "Found") {
            return paw.lostOrFound === false;
          }
          return paws;
        })
        .map((paw) => <PawsItem paw={paw} key={paw._id} />);
    }
  };

  return <div className="list-container">{renderPaws(paws)}</div>;
};

export default PawsList;

import { FaChevronRight } from "react-icons/fa";
import "./Address.css";
import { addresses } from "../data/address";
import { Fragment } from "react";

function Address() {
  return (
    <div className="container-address">
      {addresses.map((address, index) =>
        address === addresses[addresses.length - 1] ? (
          <span key={index} className="address-present">
            {address}
          </span>
        ) : (
          <Fragment key={index}>
            <span className="address-previous">{address}</span>
            <span className="address-icon">{<FaChevronRight />}</span>
          </Fragment>
        )
      )}
    </div>
  );
}

export default Address;

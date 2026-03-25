import React from "react";

const men = (e) => {

  function calculateElectricityBill(unit) {
    let bill = 0;

    if (unit <= 100) {
        bill = unit * 4.2;
    } else if (unit <= 200) {
        bill = (100 * 4.2) + ((unit - 100) * 6);
    } else if (unit <= 400) {
        bill = (100 * 4.2) + (100 * 6) + ((unit - 200) * 8);
    } else {
        bill = (100 * 4.2) + (100 * 6) + (200 * 8) + ((unit - 400) * 13);
    }

    return bill.toFixed(1); // 👈 this is what you need
}

module.exports = { calculateElectricityBill };
  return (
    <div className="px-15 py-12 w-fit m-2 bg-blue-600 rounded ">
     <h1 className="text-lg font-bold">Blue </h1>
    </div>
  );
};

export default men;

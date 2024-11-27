import React, { useState } from "react";
import { DOCTOR } from "../../utils/doctor";
import TimeTable from "./TimeTable";
import { QUEUE } from "../../utils/queue";

const Doctor = () => {
  const [selectedDoctor, setSelectedDoctor] = useState('0001');
  

  const [queueDoctor, setQueueDoctor] = useState();
  const [searchDoctor, setSearchDoctor] = useState("");
  function handleSearchClick() {
    if (searchDoctor === "") {
    //   setQueueDoctor(QUEUE);
      return;
    }
    const filterBySearch = QUEUE.filter((item) => {
      if (item.toLowerCase().includes(searchDoctor.toLowerCase())) {
        return item;
      }
    });
    setQueueDoctor(filterBySearch);
  }

  console.log(selectedDoctor)


  return (
    <div className="max-w-[1200px] mx-auto ">
      <h1 className="text-center text-3xl uppercase font-bold py-8">
        dental clinic
      </h1>

      <div className="flex justify-around gap-2 mb-6">
        <div className="w-[450px]">
          <select
            value={selectedDoctor}
            onChange={(e) => setSelectedDoctor(e.target.value)}
            className="w-full border p-2 rounded-md"
          >
            {DOCTOR.map((item) => (
              <option value={item.doctorid} key={item.doctorid}>
                {item.doctorname}{" "}
              </option>
            ))}
          </select>
        </div>

        <div className="w-[450px]">
          <input
            className="w-full border p-2 rounded-md"
            onChange={(e) => setSearchDoctor(e.target.value)}
            placeholder="Enter name"
          ></input>
        </div>
      </div>

      <TimeTable selectedDoctor={selectedDoctor} />
    </div>
  );
};

export default Doctor;

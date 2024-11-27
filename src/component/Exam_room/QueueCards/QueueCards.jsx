import React from 'react'
import bin from '/img/bin.svg'
import man from '/img/man.svg'

const QueueCards = ({ queue, name, member, runnumber }) => {
  return (
    <div className="w-[260px] h-[110px] bg-slate-100 text-blue-950 rounded-xl shadow-lg drop-shadow-lg

    relative">
      <div className="absolute top-2 left-3 ">
        <p className="">{queue}</p>
        <img src={man} className="mt-2 w-12 h-auto" alt="" />
      </div>

      <div className="flex flex-row p-2 justify-between  rounded-lg">
        <div className=" ml-14 flex flex-col text-left">
          <p className="font-semibold">{name}</p>
          <p className="">{member}</p>
        </div>

        <div className="">
          <div className="p-2 bg-zinc-700 rounded-md text-center text-sm">
            <p className="text-white">{runnumber}</p>
          </div>
          <a className="cursor-pointer">
            <img src={bin} className="w-6 h-auto mt-2"></img>
          </a>
        </div>
      </div>

      <div className=" flex justify-center">
        <p className="text-zinc-600">9 วัน</p>
      </div>
    </div>
  );
}

export default QueueCards
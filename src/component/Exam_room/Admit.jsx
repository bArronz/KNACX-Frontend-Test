import React from 'react'
import { QUEUE } from '../../utils/queue'
import QueueCards from './QueueCards/QueueCards'

const admit = () => {

  const count = QUEUE.length
  console.log(count)

  return (
    <div className="w-[350px] h-[800px] rounded-lg bg-sky-100/90 shadow-2xl ">
      <div className="">
        <div className="bg-emerald-400  rounded-t-lg py-4">
          <h1 className="text-lg text-center text-white font-semibold">
            แอดมิด <span>({count})</span>
          </h1>
        </div>

        <div className="flex justify-center mt-4 ">
          <div className="flex flex-col gap-6">
            {QUEUE.map((item) => (
              <QueueCards
                key={item.queue}
                queue={item.queue}
                name={item.name}
                member={item.member}
                runnumber={item.runnumber}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default admit
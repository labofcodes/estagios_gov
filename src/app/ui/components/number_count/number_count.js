"use client"

import { useEffect, useState } from "react";
import Icon_Information from "../../icons/information";
import { useInView } from 'react-intersection-observer';

export default function Number_count({ number, after_number, title, description }) {

  const [newNumber, setNewNumber] = useState(0);

  const { ref:countNumber, inView, entry } = useInView();

  useEffect(() => {
    if (inView) {
      let counter = 0;
      const timer = setInterval(() => {
        counter++;
        setNewNumber(counter);
        if (counter === number) {
          clearInterval(timer);
        }
      }, 30);
    }
  }, [inView, number]);

  return (
    <div ref={countNumber} className="text-center">
      <p className="text-4xl font-bold mb-2">{newNumber} {after_number}</p>
      <div className="flex justify-center items-center gap-2 relative">
        <p className="text-center">{title}</p>
        {description &&
          <div className="group cursor-pointer">
            <Icon_Information />
            <div className="hidden group-hover:block group-hover:animate-fade-up group-hover:animate-duration-300 absolute w-52 h-auto -top-16 left-0 p-2 bg-white transition-all rounded-md border shadow-md">
              <p className="text-sm">{description}</p>
            </div>
          </div>
        }
      </div>
    </div>
  );
}

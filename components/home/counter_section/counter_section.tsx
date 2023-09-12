"use client"
import "./counter_section.css";
import React, { useState, useEffect } from 'react';
import CountUp from 'react-countup';

const CounterSection = () => {
  const [counterOn, setCounterOnn] = useState(false);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.2, // Détectez lorsque l'élément est à 20% dans la vue.
    };

    const handleIntersection = (entries: any[]) => {
      entries.forEach((entry: { isIntersecting: any; }) => {
        if (entry.isIntersecting) {
          setCounterOnn(true);
        }
      });
    };

    // Créez une instance de l'observateur d'intersection avec vos options.
    const observer = new IntersectionObserver(handleIntersection, options);

    // Sélectionnez l'élément que vous souhaitez observer.
    const elementToObserve = document.querySelector('.counter-contanair');

    // Ajoutez l'élément à l'observateur.
    if (elementToObserve) {
      observer.observe(elementToObserve);
    }

    // Nettoyez l'observateur lorsque le composant est démonté.
    return () => {
      if (elementToObserve) {
        observer.unobserve(elementToObserve);
      }
    };
  }, []);

  return (
    <div className="max-full px-[2rem] py-[5rem] border-b flex items-center justify-center counert-section">
      <div className="max-w-[97rem] w-full">
        <div className="flex-row flex justify-evenly counter-contanair">
          <div className="number flex flex-col justify-center items-center text-[3rem]">
            {counterOn && <CountUp start={0} end={850} delay={0} />}M
            <p className="label text-[1.2rem] font-normal">Total Freelancer</p>
          </div>
          <div className="number flex flex-col justify-center items-center text-[3rem]">
            {counterOn && <CountUp start={0} end={675} delay={0} />}M
            <p className="label text-[1.2rem] font-normal">Positive Review</p>
          </div>
          <div className="number flex flex-col justify-center items-center text-[3rem]">
            {counterOn && <CountUp start={0} end={95} delay={0} />}M
            <p className="label text-[1.2rem] font-normal">Order received</p>
          </div>
          <div className="number flex flex-col justify-center items-center text-[3rem]">
            {counterOn && <CountUp start={0} end={570} delay={0} />}M
            <p className="label text-[1.2rem] font-normal">Projects Completed</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CounterSection;

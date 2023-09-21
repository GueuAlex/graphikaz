"use client"
import { PathnameComponent } from '@/components'
import { Wrapper } from '@/reutilisables'
import React, { useState } from 'react'
import './freelancers.scss'
import { categoriesTab, prestators } from '@/constants'
import Image from 'next/image';
import Link from 'next/link';
import { PrestatorProps } from '@/types'

const Freelancers = () => {

  /* fonctions */
  const options = ['Sort by (Default)', 'Newest', 'Oldest', 'Random'];
  const [optionIsVisible, setVisibility] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [selectedOption, setOption] = useState('Sort by (Default)');
  const toggleOption = () => optionIsVisible ? setVisibility(false): setVisibility(true);
  const toggleFilterSideBar = () => toggle ? setToggle(false): setToggle(true);

  /* ******** show more / show less === categories  **************/
  const itemsPerPage = 5;
  const [showAll, setShowAll] = useState(false);
  const [visibleItems, setVisibleItems ] = useState(categoriesTab.slice(0, itemsPerPage));
  const handleShoMore = ()=> {
    // afficher tous les elements
    setVisibleItems(categoriesTab);
    setShowAll(true);
  }
  const handleShoLess = ()=> {
    // afficher le nombre d'element par defaut
    setVisibleItems(categoriesTab.slice(0, itemsPerPage));
    setShowAll(false);
  }
  /* ******** show more / show less  **************/

  /* ******** show more / show less === date posted  **************/
  const data = ['Abidjan', 'Man', 'Daloa', 'Yakro', 'Bassam', 'San-pedro', 'Odienné'];
  const [showAllD, setShowAllD] = useState(false);
  const [visibleItemsD, setVisibleItemsD ] = useState(data.slice(0, 4));
  const handleShoMoreD = ()=> {
    // afficher tous les elements
    setVisibleItemsD(data);
    setShowAllD(true);
  }
  const handleShoLessD = ()=> {
    // afficher le nombre d'element par defaut
    setVisibleItemsD(data.slice(0, 4));
    setShowAllD(false);
  }
  /* ******** show more / show less  **************/

  /* select arrays */
  const responseTime = ['Agency Freelancers', 'Independent Freelancers', 'New Resing Talent'];
  const deliveryTime = ['Both', 'Female', 'Male'];
  const englishLevel = ['Basic', 'Conversational', 'Fluent', 'Native Or Bilingual', 'Professional'];
  //const cities = ['Abidjan', 'Man', 'Biankouman', 'Yakro', 'Daloa', 'Sans-Pédro', 'Divo', 'Gagnoa', 'et etc ...'];
  

  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(80);

  const handleMinChange = (event : any) => {
    const newMinValue = parseInt(event.target.value);
    setMinValue(Math.min(newMinValue, maxValue)); // Assurer que min <= max
  };

  const handleMaxChange = (event: any) => {
    const newMaxValue = parseInt(event.target.value);
    setMaxValue(Math.max(newMaxValue, minValue)); // Assurer que max >= min
  };

  return (
   <div className="freelancers">
     <div className={`${toggle ? 'show-overlay': ''} overlay`}></div>
     <aside className={`${toggle ? 'show-cat-side-filter': 'hide-cat-side-filter'} cat-side-filter`}>
        <form>
          <div className="side-filter-container">

            
            <div className="filter-header">
              <h3>All Filters</h3>
              <div className="close-button" onClick={toggleFilterSideBar}><i className="ri-close-line"></i></div>
            </div>

            {/* categories */}
            <div className="filter-section">
              <h3 className="title">Categories</h3>
              <div className="filter-cat-body">
                <ul>
                {visibleItems.map((cat, index) => (
                  <li id={index.toString()}>
                    <input type="checkbox" value={cat.label} name={cat.label} id={cat.id.toString()} />
                    <label htmlFor={cat.id.toString()}>{cat.label}</label>
                  </li>
                ))}
                </ul>
                {
                  !showAll ? (<div className='show'><i className="ri-add-line symbol"></i><span onClick={handleShoMore} className='show-text'>Show more</span></div>):(<div className='show'><i className="ri-subtract-line symbol"></i><span onClick={handleShoLess} className='show-text'>Show less</span></div>)
                }
              </div>
            </div>

            {/* Regions */}
            <div className="filter-section">
              <h3 className="title">Regions</h3>
              <div className="filter-cat-body">
                <ul>
                  {visibleItemsD.map((data, index) =>(
                    <li>
                      <input type="checkbox" value={data} name={data} id={index.toString()} />
                      <label htmlFor="">{data}</label>
                    </li>
                  ))}
                </ul>
                {
                  !showAllD ? (<div className='show'><i className="ri-add-line symbol"></i><span onClick={handleShoMoreD} className='show-text'>Show more</span></div>):(<div className='show'><i className="ri-subtract-line symbol"></i><span onClick={handleShoLessD} className='show-text'>Show less</span></div>)
                }
              </div>
            </div>
              
              {/* Types */}
            <div className="filter-section">
              <h3 className="title">Types</h3>
              <select name="" id="">
                <option value="" selected disabled>Types</option>
              {responseTime.map((time, index) =>(
                <option key={index} value={time}>{time}</option>
              ))}
              </select>
            </div>
          

            {/* Gender */}
            <div className="filter-section">
                <h3 className="title">Gender</h3>
                <select name="" id="">
                  <option value="" selected disabled>Gender</option>
                {deliveryTime.map((time, index) =>(
                  <option key={index} value={time}>{time}</option>
                ))}
                </select>
            </div>

            {/* English Level */}
            <div className="filter-section">
                <h3 className="title">English Level</h3>
                <select name="" id="">
                  <option value="" selected disabled>English Level</option>
                {englishLevel.map((level, index) =>(
                  <option key={index} value={level}>{level}</option>
                ))}
                </select>
            </div>
            
            <div className="filte-footer w-full">
              <button className='py-4 flex justify-center items-center gap-3 w-full bg-secondary mb-3 rounded text-white' type="submit">Find Service <i className="ri-arrow-right-up-line"></i> </button>
            </div>
          </div>
        </form>
      </aside>
      {/* filter side bar */}
      <Wrapper>
        <PathnameComponent/>
      </Wrapper>
      {/* path name */}

      <div className="bannerss relative flex justify-center items-center">
        <div className=' max-w-[110rem] w-full'>
           <BannerContainer />
        </div>
      </div>
      {/* banners */}

      <Wrapper>
        <div className="filter-container relative">
          <div className="text-light"> Showing 8 results</div>
          <div className="filter-buttons">
            <button type="button" onClick={ toggleFilterSideBar }><i className="ri-filter-3-fill"></i> &nbsp; Filter</button>
            <button type="button" onClick={ toggleOption }>{selectedOption} <i className="ri-arrow-drop-down-fill"></i></button>
            <div className={`${optionIsVisible ? 'show-options': ''} selected-options shadow-sm absolute  right-0 top-11`}>
              <ul>
               {options.map((option) => (
                <li onClick={ () => {optionIsVisible ? setVisibility(false): setVisibility(true); setOption(option)} } className={selectedOption == option ? 'active': ''}>{option}</li>
               ))}
              </ul>
            </div>
          </div>
        </div>
      </Wrapper>
      {/* filter buttons */}

      <div className="freelancers-area">
        <Wrapper>
            <div className="freelancers">
              {prestators.map((prestator, index) => {
                return <FreelacerCard prestator={prestator} />
              })}
            </div>
        </Wrapper>
      </div>

   </div>
  )
}

const FreelacerCard = ({prestator} : {prestator: PrestatorProps}) => {

  return (
    <Link href={`${prestator.profilLink}${prestator.fullName}`}>
      <div className="freelancer-card hover:shadow">
        <div className="favorite-heart"><i className="ri-heart-line text-[0.8rem]"></i></div>
        <div className="image-container object-contain">
          <Image src={prestator.profilPic} alt={prestator.fullName} className='img rounded-full'/>
        </div>
        <strong>{prestator.fullName}</strong>
        <span className='post'>{prestator.post}</span>
        <div className="reviews">
          <i className="ri-star-fill"></i>
          <span className="score">4.0</span>
          <span className="total-review">{`(`}0 Reviews{`)`}</span>
        </div>
        <div className="competences">
          {prestator.competence.slice(0,2).map((competence, index) => {
            return (
              <div className="competence">
                {competence}
              </div>
            )
          })} {`+${prestator.competence.length - 2}`}
        </div>
        <div className="divider"/>
        <div className="flex flex-col w-full">
          <div className="location flex justify-between items-center">
            <span>Location :</span><small>Rate :</small>
          </div>
          <div className="rate flex justify-between items-center">
            <span>Abidjan</span><small>$55 - $60 / hr</small>
          </div>
        </div>
        <button type="button">View profil  <i className="ri-arrow-right-up-line"></i></button>
      </div>
    </Link>
  )
}

const BannerContainer = () => {
  return (
    <div className="banner w-full max-h-[18rem]">
      <Wrapper>
          < h2 className="banner-title">Our Freelancers</h2>
          <small className="small-text">Give your visitor a smooth online experience with a solid UX design</small>
          <div className="banner-demo-container">
            <div className="flex items-center justify-center">
              <i className="ri-play-fill text-[1.9em]"></i>
            </div>
            <p>How Graphikaz Works</p>
          </div>
      </Wrapper>
     </div>
  )
}

export default Freelancers
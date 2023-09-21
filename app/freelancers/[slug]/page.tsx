"use client"
import { PathnameComponent } from '@/components';
import { prestators } from '@/constants';
import { Wrapper } from '@/reutilisables';
import { PrestatorProps, ServiceProps } from '@/types';
import React, { Component, useEffect, useRef, useState } from 'react'
import Image from 'next/image';

 const SingleFreelancer = ({ params } : { params: {slug: string}}) => {
    /* on decode l'URI pour recuperer le nom envoyer en param */
    const prestatorName = decodeURIComponent(params.slug);
    /* on recuperer le prestataire correspondant dans notre liste de prestataires */
    const prestator: PrestatorProps | undefined = prestators.find((prestator) => prestator.fullName === prestatorName);

    /* obtenir la hauteur de rigth component */
    const [height, setHeight] = useState<number | null>(null);
    const elementRef = useRef<HTMLDivElement>(null);
  
    useEffect(() => {
      if (elementRef.current) {
        setHeight(elementRef.current.offsetHeight);
      }
    }, []);
    //const style = height ? { height: `${height}px` } : {};

    /* un prestataire à été trouver ? */
    if (prestator) {
        return (
            <div className="single-freelancer relative containerr ">
               
                <Wrapper>
                    <div className="flex justify-between">
                        <PathnameComponent /> 
                        <div className="icon-container">
                            <div className="share-container">
                                <div className="share-with shadow-sm rounded-[5px]">
                                    <div className="icon-small"><i className="ri-facebook-line"></i></div>
                                    <div className="icon-small"><i className="ri-twitter-line"></i></div>
                                    <div className="icon-small"><i className="ri-linkedin-line"></i></div>
                                    <div className="icon-small"><i className="ri-instagram-line"></i></div>
                                </div>
                                <div className="icon-small d"><i className="ri-share-box-fill"></i></div>
                                <small>Share</small>
                            </div>
    
                            <div className="tooltip save-container" data-tip="add to favorits">
                                <div className="icon-small d"><i className="ri-heart-3-line"></i></div>
                                <small>Save</small>
                            </div>
    
                            {/* You can open the modal using ID.showModal() method */}
                            <div className=" cursor-pointer" onClick={()=>window.my_modal_3.showModal()}><i className="ri-alert-fill text-yellow-500"></i></div>
                            <dialog id="my_modal_3" className="modal">
                            <form method="dialog" className="modal-box">
                                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                <h3 className="font-bold text-lg">Report this service</h3>
                                <input required type="text"  placeholder="Subject"/>
                                <textarea required name="" id=""  rows={3}  placeholder="Message *"></textarea>
                                <button type="submit">Send report <i className="ri-arrow-right-up-line"></i></button>
                            </form>
                            </dialog>
    
    
                            {/* Open the modal using ID.showModal() method */}
                        
                        </div>
                    </div>
                 </Wrapper>
                 {/* path name & share, save, report area */}
                 <div className="bannerss relative flex justify-center items-center">
                    <div className=' max-w-[110rem] w-full'>
                        <BannerContainer prestator={prestator} />
                    </div>
                </div>
                {/* Banner container */}

                <Wrapper>
                    <div className="sigle-freelancer-body relative">
                        <div className="rigth" ref={elementRef}>
                            bonjour
                        </div>
                        {/* right component */}
                        <div className="left sticky-r" /* style={style} */>
                            <FloatingComponent/>
                        </div>
                       
                    </div>
                </Wrapper>
            </div>
        )
    }else{
        return (
            <div className="404-component">
                404
            </div>
        )
    }
  
}


const BannerContainer = ({ prestator }: { prestator: PrestatorProps }) => {
    
    return (
      <div className="banner w-full max-h-[18rem]">
        <Wrapper>
            <div className="details-container">
                <div className="prestator flex items-center">
                    <div className="h-[9.5em] w-[9.5em] border rounded-full object-contain">
                        <Image src={prestator.profilPic} alt={prestator.fullName}  className="rounded-full"/>
                    </div>
                   
                </div>
                <div className="details w-full">
                    <h4>{prestator.fullName}</h4>
                    <span className="post">{prestator.post}</span>
                    <div className="awards-contacts flex justify-between">
                        <div className="awards items-center flex gap-6">
                            <div className="reviews"><i className="ri-star-fill text-yellow-500"></i> {4.0} {`(`}{2}{` Reviews)`}</div>
                            <div className="dett"><i className="ri-user-location-line"></i> Abidjan</div>
                            <div className="dett"><i className="ri-calendar-2-line"></i> September 14, 1996</div>
                        </div>
                        <div className="contacts flex gap-3">
                            <button>Invite</button>
                            <button>Message</button>
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>
       </div>
    )
  }

  const FloatingComponent = () => {
    return(
        
        <div className="sticky top-0 flex flex-col gap-3">
            <div className="top-container">jkj</div>
            <div className="bottom-container"></div>
        </div>
        
        )
  }

export default SingleFreelancer;

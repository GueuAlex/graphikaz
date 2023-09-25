"use client"
import { PathnameComponent } from '@/components';
import { prestators } from '@/constants';
import { TServiceCard, Wrapper } from '@/reutilisables';
import { PrestatorProps, ServiceProps } from '@/types';
import React, { Component, useEffect, useRef, useState } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { services } from '@/constants';
import RatingStates from "@/reutilisables/rating_state"
import Rate from '@/reutilisables/rate';

 const SingleFreelancer = ({ params } : { params: {slug: string}}) => {
    /* on decode l'URI pour recuperer le nom envoyer en param */
    const prestatorName = decodeURIComponent(params.slug);
    /* on recuperer le prestataire correspondant dans notre liste de prestataires */
    const prestator: PrestatorProps | undefined = prestators.find((prestator) => prestator.fullName === prestatorName);

    /* obtenir la hauteur de rigth component */
    const [height, setHeight] = useState<number | null>(null);
    const elementRef = useRef<HTMLDivElement>(null);

    const [rating, setRating] = useState(0);
  
    useEffect(() => {
      if (elementRef.current) {
        setHeight(elementRef.current.offsetHeight);
      }
    }, []);
    const style = height ? { height: `${height}px` } : {};

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
                            <div className="service-description">
                                <div className="desc-head flex justify-between ">
                                    <div className="desc flex items-center gap-2">
                                        <div className="icon-large relative"><i className="ri-focus-2-line text-[2.8em] text-primary"></i> <div className="transparant absolute"></div></div>
                                        <div className="desc-text">
                                            <span>Project Success</span><br />
                                            <small>2</small>
                                        </div>
                                    </div>

                                    <div className="desc flex items-center gap-2">
                                        <div className="icon-large relative"><i className="ri-line-chart-line text-[2.8em] text-primary"></i> <div className="transparant absolute"></div></div>
                                        <div className="desc-text">
                                            <span>Total Service</span><br />
                                            <small>5</small>
                                        </div>
                                    </div>
                                    
                                    <div className="desc flex items-center gap-2">
                                        <div className="icon-large relative"><i className="ri-checkbox-multiple-line text-[2.8em] text-primary"></i> <div className="transparant absolute"></div></div>
                                        <div className="desc-text">
                                            <span>Completed Service</span><br />
                                            <small>0</small>
                                        </div>
                                    </div>
                                    <div className="desc flex items-center gap-2">
                                        <div className="icon-large relative"><i className="ri-hourglass-fill text-[2.8em] text-primary"></i> <div className="transparant absolute"></div></div>
                                        <div className="desc-text">
                                            <span>In Queue service</span><br />
                                            <small>25</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* freelance services infos */}
                            <div className="about-freelancer relative">
                                <div className="about flex flex-col gap-6">
                                    <h3>About Freelancer</h3>
                                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
                                    <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.</p>
                                    <p>Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.</p>
                                </div>
                                {/* about  */}
                                <div className="divider"/>
                                <div className="education pt-2 pb-2">
                                    <h3>Educations</h3>
                                    <DetailsContainer years='2005-2008' title='Marketing College' textgreen='Modern College' description='Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et.'/>
                                    <div className="dot">E</div>
                                    <DetailsContainer years='2008-2009' title='Computer Science' textgreen='Harvartd University' description='Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.'/>
                                    <div className="dot">E</div>
                                </div>
                                <div className="divider"/>
                                <div className="work-experience pt-2 pb-2">
                                    <h3>Work & Experience</h3>
                                    <DetailsContainer years='2019-2020' title='Product Manager' textgreen='AGB Company' description='Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.'/>
                                    <div className="dot">W</div>
                                    <DetailsContainer years='2022-2023' title='Marketing Manager' textgreen='AB Company' description='Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et.'/>
                                    <div className="dot">W</div>
                                </div>
                                <div className="divider"/>
                                <div className="awards pt-2 pb-2">
                                    <h3>Awards</h3>
                                    <DetailsContainer years='2019' title='Best Manager' textgreen='' description='Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.'/>
                                    <div className="dot">A</div>
                                    <DetailsContainer years='2022' title='Creative Design' textgreen='' description='Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et.'/>
                                    <div className="dot">A</div>
                                </div>
                                <div className="divider"/>
                                <div className="freelancer-services pt-2 pb-2">
                                    <div className="f-s-title flex justify-between">
                                        <h3>Services</h3>
                                        <Link href='' className='text-secondary text-[13px]'>Browse Full List <i className="ri-arrow-right-up-line"></i></Link>
                                    </div>
                                    <div className="f-s-container mt-8 flex gap-8 flex-wrap">
                                            {services.map((serv, index) => {

                                                if (serv.prestatorId == prestator.id) {
                                                    return (<TServiceCard service={serv} prestator={prestator} key={index} />)
                                                }
                                            })}
                                        </div>
                                </div>
                                {/* this freelancer services */}

                                <div className="divider"/>
                                <div className="ratting-area">
                                    <RatingStates ratings={[29, 125, 50, 70, 93]}/>
                                    {/* review stat */}

                                    <div className="review-comment">
                                        <span className="text-bold">Be the first to review “{prestator.fullName}”</span>
                                        <form action="">
                                            <span className="text-small">Your Rating for this listing</span>
                                        
                                            <Rate rating={rating} onRating={(rate: React.SetStateAction<number>) => setRating(rate)} />

                                            <div className="inputs">
                                                <div className="comment-input">
                                                    <span>Your Comment</span>
                                                    <textarea name="" id="" rows={8} placeholder="Comment" ></textarea>
                                                </div>
                                                <div className="name-email-inputs">
                                                    <div className="name-input">
                                                        <span>Your Name</span>
                                                        <input type="text" placeholder="Name" />
                                                    </div>
                                                    <div className="email-input">
                                                        <span>Your Email</span>
                                                        <input type="email" placeholder="Email" />
                                                    </div> 
                                                </div>
                                                <div className="check-box">
                                                    <input type="checkbox"/> 
                                                    <span className="text-small">Save my name, email, and website in this browser for the next time I comment.</span>
                                                </div>
                                                <button type="submit">Submit Review</button>
                                            </div>
                                        </form>
                                        {/* rating & comment form */}
                                    </div>

                                </div>
                            </div>
                            {/* about freelancer */}
                        </div>
                        {/* right component */}
                        <div className="left sticky-r"  style={style} >
                            <FloatingComponent freelancer={prestator}/>
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

  const FloatingComponent = ({freelancer}: {freelancer : PrestatorProps}) => {
    return(
        
        <div className="sticky top-0 flex flex-col gap-3">
            <div className="top-container">
                <div className="top-head"><span className="big">$55 - $60</span><span className="small-text">/hr</span></div>
                <div className="top-body">
                    <div className="icon-text1-text2">
                        <div className="icon-text1"><i className="ri-user-location-line"></i> <span>Location</span></div>
                        <span className="text2">Abidjan</span>
                    </div>
                    <div className="divider"/>
                    <div className="icon-text1-text2">
                        <div className="icon-text1"><i className="ri-file-copy-2-line"></i> <span>Type</span></div>
                        <span className="text2">New Rising Talent</span>
                    </div>
                    <div className="divider"/>
                    <div className="icon-text1-text2">
                        <div className="icon-text1"><i className="ri-translate"></i> <span>English Level</span></div>
                        <span className="text2">Fluent</span>
                    </div>
                    <div className="divider"/>
                    <div className="icon-text1-text2">
                        <div className="icon-text1"><i className="ri-men-line"></i> <span>Gender</span></div>
                        <span className="text2">Male</span>
                    </div>
                    <div className="divider"/>
                    <div className="icon-text1-text2">
                        <div className="icon-text1"><i className="ri-mail-line"></i> <span>Email</span></div>
                        <span className="text2">exemple@gamil.com</span>
                    </div>
                    <div className="divider"/>
                    <div className="icon-text1-text2">
                        <div className="icon-text1"><i className="ri-phone-line"></i> <span>Phone</span></div>
                        <span className="text2">+225 07 000 00 090 0</span>
                    </div>
                    <button>Contact Me <i className="ri-arrow-right-up-line"></i></button>
                </div>
            </div>
            <div className="bottom-container">
                <h3>My Skills</h3>
                <div className="skills">
                    {freelancer.competence.map((skill, index) =>(
                        <div className='skill' key={index}>{skill}</div>
                    ))}
                </div>
            </div>
        </div>
        
        )
  }

  const DetailsContainer = ({years, title, textgreen, description}: {years:string, title:string, textgreen:string, description:string}) => {
    return(
        <div className="details-container flex flex-col gap-1">
            <div className="years">{years}</div>
            <h4 className="title">{title}</h4>
            <span className="text-green">{textgreen}</span>
            <p className="description">{description}</p>
        </div>
    )
  }

export default SingleFreelancer;

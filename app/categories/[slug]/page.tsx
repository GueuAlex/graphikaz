"use client"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { RatingComponent, Wrapper,  } from "@/reutilisables";
import { PathnameComponent } from "@/components";
import { PrestatorProps, ServiceProps } from "@/types";
import { prestators, services } from "@/constants";
import Image from "next/image";
import RatingStates from "@/reutilisables/rating_state"

export default function Page({ params } : { params: {slug: string}}){
    const title = decodeURIComponent(params.slug);
    const service: ServiceProps | undefined = services.find((service) => service.title === title);
    
    
    if (service) {
        const prestator : PrestatorProps | undefined = prestators.find((prestator) => prestator.id === service.prestatorId);
        if (prestator) {
            return ( 
                <div className="single_service_details">
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
                    {/* heading with fil d'ariane */}
        
                    <div className="bannerss relative flex justify-center items-center">
                        <div className=' max-w-[110rem] w-full'>
                            <BannerContainer service={service} prestator={prestator} />
                        </div>
                    </div>
                    <Wrapper>
                        <div className="sigle-service-body relative">
                            <div className="rigth">
                                <div className="service-description">
                                    <div className="desc-head flex gap-14">
                                        <div className="desc flex items-center gap-8">
                                            <div className="icon-large relative"><i className="ri-calendar-2-line text-[2.8em] text-primary"></i> <div className="transparant absolute"></div></div>
                                            <div className="desc-text">
                                                <span>Delivery Time</span><br />
                                                <small>2 Days</small>
                                            </div>
                                        </div>

                                        <div className="desc flex items-center gap-8">
                                            <div className="icon-large relative"><i className="ri-bar-chart-grouped-fill text-[2.8em] text-primary"></i> <div className="transparant absolute"></div></div>
                                            <div className="desc-text">
                                                <span>English level</span><br />
                                                <small>Conversational</small>
                                            </div>
                                        </div>
                                        
                                        <div className="desc flex items-center gap-8">
                                            <div className="icon-large relative"><i className="ri-map-pin-2-line text-[2.8em] text-primary"></i> <div className="transparant absolute"></div></div>
                                            <div className="desc-text">
                                                <span>Location</span><br />
                                                <small>Abidjan</small>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                {/* delivey time, language level, location */}
                                <div className="service-carousel">
                                    <div className="carousel-slider">
                                        <Carousel  className=" w-full">
                                        
                                            {service.coverList.map((cover, index) => (
                                                <div id={`item${index +1}`} className="carousel-item relative w-full">
                                                    <Image src={cover} alt={service.title} className="w-full rounded-[5px]" />
                                                
                                                </div>
                                            ))}

                                        </Carousel>
                                    
                                    </div>
                                    <div className="carousel-miniature flex justify-start w-full py-2 gap-2 mt-2">
                                        {service.coverList.map((cover, index) => (
                                                <div className="carousel-item relative w-[9em] h-[7.5em]">
                                                    <Image src={cover} alt={service.title} className="w-full rounded-[5px]" />
                                                
                                                </div>
                                            ))} 
                                    </div>
                                </div>
                                {/* service carousel */}
                                <div className="service-description">
                                    <div className="descriptions">
                                        <h2>Service Description</h2>
                                        <p className="text-small">
                                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.
                                        </p>
                                        <div className="other-provide-services">
                                            <span>Services I provide</span>
                                            <ul>
                                                <li>1{`)`} Website Design</li>
                                                <li>2{`)`} Mobile App Design</li>
                                                <li>3{`)`} Brochure Design</li>
                                                <li>4{`)`} Business Card Design</li>
                                                <li>5{`)`} Flyer Design</li>
                                            </ul>
                                        </div>
                                        <p className="text-small">
                                            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.
                                        </p>
                                        <div className="work-tools flex justify-start gap-6">
                                            
                                            <div className="item">
                                                <strong>App type</strong>
                                                <p className="text-small">
                                                    Business, Food & drink,<br />
                                                    Graphics & design
                                                </p>
                                            </div>

                                            <div className="item">
                                                <strong>Design tool</strong>
                                                <p className="text-small">
                                                    Adobe XD, Figma,<br />
                                                    Adobe Photoshop
                                                </p>
                                            </div>

                                            <div className="item">
                                                <strong>Device</strong>
                                                <p className="text-small">
                                                    Mobile, Desktop
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    {/* aaccordeon */}
                                    <div className="divider"/>
                                        <div className="accordeon">
                                        
                                            <div className="collapse collapse-plus bg-green-50 rounded-none">
                                                <input type="radio" name="my-accordion-3" checked /> 
                                                <div className="collapse-title text-xl font-medium">
                                                    What methods of payment are supported ?
                                                </div>
                                                <div className="collapse-content"> 
                                                    <p className="text-small">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.</p>
                                                </div>
                                            </div>
                                            <div className="collapse collapse-plus">
                                                <input type="radio" name="my-accordion-3" /> 
                                                <div className="collapse-title text-xl font-medium">
                                                    Can I cancel at anytime ?
                                                </div>
                                                <div className="collapse-content"> 
                                                    <p className="text-small">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et.</p>
                                                </div>
                                            </div>
                                            <div className="collapse collapse-plus">
                                                <input type="radio" name="my-accordion-3" /> 
                                                <div className="collapse-title text-xl font-medium">
                                                    How do I get a receipt for my purchase ?
                                                </div>
                                                <div className="collapse-content"> 
                                                    <p className="text-small">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                                </div>
                                            </div>
                                            <div className="collapse collapse-plus">
                                                <input type="radio" name="my-accordion-3" /> 
                                                <div className="collapse-title text-xl font-medium">
                                                    How do I get access to a theme I purchased ?
                                                </div>
                                                <div className="collapse-content"> 
                                                    <p className="text-small">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                                </div>
                                            </div>
                                        </div>  
                                    <div className="divider"/>
                                </div>
                                {/* service description */}
                                <div className="ratting-area">
                                <RatingStates ratings={[29, 125, 50, 70, 93]}/>
                                {/* rating statistic */}

                                <div className="review-comment">
                                    <span className="text-bold">Be the first to review “{title}”</span>
                                    <form action="">
                                        <span className="text-small">Your Rating for this listing</span>
                                        <RatingComponent/>
                                        <div className="inputs">
                                            <div className="comment-input">
                                                <span>Your Comment</span>
                                                <textarea name="" id="" cols={30} placeholder="Comment" ></textarea>
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
                            

                            <div className="left sticky-r">
                                <div className="sticky top-0">
                                    <div className="options-container shadow">
                                        <h2>${service.startPrice}</h2>
                                        {service.additionnalOptions.map((option) => (
                                            <div className="single-option">
                                                <div className="flex items-center gap-3">
                                                    <input type="checkbox"  className="checkbox checkbox-success" />
                                                    <span className="label-text">{option.slug}</span>
                                                </div>
                                                <h3>${option.quota}</h3>
                                               
                                            </div>
                                        ))}
                                        <button type="button" className="first-chirld">Buy Now ${service.startPrice} <i className="ri-arrow-right-up-line"></i></button>
                                    </div>
                                    <div className="prestator-infos shadow">
                                        <h3>About The Seller</h3>
                                        <div className="pretator-profil items-center flex gap-3 mt-3">
                                            <div className=" object-cover w-[30%] h-[6em]  rounded-full">
                                                <Image src={prestator.profilPic} alt={prestator.fullName} className="object-cover rounded-full"/>
                                            </div>
                                            <div className="flex flex-col justify-center items-center">
                                                <h3>{prestator.fullName}</h3>
                                                <small>Product Manager</small>
                                                <div className="reviews"><i className="ri-star-fill text-yellow-500"></i> {service.reviewScore} {`(`}{service.totalReview}{` Reviews)`}</div>
                                            </div>
                                        </div>
                                       <div className="divider"></div>
                                       <div className="flex justify-between meta">
                                          <div className="location">
                                            <span>Location</span><br /><small>Abidjan</small>
                                          </div>
                                          <div className="rate">
                                            <span>Rate:</span><br /><small>$55 - $60 / hr</small>
                                          </div>
                                       </div>
                                       <button type="button">Contact Me  <i className="ri-arrow-right-up-line"></i></button>
                                    </div>
                                </div>
                            </div>
                            {/* sticky asside */} 
                        </div>
                    </Wrapper>
                   
                </div>
            );
        }
    }
    
}

const BannerContainer = ({ service, prestator }: { service: ServiceProps, prestator: PrestatorProps }) => {
    
    return (
      <div className="banner w-full max-h-[18rem]">
        <Wrapper>
            < h2 className="banner-title text-[2em]">{service.title}</h2>
            <div className="subtitle flex gap-7 items-center mt-5">
                <div className="prestator flex items-center gap-2">
                    <div className="h-[3em] w-[3em] border rounded-full object-contain">
                        <Image src={prestator.profilPic} alt={prestator.fullName}  className="rounded-full"/>
                    </div>
                    <h4>{prestator.fullName}</h4>
                </div>
                <div className="reviews"><i className="ri-star-fill text-yellow-500"></i> {service.reviewScore} {`(`}{service.totalReview}{` Reviews)`}</div>
                <div className="views"><i className="ri-eye-line"></i> 4578 views</div>
            </div>
        </Wrapper>
       </div>
    )
  }
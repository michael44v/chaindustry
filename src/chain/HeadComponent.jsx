import React from "react";
import { useState } from 'react';
import '../index.css';
import Vector from './img/Vector.svg';
import user from './img/user.svg';
import globe from './img/globe.svg';
import bell from './img/bell.svg';
import mobile_ico from './img/mobile_ico.png';
import ham from './img/ham.png';

const HeadComponent = () => {
    const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(!open);

    return (
        <>
          <div className="container-fluid cont"  >
                <div className="row laptop_head " style={{width:'110vw', paddingTop:'1%'}}>
                    <div className="col-sm-3">
                        <div className="app_logo">
                            <img src={Vector} alt="Sample" className="image" />
                        </div>
                         </div>
                     <div className="col-sm-6 submn">
                        <select>
                            <option>Explore</option>
                            <option>Others</option>
                        </select>

                        <span>My Learning</span>

                        <span>Schedule</span>

                        <input type="search" placeholder='What do you want to learn? '/>
                        <button><i className="fa fa-search" style={{ fontSize: '18px', color: '#fff', fontWeight:'100' }}></i>
                        </button>
                    </div>
                    
                        <img src={globe} alt="Image 1" style={{ width: '33px', height: 'auto' }} />
                        <img src={bell} alt="Image 2" style={{ width: '33px', height: 'auto' }} />
                        <img src={user} alt="Image 3" style={{ width: '33px', height: 'auto' }} />
                    
                </div>

                 <div className="row mobile_head" style={{ marginTop:'5%'}}>

                    <div className="left">
                         <div className="app_logo">
                            <img src={mobile_ico} alt="Sample" className="icon_mobile" />
                        </div>
                    </div>

                <div className="right">
                     {/*implement Dropdown Menu here..*/}
                      <div className="app_logo" onClick={toggleMenu} style={{ cursor: 'pointer' }}>
                         <img src={ham} alt="Hamburger Menu" className="ham" style={{ width: '40px' }} />
                     </div>
                    
                 </div>



                </div>
          </div>
        </>
    )
}
export default HeadComponent;
import React from "react";
import { useState } from "react";
import HeadComponent from "./HeadComponent";
import Footer from "./FooterComponent";
import Margin from './img/Margin.png';
import TodayClasses from "./TodayClasses";
const Home = () => {

    const [activeIndex, setActiveIndex] = useState(0);

 const contents = [
    <div key="0">
     <TodayClasses/>
    </div>,
    <div key="1">
      <h2>This Week</h2>
      <p>Content for This Week.</p>
    </div>,
    <div key="2">
      <h2>All content</h2>
      <p>Content for All.</p>
    </div>,
  ];
    return (
        <>
            <body>
            <HeadComponent />
           <div className="container_fluid homepg">
                <div className="schedule_overview">
                        <h4 style={{marginLeft:'2%'}}>Live Class Schedule Flow</h4>
                        <div className="row box_view">
                            <h5><img src={Margin}/> Schedule Overview</h5>

                            <div className="col-sm-12 classes">
                                <div className="col-sm-9">
                                    My Live Classes
                                </div>
                                <div className="col-sm-3 date_form" style={{ display: 'flex', gap: '15px', cursor: 'pointer' }}>
        {['Today', 'This Week', 'All'].map((label, idx) => (
          <span
            key={idx}
            className={activeIndex === idx ? 'active_link' : ''}
            onClick={() => setActiveIndex(idx)}
            style={{ userSelect: 'none' }}
          >
            {label}
          </span>
        ))}
      </div>
                           

                         <div className="col-sm-12 space" 
                                style={{
                                    marginTop: '20px',
                                    height: '200px',       // fixed height
                                    maxHeight: '200px',    // max height also 200px (optional since height fixed)
                                    minHeight: '200px',    // min height 700px (optional)
                                    overflowY: 'auto',     // vertical scrollbar if content overflows height
                                }}
                                >
                                {contents[activeIndex]}
                        </div>
                     </div>

                     {/** new div starts */}
                     <div className="col-sm-12 next_lesson">
                        <div className="col-sm-4">
                            <div className="contents">
                                <span><b>Calender Integration</b><br/></span>
                                <span>Sync with Google Calendar, Outlook, or Apple Calendar</span>
                            </div>
                        </div>

                         <div className="col-sm-4">
                            <div className="contents">
                                <span><b>Calender Integration</b><br/></span>
                                <span>Sync with Google Calendar, Outlook, or Apple Calendar</span>
                            </div>
                        </div>

                         <div className="col-sm-4">
                            <div className="contents">
                                <span><b>Calender Integration</b><br/></span>
                                <span>Sync with Google Calendar, Outlook, or Apple Calendar</span>
                            </div>
                        </div>
                     </div>
                </div>
             </div>
                    
            </div>
            <Footer/>
            </body>
        </>
    )
}
export default Home;
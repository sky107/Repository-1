import React from 'react';
import './ViewEventPage.scss';
import { Button, neutralColors, primaryColors, secondaryColors, SoftCard } from '@envited-workspace/shared-ui'
import { Navigate, useNavigate, useNavigation } from 'react-router-dom';
import EventImageSvg from 'apps/envited-react-app/src/assets/svgs/EventImageSvg';
import { IoCalendarOutline,IoLocationOutline,IoChevronForward } from "react-icons/io5";
import { GrFormLocation } from "react-icons/gr";
const BANNER_IMAGE_URL = '/assets/banner-icon.png';
export default function ViewEventPage() {


    const navigate = useNavigate();



const MENUS=[{
    leftIcon:<IoCalendarOutline size={"30"} color={primaryColors.purple}/>,
    heading:'18 August 6:00PM',
    description:'to 19 August 1:00PM UTC +10',
    rightIcon:<IoChevronForward size={"30"} color={neutralColors.gray2} style={{alignSelf:'center'}}/>
},{
    leftIcon:<IoLocationOutline size={"30"} color={primaryColors.purple}/>,
    heading:'Street name',
    description:'Suburb, State, Postcode',
    rightIcon:<IoChevronForward size={"30"} color={neutralColors.gray2} style={{alignSelf:'center'}}/>
}]














    return (<div className="container">
       
            <div className="event-description-block">


                <h1>
                    Birthday Bash
                </h1>

                <p>Hosted by Elysia</p>

                <div className='cards-container'>

{
    MENUS.map((element,index)=> (<SoftCard key={`menu-${index}`} style={{display:'flex',justifyContent:'space-between'}}>
       
       <div style={{display:'flex',flexDirection:'row'}}>
       <SoftCard style={{backgroundColor:'#fff',padding:20,borderRadius:10}}>
    {element.leftIcon}
    </SoftCard>
    <div style={{paddingLeft:16,paddingTop:5}}>
        <strong>
            {element.heading}
            </strong>
        <p>{element.description}</p>
    </div>
       </div>
   
    {element.rightIcon}
        
    </SoftCard>))
}



            </div>
           

        </div>






        <div className="event-image-block">
            <EventImageSvg />
        </div>


    </div>);
}



import React from 'react';
import './LandingPage.scss';
import { Button, primaryColors, secondaryColors, SoftCard } from '@envited-workspace/shared-ui'
import { Navigate, useNavigate, useNavigation } from 'react-router-dom';
import CreateEventPage from '../CreateEventPage/CreateEventPage';

const BANNER_IMAGE_URL = '/assets/banner-icon.png';
export default function LandingPage() {

    const [open, setOpen] = React.useState(false);
    const navigate = useNavigate();

    return (<div className="container">
        <CreateEventPage open={open} setOpen={setOpen}/>
        <div className="banner-description-wrapper small-view-replica-element">
            <Button onClick={()=>setOpen(true)}> 🎉 Create my event</Button>
        </div>

        <div className="banner-image-card-wrapper">
           
            <img src={BANNER_IMAGE_URL} />
      
        </div>

        <div className="banner-description-wrapper">

            <div style={styles.bannerText}>
                Imagine if
            </div>
            <div className='text-snapchat'>
                Snapchat
            </div>
            <div style={styles.bannerText}>had events. </div>
            <div className="text-paragraph">
                Easily host and share events with your friends <br />across any social media.
            </div>
            <div className="banner-description-wrapper banner-btn">

            <Button onClick={()=>setOpen(true)}> 🎉 Create my event</Button>
            </div>

        </div>





    </div>);
}


const styles = {
    bannerText: {
        fontFamily: 'Helvetica',
        fontSize: '64px',
        color: primaryColors.navyBlue,
        fontWeight: '550'
    },
    snapChatText: {
        fontFamily: 'Helvetica',
        fontSize: '64px',
        fontWeight: '550',
        backgroundImage: 'linear-gradient(45deg, #f3ec78, #af4261)',
        backgroundClip: 'text',
        textFillColors: 'transparent'
    }
}
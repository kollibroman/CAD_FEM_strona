import {Fade} from 'react-slideshow-image'

function SlideShow({images}) {
    return (
        <div  className="slideshow-container">
            <Fade>
                <div className="each-slide">
                    <img src='LOGO.png'/>
                </div>
                <div className="each-slide">
                    <img src='person.png'/>
                </div>
                <div className="each-slide">
                    <img src='person.png'/>
                </div>
            </Fade>
        </div>
    );
};

export default SlideShow;

// const images = [
//     "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
//     "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
//     "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
// ];
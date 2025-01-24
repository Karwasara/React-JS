import React, {useState} from 'react'


export default function About(props) {
    // const[myStyle,setMyStyle]=useState({
    //     color: 'black',
    //     background: 'white'
    // })
    let myStyle = {
        color: props.mode ==='dark'?'white':'black',
        backgroundColor:props.mode==='dark'?'#14376a':'white',
        //border: '2px solid',
        //borderColor:props.mode ==='dark'?'white':'black'
    }

    // const [btntext, setbtext]=useState("Enable dark mode");
    // const togglestyle=()=>{
    //     if(myStyle.color==='black')
    //     {
    //         setMyStyle({
    //             color: 'white',
    //             background: 'black',
    //             border: '1px solid white'
    //         })
    //         setbtext("Enable light mode");
    //     }
    //     else
    //     {
    //         setMyStyle({
    //             color: 'black',
    //             background: 'white'
    //         })
    //         setbtext("Enable dark mode");
    //     }
    // }
  return (
    <div className='container my-1' >
        <h1 className="my-3" style={{color: props.mode==='dark'?'white':'black'}}>About Us</h1>
                <div className="accordion" id="accordionExample">
            <div className="accordion-item" style={myStyle}>
                <h2 className="accordion-header">
                <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                <strong>Our Mission: Enhancing Lives Through Quality Healthcare</strong>
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                At the heart of our medical web platform is a mission to provide accessible, reliable, and comprehensive healthcare services for everyone. We strive to empower individuals by connecting them with top-tier medical professionals, innovative health solutions, and the latest advancements in medical care. Whether you are seeking preventative care, managing chronic conditions, or exploring new treatment options, our platform is designed to cater to your unique needs.
                </div>
                </div>
            </div>
            <div className="accordion-item" style={myStyle}>
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                <strong>Advanced Technology for Modern Healthcare Needs</strong>
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                Our platform leverages cutting-edge technology to simplify and enhance the healthcare experience. With features such as telemedicine consultations, personalized health dashboards, and AI-powered symptom checkers, we aim to bridge the gap between patients and providers. Our secure infrastructure ensures that your data is protected while enabling seamless communication with healthcare experts. By integrating innovation into healthcare, we make it easier for you to stay informed and proactive about your well-being.
                </div>
                </div>
            </div>
            <div className="accordion-item" style={myStyle}>
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                <strong>Commitment to Community and Compassionate Care</strong>
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                We believe that healthcare is not just about treatments; it is about building a healthier, happier community. Our platform prioritizes compassion and understanding, ensuring that every patient feels heard and supported. Through educational resources, wellness programs, and a dedicated support team, we foster a culture of trust and inclusivity. Together, we can make healthcare more than a necessity—it can be a path to a fulfilling and vibrant life.
                </div>
                </div>
            </div>
            </div>
            {/* <div className='container my-2'>
            <button onClick={togglestyle} type="button" className="btn btn-primary" >{btntext}</button>
            </div> */}
    </div>
  )
}

//best way - using JS variables - terinary operators are more readable

function HolidayPackage(props){

    const summarPackage = <div className="card">
                <video src="https://www.piesendorf.at/videos/TVB_Piesendorf_Sommer_2025.mp4" controls autoplay muted></video>
                <h1>Summer in Piesendorf Niedernsill</h1>
                <p>For those who simply like to feel good. Where tradition and modernity go hand in hand... Our two picturesque holiday resorts, Piesendorf Niedernsill in the heart of the Austrian Alps and on the sunny side of Zell am See-Kaprun, are certified "Austrian Hiking Villages". </p>
            </div>;

    const winterPackage = <div className="card">
                <video src="https://videos.pexels.com/video-files/1858244/1858244-uhd_2732_1440_24fps.mp4" autoplay controls muted></video>
                <h1>Winter Holidays</h1>
                <p>Europe offers a variety of winter holiday options, from snowy landscapes and skiing in the Alps to vibrant city breaks and festive Christmas markets. Popular choices include exploring historic cities like Prague, Budapest, and Vienna, experiencing the Northern Lights in Iceland or Norway, or enjoying winter sports in Switzerland or the Italian Dolomites. </p>
            </div>
    
        

    return props.name === "Summar" ? summarPackage : winterPackage



}

export default HolidayPackage
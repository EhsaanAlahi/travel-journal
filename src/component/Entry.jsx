import marker from "../assets/marker.png"
export default function Entery(props) {
    return (
        <article className="jornal-entery">
            <div className="image-container">
                <img
                    className="main-image"
                    src={props.img.src}
                    alt={props.img.alt} 
                />
            </div>
            <div className="info-container">
                <img className="marker" src={marker} alt="marker point" />
                <span className="country">{props.country}</span>
                <a href={props.googleMapsLink} target="_blank">View on google map</a>
                <h2 className="title">{props.title}</h2>
                <p className="tip-date">{props.date} </p>
                <p className="trip-discription">{props.description}</p>
            </div>
        </article>
    );
}
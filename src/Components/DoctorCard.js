

const DoctorCard = ({name, specialization, imageLink, isNew}) => {
    return ( 
        <div className="doctor-card">
            <div id="doctor-left">
                <p className="doc-name">Dr. {name}</p>
                <p className="doc-specialization">{specialization}</p>
                <a className="doctor-link" href="#"><svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="20.6849" cy="20.6849" r="20.6849" fill="#330000"/>
<path d="M29.7422 12.7292C29.7422 11.9008 29.0706 11.2292 28.2422 11.2292H14.7422C13.9138 11.2292 13.2422 11.9008 13.2422 12.7292C13.2422 13.5576 13.9138 14.2292 14.7422 14.2292H26.7422V26.2292C26.7422 27.0576 27.4138 27.7292 28.2422 27.7292C29.0706 27.7292 29.7422 27.0576 29.7422 26.2292V12.7292ZM13.7892 29.3035L29.3029 13.7898L27.1816 11.6685L11.6679 27.1822L13.7892 29.3035Z" fill="#FFE5D0"/>
</svg></a>
            </div>
            <div id="doctor-right">
                <img className="doc-icon" src={imageLink}></img>
            </div>
    
        </div>
     );
}
 
export default DoctorCard;
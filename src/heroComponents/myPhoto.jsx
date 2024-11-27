import "./myPhoto.css";
import myPhoto from "./photo/Dravis-removebg-preview.png";

function MyPhoto() {
    return (
        <div className="photoContainer">
            <img alt="MyPhoto" src={myPhoto} className="myPhoto" />
            <div className="blurBottom"></div>
            <div className="myNameIntro">{'Kennedy Ngovi Kamau' || user.getName()}</div>
        </div>
    );
}

export default MyPhoto;

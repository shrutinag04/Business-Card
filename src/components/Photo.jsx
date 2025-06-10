import myPicture from '../assets/myPicture.jpg'
export default function Photo(){
    return (
        <div id="ctn-image">
        <img src={myPicture}></img>
        </div>
    );
}
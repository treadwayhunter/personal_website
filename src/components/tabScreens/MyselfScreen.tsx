
import '../../styles/MyselfScreen.css';
import VerticalDivider from "../custom/VerticalDivider";
import ImageGallery from "../imageGallery/ImageGallery";

const MyselfScreen = () => {
    return (
      <div className='myself-screen'>
          <div className="myself-screen-left">
              <div className="image-container">
                  <ImageGallery/>
              </div>
          </div>
          <VerticalDivider />
          <div className="myself-screen-right">
              <span>Start working on this</span>
          </div>
      </div>
    );
}

export default MyselfScreen;
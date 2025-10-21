import image1 from '../../assets/images/graduate001.jpg';
import '../../styles/MyselfScreen.css';

const MyselfScreen = () => {
    return (
      <div className='myself-screen'>
          <div className="myself-screen-left">
              <div className="image-container">
                  <img src={image1}/>
              </div>
          </div>
          <div className="vertical-divider">
              <div/>
          </div>
          <div className="myself-screen-right">
              <span>Start working on this</span>
          </div>
      </div>
    );
}

export default MyselfScreen;
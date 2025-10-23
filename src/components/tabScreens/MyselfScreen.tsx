
import '../../styles/MyselfScreen.css';
import VerticalDivider from "../custom/VerticalDivider";
import ImageGallery from "../imageGallery/ImageGallery";
import {useEffect, useState} from "react";

const MyselfScreen = () => {

    const [text, setText] = useState<string>("");

    useEffect(() => {
        fetch('/test.txt')
            .then(res => res.text())
            .then(data => setText(data));
    }, []);

    return (
      <div className='myself-screen'>
          <div className="myself-screen-left">
              <div className="image-container">
                  <ImageGallery/>
              </div>
          </div>
          <VerticalDivider />
          <div className="myself-screen-right">
              <span>{text}</span>
          </div>
      </div>
    );
}

export default MyselfScreen;
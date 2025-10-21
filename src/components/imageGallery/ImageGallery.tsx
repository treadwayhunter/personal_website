import image1 from '../../assets/images/graduate001.jpg';
import image2 from '../../assets/images/graduate002.jpg';
import {useEffect, useState} from "react";

const images = [image1, image2]

const ImageGallery = () => {
    const [imagesIndex, setImagesIndex] = useState<number>(0);

    useEffect(() => {
        setInterval(() => {
            if (imagesIndex < images.length - 1) {
                setImagesIndex(imagesIndex + 1);
            }
            else {
                setImagesIndex(0);
            }
        }, 10000);
    }, [imagesIndex]);

    return (
        <img
            src={images[imagesIndex]}
        />
    );
}

export default ImageGallery;
import image1 from '../../assets/images/graduate001.jpg';
import image2 from '../../assets/images/graduate002.jpg';
import {useEffect, useState} from "react";
import '../../styles/ImageGallery.css';

const images = [image1, image2]

const ImageGallery = () => {
    const [imagesIndex, setImagesIndex] = useState<number>(0);
    const [isFading, setIsFading] = useState<boolean>(false);

    useEffect(() => {
        const id = setInterval(() => {
            setIsFading(true);

            setTimeout(() => {
                setImagesIndex(i => (i + 1) % images.length);
                setIsFading(false);
            }, 800);
        }, 10_000);

        return() =>  clearInterval(id);
    }, []);

    return (
        <img
            className={`image_gallery ${isFading ? 'hidden' : ''}`}
            src={images[imagesIndex]}
            alt={""}
        />
    );
}

export default ImageGallery;
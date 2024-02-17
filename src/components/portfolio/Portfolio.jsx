import { useEffect, useState } from 'react';
import styles from '../../styles/Portfolio.module.css';

const Portfolio = () => {
    const [photoDimensions, setPhotoDimensions] = useState([]);
    const [windowWidth, setWindowWidth] = useState(0);
    const [photoRows, setPhotoRows] = useState([]);

    const photos = [
        '/portfolio/one.jpg',
        '/portfolio/two.jpg',
        '/portfolio/three.jpg',
        '/portfolio/four.jpg',
        '/portfolio/five.jpg',
        '/portfolio/six.jpg',
        '/portfolio/seven.jpg',
        '/portfolio/eight.jpg',
        '/portfolio/nine.jpg',
        '/portfolio/ten.jpg',
        '/portfolio/one.jpg',
        '/portfolio/two.jpg',
        '/portfolio/three.jpg',
        '/portfolio/four.jpg',
        '/portfolio/five.jpg',
        '/portfolio/six.jpg',
        '/portfolio/seven.jpg',
        '/portfolio/eight.jpg',
        '/portfolio/nine.jpg',
        '/portfolio/ten.jpg',
        '/portfolio/one.jpg',
        '/portfolio/two.jpg',
        '/portfolio/three.jpg',
        '/portfolio/four.jpg',
        '/portfolio/five.jpg',
        '/portfolio/six.jpg',
        '/portfolio/seven.jpg',
        '/portfolio/eight.jpg',
        '/portfolio/nine.jpg',
        '/portfolio/ten.jpg',
    ];

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth || document.documentElement.clientWidth);
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        const getPhotoDimensions = async () => {
            const dimensions = await Promise.all(
                photos.map((photoSrc) => {
                    return new Promise((resolve) => {
                        const img = new Image();
                        img.src = photoSrc;
                        img.onload = () => {
                            resolve({
                                src: photoSrc,
                                width: img.width,
                                height: img.height,
                            });
                        };
                    });
                })
            );

            setPhotoDimensions(dimensions);
        };

        getPhotoDimensions();
    }, []);

    function findHeightAndImages(screenWidth, images) {
        let maxHeight = 600;
        while (maxHeight >= 300) {
            let currentHeight = maxHeight;
            let currentWidthSum = 0;
            let currentImages = [];

            for (let i = 0; i < images.length; i++) {
                const aspectRatio = images[i].width / images[i].height;
                const scaledWidth = Math.round(currentHeight * aspectRatio);
                currentWidthSum += scaledWidth;
                currentImages.push({ ...images[i], height: currentHeight });
            }

            if (Math.abs(currentWidthSum - screenWidth) <= 5) {
                return { images: currentImages, height: currentHeight };
            }

            maxHeight--;
        }

        for (let i = images.length - 1; i >= 0; i--) {
            let remainingImages = images.slice(0, i);
            let result = findHeightAndImages(screenWidth, remainingImages);

            if (result) {
                return result;
            }
        }

        return null;
    }

    function calculatePhotoRows() {
        if (windowWidth <= 800) {
            const slicedPhotos = photos.slice(0, 5);
            setPhotoRows([slicedPhotos.map((src) => ({ src, height: 'auto' }))]);
        } else {
            let remainingImages = [...photoDimensions];
            let rows = [];

            while (remainingImages.length > 0) {
                const result = findHeightAndImages(windowWidth - 100, remainingImages);
                if (result) {
                    rows.push(result.images);
                    remainingImages = remainingImages.slice(result.images.length);
                } else {
                    break;
                }
            }

            setPhotoRows(() => rows);
        }
    }

    useEffect(() => {
        calculatePhotoRows();
    }, [photoDimensions, windowWidth]);

    return (
        <div id="portfolio" className={styles.portfolioContainerWrap}>
            <h1>Наше Портфолио</h1>
            {photoRows.map((row, rowIndex) => (
                <div key={rowIndex} className={styles.portfolioContainer}>
                    {row.map((image, index) => (
                        <img key={index} src={image.src} alt={`Image ${index}`} height={image.height} />
                    ))}
                </div>
            ))}
						<div className={styles.smallScreen}>
							<img src={photos[0]}/>
							<img src={photos[1]}/>
							<img src={photos[2]}/>
							<img src={photos[3]}/>
							<img src={photos[4]}/>
						</div>
        </div>
    );
};

export default Portfolio;

import React, { useEffect, useState } from 'react';
import one from '../portfolio/portfolio/one.jpg'
import two from '../portfolio/portfolio/two.jpg'
import three from '../portfolio/portfolio/three.jpg'
import four from '../portfolio/portfolio/four.jpg'
import five from '../portfolio/portfolio/five.jpg'
import six from '../portfolio/portfolio/six.jpg'
import seven from '../portfolio/portfolio/seven.jpg'
import eight from '../portfolio/portfolio/eight.jpg'
import nine from '../portfolio/portfolio/nine.jpg'
import ten from '../portfolio/portfolio/ten.jpg'
import '../portfolio/Portfolio.css'

const Portfolio = () => {
	const [photoDimensions, setPhotoDimensions] = useState([]);
	const [windowWidth, setWindowWidth] = useState(window.innerWidth || document.documentElement.clientWidth);
	const [photoRows, setPhotoRows] = useState([]);

	const photos = [one, two, three, four, five, six, seven, eight, nine, ten,
		one, two, three, four, five, six, seven, eight, nine, ten,
		one, two, three, four, five, six, seven, eight, nine, ten,
	];

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
	
			setPhotoDimensions(() => dimensions);
		};
	
		getPhotoDimensions();
	}, []); 

	useEffect(() => {
		const handleResize = () => {
			setWindowWidth(window.innerWidth || document.documentElement.clientWidth);
		};

		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
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
		<div className='portfolio-container__wrap'>
			<p>Наше Портфолио</p>
			{photoRows.map((row, rowIndex) => (
				<div key={rowIndex} className='portfolio-container'>
					{row.map((image, index) => (
						<img key={index} src={image.src} alt={`Image ${index}`} height={image.height} />
					))}
				</div>
			))}
		</div>
	);
};

export default Portfolio;

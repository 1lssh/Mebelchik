import { useEffect, useState } from 'react';
import FsLightbox from 'fslightbox-react';
import { Link } from 'react-router-dom';
import { ImgSkeleton } from './ImgSkeleton';
import photosJson from '../assets/photos.json';

export const Gallery = () => {
	const [lightboxController, setLightboxController] = useState({
		toggler: false,
		source: null
	});

	const [photos, setPhotos] = useState([]);



	useEffect(() => {
		const timer = setTimeout(() => {
			setPhotos(photosJson);
		}, 1000)
		return () => clearTimeout(timer)
	}, []);


	const openLightboxOnSource = (sourceUrl) => {
		setLightboxController({
			toggler: !lightboxController.toggler,
			source: sourceUrl
		})
	}

	console.log(photos)
	return (
		<div>
			<div className='img-grid'>
				{photos.length
					?
					photos.slice(0, 12).map((photo) => (
						<div
							key={photo.id}
							className='img-wrap'
						>
							<img className='img' src={photo.url} onClick={() => openLightboxOnSource(photo.url)} alt="" />

						</div>
					))
					:
					Array(12).fill(<ImgSkeleton className='skeleton' />).map((skeleton, index) => (
						<div
							key={index}
							className='img-wrap'
						>
							{skeleton}
						</div>
					))
				}

				<FsLightbox
					toggler={lightboxController.toggler}
					source={lightboxController.source}
					sources={photos.map((p) => {
						return p.url
					})}
					exitFullscreenOnClose
				/>
			</div>
			<div className='btn-wrapper'>
				<Link to='/gallery'><button className='gallery-btn'>Посмотерть ещё</button></Link>
			</div>
		</div>
	);
}


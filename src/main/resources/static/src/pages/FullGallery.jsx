import { useEffect, useMemo, useState } from "react";
import FsLightbox from 'fslightbox-react';
import Pagination from "../components/Pagination";
import UploadForm from "../components/UploadForm";
import photosJson from '../assets/photos.json'
import deleteIco from '../assets/remove.png'
import { ImgSkeleton } from "../components/ImgSkeleton";


let PageSize = 12;

function FullGallery({ isAdmin }) {
	const [lightboxController, setLightboxController] = useState({
		toggler: false,
		source: null
	});

	const [photos, setPhotos] = useState([])
	const [currentPage, setCurrentPage] = useState(1);

	useEffect(() => {
		const timer = setTimeout(() => {
			setPhotos(photosJson);
		}, 1000)
		return () => clearTimeout(timer)
	}, []);

	useEffect(() => {
		window.scrollTo(0, 0)
	}, [currentPage])

	const deletePhotoHandler = (id) => {
		const conf = window.confirm('Удалить изображение?')
		conf && setPhotos(photos.filter(photo => photo.id !== id))

	}

	const openLightboxOnSource = (sourceUrl) => {
		setLightboxController({
			toggler: !lightboxController.toggler,
			source: sourceUrl
		})
	}


	const currentData = useMemo(() => {
		const firstPageIndex = (currentPage - 1) * PageSize;
		const lastPageIndex = firstPageIndex + PageSize;
		return photos.slice(firstPageIndex, lastPageIndex);
	}, [currentPage, photos]);

	return (
		<div>
			{isAdmin && <UploadForm photos={photos} setPhotos={setPhotos} />}
			<Pagination
				className="pagination-bar"
				currentPage={currentPage}
				totalCount={photos.length}
				pageSize={PageSize}
				onPageChange={page => setCurrentPage(page)}
			/>
			<div className='img-grid'>
				{
					photos.length ?
						currentData.map((photo) => (
							<div
								key={photo.id}
								className='img-wrap'
							>
								<img className="img" src={photo.url} onClick={() => openLightboxOnSource(photo.url)} alt="" />
								{
									isAdmin && <img alt="Удалить" src={deleteIco} className="delete-btn" onClick={() => { deletePhotoHandler(photo.id) }} />
								}

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
			<Pagination
				className="pagination-bar"
				currentPage={currentPage}
				totalCount={photos.length}
				pageSize={PageSize}
				onPageChange={page => setCurrentPage(page)}
			/>
		</div>
	)
}

export default FullGallery

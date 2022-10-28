import { React, useState, useEffect } from 'react'

const UploadForm = ({ setPhotos, photos }) => {
	const [file, setFile] = useState(null)
	const [preview, setPreview] = useState(null)
	const [description, setDescription] = useState('')
	const [error, setError] = useState(null)

	const types = ['image/png', 'image/jpeg']

	const reader = new FileReader()

	useEffect(() => {
		if (file) {
			reader.onloadend = () => {
				setPreview(reader.result)
			}
			reader.readAsDataURL(file)
		} else {
			setPreview(null)
		}
		console.log(photos)
	}, [file])

	const submit = () => {
		setPhotos(prev => [
			{
				url: preview,
				id: Date.now().toString(),
				desc: description
			},
			...prev
		])
		setPreview(null)
		setFile(null)
		setDescription('')
	}

	const changeHandler = (e) => {
		let selected = e.target.files[0]
		if (selected && types.includes(selected.type)) {
			setError('')
			setFile(selected)

		} else {
			setFile(null)
			setError('Выберите файл png или jpeg')
		}
	}

	const inputChangeHandler = (e) => {
		let text = e.target.value
		setDescription(text)
	}

	return (
		<>
			{
				file &&
				<div className='preview'>
					<img alt='Предпросмотр' src={preview} />
				</div>
			}
			{
				preview &&
				<>
					<div>
						<textarea value={description} onChange={inputChangeHandler} placeholder='Описание' name="" id="" cols="30" rows="1" />
					</div>

					<button onClick={submit}>Загрузить</button>
					<button onClick={() => setFile(null)}>Отмена</button>
				</>
			}

			<form>
				<input type="file" onChange={changeHandler} />
				<div>
					{error && <div>{error}</div>}
					{file && <div>{file.name}</div>}
				</div>
			</form>
		</>
	)
}

export default UploadForm
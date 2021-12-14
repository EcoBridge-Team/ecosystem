import { useState } from 'react'

interface InputFileProps {
  name?: string
  value?: string
}

export default function InputFile(props: InputFileProps) {
  const [selectedFile, setSelectedFile] = useState()
  const [isSelected, setIsSelected] = useState(false)
  const [result, setResult] = useState('')

  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0])
    setIsSelected(true)
  }

  const submitHandler = () => {
    if (!isSelected) {
      alert('No hay archivo seleccionado')
      return
    }

    const formData = new FormData()

    formData.append('img', selectedFile)

    fetch('http://localhost:8000/ocr', {
      method: 'POST',
      body: formData,
    })
      .then((response) => response.json())
      .then((result) => setResult(result.Resultado))
      .catch((err) => alert(err.message))
  }

  return (
    <>
      <div className="mt-10 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
        <div className="space-y-1 text-center">
          <svg
            className="mx-auto h-12 w-12 text-gray-400"
            stroke="currentColor"
            fill="none"
            viewBox="0 0 48 48"
            aria-hidden="true"
          >
            <path
              d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <div className="flex text-sm text-gray-600">
            <label
              htmlFor="file-upload"
              className="relative cursor-pointer bg-white rounded-md font-medium text-green-600 hover:text-green-800 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-green-800"
            >
              <a>Subir archivo</a>
              <input
                id="file-upload"
                name="file-upload"
                type="file"
                className="sr-only"
                onChange={changeHandler}
              />
            </label>
            <p className="pl-1">or soltar archivos aquí.</p>
          </div>
          <p className="text-xs text-gray-500">
            soporta formatos PNG y JPG hasta 10MB.
          </p>
        </div>
      </div>
      {result && (
        <input className="flex justify-center" onSubmit={submitHandler}>
          <img src={result} alt="Resultado" className="w-20 h-20" />
          <p className="text-xs text-gray-500">{props.name}</p>
          <p className="text-xs text-gray-500">{props.value}</p>
        </input>
      )}
    </>
  )
}

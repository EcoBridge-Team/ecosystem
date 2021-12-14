import { useState, useEffect, useRef } from 'react'
import * as mobilenet from '@tensorflow-models/mobilenet'
import '@tensorflow/tfjs-backend-cpu'

export default function ImageRec() {
  const [isModelLoading, setIsModelLoading] = useState(false)
  const [model, setModel] = useState(null)
  const [imageURL, setImageURL] = useState(null)
  const [results, setResults] = useState([])
  const [history, setHistory] = useState([])

  const imageRef = useRef()
  const textInputRef = useRef<HTMLInputElement>()
  const fileInputRef = useRef<HTMLInputElement>()

  const loadModel = async () => {
    setIsModelLoading(true)
    try {
      const model = await mobilenet.load()
      setModel(model)
      setIsModelLoading(false)
    } catch (error) {
      //console.error(error)
      setIsModelLoading(false)
    }
  }

  const uploadImage = (e) => {
    const { files } = e.target
    if (files.length > 0) {
      const url = URL.createObjectURL(files[0])
      setImageURL(url)
    } else {
      setImageURL(null)
    }
  }

  const identify = async () => {
    textInputRef.current.value = ''
    const results = await model.classify(imageRef.current)
    setResults(results)
  }

  const handleOnChange = (e) => {
    setImageURL(e.target.value)
    setResults([])
  }

  const triggerUpload = () => {
    if (fileInputRef) {
      fileInputRef.current.click()
    }
  }

  useEffect(() => {
    loadModel()
  }, [])

  useEffect(() => {
    if (imageURL) {
      setHistory((h) => [imageURL, ...h])
    }
  }, [imageURL])

  if (isModelLoading) {
    return (
      <div className="h-full flex justify-center items-center bg-white">
        <div className="loader flex space-x-3">
          <div className="w-5 h-5 bg-green-600 rounded-full animate-bounce ball-1"></div>
          <div className="w-5 h-5 bg-green-600 rounded-full animate-bounce ball-2"></div>
          <div className="w-5 h-5 bg-green-600 rounded-full animate-bounce ball-3"></div>
        </div>
      </div>
    )
  }

  return (
    <div className="w-full flex flex-col xl:flex-row">
      <div className="mx-4">
        <input
          type="text"
          className="border-none rounded-md shadow w-80 p-2 mx-3 my-5"
          placeholder="Paste your image URL"
          ref={textInputRef}
          onChange={handleOnChange}
        />
        <span className="or"> Or </span>
        <input
          type="file"
          accept="image/*"
          capture="camera"
          className="uploadInput focus:ring-green-600 focus:border-green-600 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
          onChange={uploadImage}
          ref={fileInputRef}
        />
        <div className="my-5 flex justify-center py-10 border-2 border-gray-300 border-dashed rounded-md">
          <div className="space-y-0 text-center">
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
                <a className="uploadImage" onClick={triggerUpload}>
                  Upload File
                </a>
                <input
                  id="file-upload"
                  name="file-upload"
                  type="file"
                  className="sr-only"
                />
              </label>
              <p className="pl-1">or drop your files here...</p>
            </div>
            <p className="text-xs text-gray-500">
              supports formats PNG and JPG up to 10MB.
            </p>
          </div>
        </div>
      </div>
      <div className="py-2 text-center mx-4">
        <div className="flex items-center mb-3 flex-col xl:flex-row">
          <div className="flex py-2">
            {imageURL && (
              <img
                src={imageURL}
                alt="Upload Preview"
                crossOrigin="anonymous"
                ref={imageRef}
              />
            )}
          </div>
          {results.length > 0 && (
            <div className="w-96 xl:p-8">
              {results.map((result, index) => {
                return (
                  <div
                    className="result border rounded-xl m-2 p-3 flex flex-col mx-5 lg:mx-0"
                    key={result.className}
                  >
                    <span className="name text-base font-semibold uppercase">
                      {result.className}
                    </span>
                    <span className="font-light ml-2">
                      Confidence level: {(result.probability * 100).toFixed(2)}%{' '}
                      {index === 0 && (
                        <span className="bg-white px-1 py-2 ml-2 rounded-lg text-green-700">
                          Best Guess
                        </span>
                      )}
                    </span>
                  </div>
                )
              })}
            </div>
          )}
        </div>
        {imageURL && (
          <button
            className="px-4 py-3 bg-green-600 rounded-full text-white inline-block border-0 cursor-pointer outline-none hover:bg-green-700 shadow hover:shadow-none"
            onClick={identify}
          >
            Identify Image
          </button>
        )}
      </div>
      <div className="flex items-center flex-col mx-4">
        {history.length > 0 && <h2 className="text-2xl mb-4">Recent Images</h2>}
        {history.length > 0 && (
          <div className="bg-gray-100 xl:rounded-xl p-3 xl:w-80 h-96 overflow-x-scroll xl:overflow-y-scroll xl:overflow-x-hidden scrollbar-hide">
            <div className="flex flex-col cursor-pointer xl:overflow-hidden">
              {history.map((image, index) => {
                return (
                  <div className="recentPrediction" key={`${image}${index}`}>
                    <img
                      src={image}
                      alt="Recent Prediction"
                      className="block h-full xl:h-56 object-cover rounded-xl mb-2 shadow hover:shadow-none"
                      onClick={() => setImageURL(image)}
                    />
                  </div>
                )
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

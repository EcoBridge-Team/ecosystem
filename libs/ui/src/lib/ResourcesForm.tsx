import React, { useState, useRef, useEffect } from 'react'
import { useForm, UseFormReturn, SubmitHandler } from 'react-hook-form'

type InputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>

const Input = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => (
  <input ref={ref} {...props} />
))

type Option = {
  label: React.ReactNode
  value: string | number | string[]
}

type SelectProps = React.DetailedHTMLProps<
  React.SelectHTMLAttributes<HTMLSelectElement>,
  HTMLSelectElement
> & { options: Option[] }

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ options, ...props }, ref) => (
    <select ref={ref} {...props}>
      {options.map(({ label, value }) => (
        <option value={value} key={label.toString() + value}>
          {label}
        </option>
      ))}
    </select>
  )
)

type FormProps<TFormValues> = {
  onSubmit: SubmitHandler<TFormValues>
  children: (methods: UseFormReturn<TFormValues>) => React.ReactNode
}

const Form = <TFormValues extends Record<string, any> = Record<string, any>>({
  onSubmit,
  children,
}: FormProps<TFormValues>) => {
  const methods = useForm<TFormValues>()
  return (
    <form onSubmit={methods.handleSubmit(onSubmit)}>{children(methods)}</form>
  )
}

type FormValues = {
  material_name: string
  email: string
  material_type: string
  condition: string
  transport_type: string
  images: string[]
  description: string
  quantity: number
  weight: number
  price: number
  comment: string
  country: string
}

export default function ResourcesForm() {
  const fileInputRef = useRef<HTMLInputElement>()

  const triggerUpload = () => {
    if (fileInputRef) {
      fileInputRef.current.click()
    }
  }

  const [imageURL, setImageURL] = useState(null)
  const [history, setHistory] = useState([])

  const uploadImage = (e) => {
    const { files } = e.target
    if (files.length > 0) {
      const url = URL.createObjectURL(files[0])
      setImageURL(url)
    } else {
      setImageURL(null)
    }
  }

  /*   const handleOnChange = (e) => {
    setImageURL(e.target.value)
  } */

  useEffect(() => {
    if (imageURL) {
      setHistory((history) => [imageURL, ...history])
    }
  }, [imageURL])

  return (
    <Form<FormValues>
      onSubmit={(data) => {
        data
      }}
    >
      {({ register }) => (
        <div>
          <div className="grid xl:grid-flow-col-dense gap-5">
            <div className="flex flex-col gap-1 w-full xl:w-80">
              <label
                htmlFor="material_name"
                className="block text-md font-medium text-gray-700"
              >
                Material Name *
              </label>
              <Input
                type="text"
                className="px-4 py-3 rounded-md mb-2 focus:ring-green-600 focus:border-green-600"
                {...register('material_name')}
              />
              <label
                htmlFor="email"
                className="block text-md font-medium text-gray-700"
              >
                Email address *
              </label>
              <Input
                type="email"
                className="px-4 py-3 rounded-md mb-2 focus:ring-green-600 focus:border-green-600"
                placeholder="example@mail.com"
                {...register('email')}
              />
              <label
                htmlFor="email"
                className="block text-md font-medium text-gray-700"
              >
                Material Type and Quantity *
              </label>
              <div className="flex gap-1">
                <Select
                  className="w-full px-4 py-3 rounded-md mb-2 focus:ring-green-600 focus:border-green-600"
                  {...register('material_type')}
                  options={[
                    { label: 'Plastic', value: 'plastic' },
                    { label: 'Wood', value: 'wood' },
                    { label: 'Metal', value: 'metal' },
                    { label: 'Aluminum', value: 'aluminum' },
                    { label: 'Cartboard', value: 'cartboard' },
                    { label: 'Paper', value: 'paper' },
                    { label: 'Batteries', value: 'batteries' },
                    { label: 'Electronics', value: 'electronics' },
                    { label: 'Glass', value: 'glass' },
                    { label: 'Other', value: 'other' },
                  ]}
                />
                <Select
                  className="w-full px-4 py-3 rounded-md mb-2 focus:ring-green-600 focus:border-green-600"
                  {...register('quantity')}
                  options={[
                    { label: '10', value: 'plastic' },
                    { label: '20', value: 'wood' },
                    { label: 'Metal', value: 'metal' },
                    { label: 'Aluminum', value: 'aluminum' },
                    { label: 'Cartboard', value: 'cartboard' },
                    { label: 'Paper', value: 'paper' },
                    { label: 'Batteries', value: 'batteries' },
                    { label: 'Electronics', value: 'electronics' },
                    { label: 'Glass', value: 'glass' },
                    { label: 'Other', value: 'other' },
                  ]}
                />
              </div>
              <label
                htmlFor="email"
                className="block text-md font-medium text-gray-700"
              >
                Condition *
              </label>
              <Select
                className="px-4 py-3 rounded-md mb-2 focus:ring-green-600 focus:border-green-600"
                {...register('condition')}
                options={[
                  { label: 'Washed', value: 'washed' },
                  { label: 'As is', value: 'as_is' },
                  { label: 'Compacted', value: 'compacted' },
                  { label: 'Shredded', value: 'shredded' },
                  { label: 'Recovered From Sea', value: 'recovered_sea' },
                  { label: 'Recovered From Land', value: 'recovered_land' },
                  { label: 'Agrochemical Use', value: 'agrochemistry' },
                  { label: 'Recovered', value: 'recovered' },
                  { label: 'Dirty', value: 'dirty' },
                  { label: 'Pellets', value: 'pellets' },
                  { label: 'Other', value: 'other' },
                ]}
              />
              <label
                htmlFor="transport_type"
                className="block text-md font-medium text-gray-700"
              >
                Transport Type *
              </label>
              <Select
                className="px-4 py-3 rounded-md mb-2 focus:ring-green-600 focus:border-green-600"
                {...register('transport_type')}
                options={[
                  { label: 'Owner', value: 'owner' },
                  { label: 'External', value: 'external' },
                  { label: 'Customer', value: 'customer' },
                  { label: 'Not Sure', value: 'not_sure' },
                ]}
              />
            </div>
            <div className="flex flex-col gap-1 w-full xl:w-80">
              <label
                htmlFor="images"
                className="block text-md font-medium text-gray-700"
              >
                Images *
              </label>
              <input
                type="file"
                accept="image/*"
                capture="camera"
                className="uploadInput hidden focus:ring-green-600 focus:border-green-600 flex-1 w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                onChange={uploadImage}
                ref={fileInputRef}
              />
              <div
                className="mb-1 flex justify-center py-7 border-2 border-gray-300 border-dashed rounded-md"
                onDrop={triggerUpload}
              >
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
              <label
                htmlFor="country"
                className="block text-md font-medium text-gray-700"
              >
                Country *
              </label>
              <Select
                className="px-4 py-3 rounded-md mb-2 focus:ring-green-600 focus:border-green-600"
                {...register('condition')}
                options={[
                  { label: 'Panama City', value: 'panama' },
                  { label: 'Colombia', value: 'colombia' },
                  { label: 'Costa Rica', value: 'costa_rica' },
                  { label: 'Mexico City', value: 'mexico' },
                  { label: 'El Salvador', value: 'el_salvador' },
                  { label: 'Perú', value: 'peru' },
                ]}
              />
              <label
                htmlFor="price"
                className="block text-md font-medium text-gray-700"
              >
                Price (if known)
              </label>
              <Input
                type="number"
                className="px-4 py-3 rounded-md mb-2 focus:ring-green-600 focus:border-green-600"
                {...register('price')}
              />

              <label
                htmlFor="description"
                className="block text-md font-medium text-gray-700"
              >
                Description
              </label>
              <Input
                type="number"
                className="px-4 py-3 rounded-md mb-2 focus:ring-green-600 focus:border-green-600"
                {...register('description')}
              />
            </div>
            {history.length > 0 && (
              <div className="w-80">
                {history.length > 0 && (
                  <label
                    htmlFor="uploaded_images"
                    className="block text-md font-medium text-gray-700"
                  >
                    Uploaded Images
                  </label>
                )}

                {history.length > 0 && (
                  <div className="my-2 w-full bg-gray-100 xl:rounded-xl p-3 xl:w-80 h-96 overflow-x-scroll xl:overflow-y-scroll xl:overflow-x-hidden scrollbar-hide">
                    <div className="flex flex-col cursor-pointer xl:overflow-hidden">
                      {history.map((image, index) => {
                        return (
                          <div
                            className="recentPrediction"
                            key={`${image}${index}`}
                          >
                            <img
                              src={image}
                              alt="Recent Prediction"
                              className="block h-full xl:h-56 object-cover rounded-xl mb-2"
                              onClick={() => setImageURL(image)}
                            />
                          </div>
                        )
                      })}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
          <Input
            type="submit"
            className="w-60 mx-auto my-5 inline-flex justify-center py-4 text-sm font-bold text-white bg-green-600 border-green-600 rounded-full shadow-md hover:shadow-none active:shadow-inner hover:bg-green-600 active:bg-green-800 antialiased sm:subpixel-antialiased transition duration-500"
          />
        </div>
      )}
    </Form>
  )
}

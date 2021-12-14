const Loading = (): JSX.Element => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-white">
      <div className="loader flex space-x-3">
        <div className="w-5 h-5 bg-green-600 rounded-full animate-bounce ball-1"></div>
        <div className="w-5 h-5 bg-green-600 rounded-full animate-bounce ball-2"></div>
        <div className="w-5 h-5 bg-green-600 rounded-full animate-bounce ball-3"></div>
      </div>
    </div>
  )
}

export default Loading

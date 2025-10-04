import "./LoadingSpinner.css"

const LoadingSpinner = ({ size = "md", color = "primary" }) => {
  return (
    <div className={`loading-spinner-wrapper size-${size}`}>
      <div className={`loading-spinner color-${color}`}></div>
    </div>
  )
}

export default LoadingSpinner

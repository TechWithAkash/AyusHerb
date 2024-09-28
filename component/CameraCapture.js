
// component/CameraCapture.js
'use client'

import { useState, useRef } from 'react'

export default function CameraCapture({ onCapture }) {
  const [isCapturing, setIsCapturing] = useState(false)
  const videoRef = useRef(null)
  const streamRef = useRef(null)

  const startCapture = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true })
      videoRef.current.srcObject = stream
      streamRef.current = stream
      setIsCapturing(true)
    } catch (err) {
      console.error("Error accessing camera:", err)
    }
  }

  const captureImage = () => {
    const canvas = document.createElement('canvas')
    canvas.width = videoRef.current.videoWidth
    canvas.height = videoRef.current.videoHeight
    canvas.getContext('2d').drawImage(videoRef.current, 0, 0)
    const imageDataUrl = canvas.toDataURL('image/jpeg')
    onCapture(imageDataUrl)
    stopCapture()
  }

  const stopCapture = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(track => track.stop())
    }
    setIsCapturing(false)
  }

  return (
    <div className="mb-4">
      {!isCapturing ? (
        <button
          onClick={startCapture}
          className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        >
          Start Camera
        </button>
      ) : (
        <div>
          <video ref={videoRef} autoPlay className="mb-2 rounded" />
          <button
            onClick={captureImage}
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2"
          >
            Capture Image
          </button>
          <button
            onClick={stopCapture}
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          >
            Stop Camera
          </button>
        </div>
      )}
    </div>
  )
}
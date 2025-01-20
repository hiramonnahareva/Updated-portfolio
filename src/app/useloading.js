"use client";

import React, { useEffect, useState } from 'react'

export default function useloading() {
    const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1000);
  }, [])

  return (
    <div>useloading</div>
  )
}

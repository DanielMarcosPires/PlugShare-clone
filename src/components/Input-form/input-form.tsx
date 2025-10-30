import React, { Component, type ComponentProps } from 'react'
import './style.css'

export default function InputForm({...props}:ComponentProps<"input">) {
  return (<><input className="input-form" {...props} /></>
  )
}


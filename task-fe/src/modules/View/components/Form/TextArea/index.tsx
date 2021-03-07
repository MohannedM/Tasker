import React from 'react'
import './index.css'
import { TextAreaProps } from './types'

const TextArea: React.FC<TextAreaProps> = ({ label, rows, value, onChange }) => (
    <div className="form-group row">
        <div className="col-xs-12 col-sm-2">
            <label>{label}</label>
        </div>
        <div className="col-xs-12 col-sm-10">
            <textarea className="form-control" rows={rows ? rows : 3} style={{ resize: 'none' }} value={value} onChange={onChange}></textarea>
        </div>
    </div>
)

export default TextArea
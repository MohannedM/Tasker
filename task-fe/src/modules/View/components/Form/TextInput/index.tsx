import React from 'react'
import './index.css'
import { TextInputProps } from './types'

const TextInput: React.FC<TextInputProps> = ({ label, value, onChange, type }) => (
    <div className="form-group row">
        <div className="col-xs-12 col-sm-2">
            <label>{label}</label>
        </div>
        <div className="col-xs-12 col-sm-10">
            <input type={type ? type : 'text'} className="form-control" value={value} onChange={onChange} />
        </div>
    </div>
)

export default TextInput
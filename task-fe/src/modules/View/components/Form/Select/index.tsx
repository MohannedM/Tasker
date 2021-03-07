import React from 'react'
import './index.css'
import { SelectProps } from './types'

const Select: React.FC<SelectProps> = ({ label, value, onChange, type }) => (
    <div className="form-group row">
        <div className="col-xs-12 col-sm-2">
            <label>{label}</label>
        </div>
        <div className="col-xs-12 col-sm-10">
            <select className="form-control" onChange={onChange}>
                    <option>MohannedM</option>
                    <option>Sayed</option>
                    <option>Ibrahim</option>
            </select>
        </div>
    </div>
)

export default Select
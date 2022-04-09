import React, { useRef, useState } from 'react';
import './BoxLoginName.css'

function BoxLoginName() {


    const [value, setValue] = useState('')

    const h4Ref = useRef()

    const inputRef = useRef()

    const handleChange = (e) => {
        setValue(e.target.value)
        if (inputRef.current.value === '') {
            h4Ref.current.style.display = 'none';
        }

    }

    const handleClick = (e) => {
        e.target.value = value
        h4Ref.current.style.display = 'block'
        if (inputRef.current.value === '') {
            h4Ref.current.style.display = 'none'
        }
    }



    return (
        <div className="app-box">
            <div className="box-login-name">
                <h3>Đăng Nhập</h3>
                <input
                    type="text"
                    placeholder="Username"
                    value={value}
                    onChange={handleChange}
                    ref={inputRef}
                />
                <button onClick={handleClick}>Đăng Nhập</button>
                <h4 ref={h4Ref}>Welcome: {value}</h4>
            </div>
        </div>
    );
}

export default BoxLoginName;
import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const BoxGenerator = () => {
    const [color, setColor] = useState('');
    const [boxStyleList, setBoxStyleList] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const setStyle = {
            backgroundColor: color,
            width: '8rem',
            height: '8rem'
        };
        setBoxStyleList([...boxStyleList, setStyle])
        setColor('');

    };

    return (
        <div className="d-flex justify-content-center align-items-center flex-column">
            <form onSubmit={ handleSubmit }>
                <div className="card bg-secondary m-3 p-3">
                    <label className="form-label text-light">Color: </label>
                    <div className="d-flex">
                        <input className="form-control"
                            onChange={ (e) => setColor(e.target.value) }
                            value = { color }
                        >
                        </input>
                        <button className="mx-3 btn bg-warning" type="Submit">Submit</button>
                    </div>
                </div>
            </form>
            <div className="d-flex m-3">
                {
                    boxStyleList.map( (box, index) =>
                    <div className="m-3" key={ index } style={ box }></div>
                    )
                }
            </div>
        </div>
    ); 
}


export default BoxGenerator;

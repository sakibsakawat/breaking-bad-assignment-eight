import React from 'react';
import './Cast.css';
const Cast = (props) => {

    const { name, born, job,knownFor,salary,img,} = props.cast
    return (
        <div className="cast">
            <img src={img} alt=""/>
            <h2 className="tag">{name}</h2>
            <h5><span className="tag">Profession: </span> {job}</h5>
            <h5><span className="tag">Born:</span> {born}</h5>
            <h5><span className="tag"> Known For: </span>{knownFor}</h5>
            <h5><span className="tag">Salary: </span>${salary}</h5>
            <button onClick={() => props.handleCast(props.cast)} className="btn"> <i class="fas fa-video"></i>  Cast</button>

        </div>
    );
};

export default Cast;
import useState from "react";

function Card({id,image, info , price, name,removeTour}){

const [readmore, setReadmore] = useState(false);
const description = `${info.substring(0,200)}....`

return (

<div className="card">
    {/* image */}
    <img src={image} className="image">
    {/* price */}
    <div className="tour-info">

        {/* title */}
        <div className="tour-Details">

            <h4 className="tour-price">{price}</h4>
            <h4 className="tour-name">{name}</h4>

        </div>
        {/* description */}
        <div className="description">

            {description}

            <span className="read-more" onClick={readmoreHandler}>
                {readmore ? `Show less` : `Read more`} </span>
        </div>
    </div>
    {/* button */}
    <button className="btn-red" onClick={ ()=> removeTour(id)}>
        Not Intrested

    </button>
</div>

);

}
import useState from 'react';


function Card({id,image, info , price, name,removeTour}){

const [readmore, setReadmore] = useState(false);

const description = `${info.substring(0,200)}....`

function readmoreHandler()
{
setReadmore(!readmore);
}

return (
<div className="card">
    {/* image */}
    <img src={image} className="image">
    {/* price */}
    <div className="tour-info">

        {/* title */}
        <div className="tour-Details">

            <h4 className="tour-price">{price}</h4>
            <h4 className="tour-name">{name}</h4>

        </div>
        {/* description */}
        <div className="description">

            {description}

            <span className="read-more" onClick={readmoreHandler}>
                {readmore ? `Show less` : `Read more`} </span>
        </div>
    </div>
    {/* button */}
    <button className="btn-red" onClick={ ()=> removeTour(id)}>
        Not Intrested
    </button>


</div>
</div>
);
}

export default Card;

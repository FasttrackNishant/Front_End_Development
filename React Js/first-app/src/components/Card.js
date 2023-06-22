import './Card.css'

function Card(props) {
const classes = 'card' +props.className;
    return <div className={classes}>
        {/* ye dena padega tabhi visible hoga */}
        {/* {props.children} */}
    </div>;
}
export default Card;     
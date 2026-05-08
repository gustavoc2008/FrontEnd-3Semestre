import "./Subtitle.css"

function Subtitle(props) {
    return(
        <h2>
            {props.texto} {props.gu}
        </h2>
    );
}

export default Subtitle;
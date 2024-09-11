import PropTypes from "prop-types"
import "./ppHolder.css"

export default function PP({ imageDesc, image, desc, isRight = false }) {
    let baseDirection = " left";
    if (isRight) {
        baseDirection = " right"
    }

    let imageBox = (
        <div className={"ppImageBox" + baseDirection}>
            <img src={image} />
            <p>{imageDesc}</p>
        </div>
    )

    let hasImage = true;
    if(image == "") {
        hasImage = false;
    }

    return (
        <div className={"ppDiv "}>
            {hasImage ? imageBox : false}

            <div className="ppDescription">
                <p>{desc}</p>
            </div>
        </div>
    )
}

PP.propTypes = {
    desc: PropTypes.string,
    image: PropTypes.string,
    imageDesc: PropTypes.string,
    isRight: PropTypes.bool
}
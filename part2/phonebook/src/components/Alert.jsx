


const Alert = ({message, type}) => {

    const goodStyle = {
        color: "green",
        border: "3px solid green"
    }

    const badStyle = {
        color: "red",
        border: "3px solid red" 
    }

    if (message === null) {
        return null
    }

    if (type === "good") {
        return (
            <div className="added" style={goodStyle}>
                {message}
            </div>
        )
    }

    return (
        <div className="added" style={badStyle}>
                {message}
        </div>
    )

}


export default Alert
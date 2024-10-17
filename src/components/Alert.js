import React from 'react'

const Alert = (props) => {
    return (
        <div className="alert" style={{height:"10px"}}>
            {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                <strong>{props.alert.type}</strong>: {props.alert.message}
                {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"/> */}
            </div>}
        </div>

    )
}

export default Alert

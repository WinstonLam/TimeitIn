import React, { FunctionComponent } from "react";
import ReactDom from "react-dom";
import { Alert, AlertTitle } from "@mui/material";
import useMountTransition from "../useMountTransition";
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';

import "../Styles/Modal.css";

interface ModalProps {
    show: boolean;
    handleClose: () => void;
    overlay?: boolean;
    content?: any;
    alert?: boolean;
    alertMessage?: string;
    alertType?: "success" | "error" | "warning" | "info";
    width?: string;
    height?: string;
}

const Modal: FunctionComponent<ModalProps> = ({ content, show, handleClose, alert, alertType, alertMessage, overlay, width, height }) => {
    const hasTransitionedIn = useMountTransition(show, 500);

    return ReactDom.createPortal(
        <>
            {hasTransitionedIn && (
                <>
                    {overlay && (<div onClick={handleClose} className={show ? "overlay active" : "overlay"}></div>)}
                    <div className={show ? "modal active" : "modal"} style={{ width: width, height: height }}>
                        <div className="closing-button">
                            <button onClick={handleClose}><AddCircleRoundedIcon fontSize="large" /></button>
                        </div>
                        <div className="modal-content">
                            {alert && (<Alert style={{ borderRadius: "2rem" }} severity={alertType}>
                                <AlertTitle>
                                    <strong>{alertMessage}</strong>
                                </AlertTitle>
                            </Alert>)}

                            {content}
                        </div>
                    </div>
                </>
            )}
        </>
        ,
        document.getElementById('modal')
    );
}

export default Modal;
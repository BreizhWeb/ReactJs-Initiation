/**
import React from "react";
import '../index.css';

const Modale = ({revele, cache}) => revele ?(

    <React.Fragment>
        <div className="overlay"/>

        <div className="wrapper"/>

        <div className="modal">
            <button type="button" className="close" onClick={cache}>
                <span>&times;</span>
            </button>

            <p>
                Voici modal
            </p>
        </div>


    </React.Fragment>

) : null;

export default Modale;
 */
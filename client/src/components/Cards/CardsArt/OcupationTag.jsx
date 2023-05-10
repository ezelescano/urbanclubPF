import React from 'react';

const OcupationTag = ({ocupation}) => {
    const styleOcupation = {backgroundColor:"grey", borderRadius: "3px", color: "white", margin:"2px", padding: "0 2px"}
    return (
        <span style = {styleOcupation} >{ocupation}</span>
    );
};

export default OcupationTag;
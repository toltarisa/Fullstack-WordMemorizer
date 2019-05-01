import React from 'react';

const Question = props => {

    return (
        <h2 className="question">{ props.data.word }'nin Türkçesi Nedir ?</h2>
    );
}

export default Question;
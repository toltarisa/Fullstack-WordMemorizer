import React from 'react';

const Question = props => {
    console.log(props);

    return (
        <h2 className="question">{ props.data.data.word }'nin Türkçesi Nedir ?</h2>
    );
}

export default Question;
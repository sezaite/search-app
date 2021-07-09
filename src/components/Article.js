import React from 'react'
import { useParams } from 'react-router-dom';
import LinesEllipsis from 'react-lines-ellipsis';

function Article() {
    console.log('ghjk');
    const { id } = useParams();
    return (
        <div>
            <p style={{ color: "black" }}>konou - {id}
                <LinesEllipsis
                    text='long long text'
                    maxLine='3'
                    ellipsis='...'
                    trimRight
                    basedOn='letters'
                />
            </p>

        </div>
    )
}

export default Article

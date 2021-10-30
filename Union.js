import React from 'react'
import Andhrabank from './Andhrabank'
import Corporationbank from './Corporationbank'

export default function Union() {
    let data={
        firstname:"puji",
        lastname:"vempati"
    }
    return (
        <div>
            <Andhrabank Info={data} />
            <Corporationbank Info={data} />
        </div>
    )
}

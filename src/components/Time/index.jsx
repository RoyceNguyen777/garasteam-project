import React from 'react'
import styles from './Time.module.scss'

function Time({ hour, min, sec }) {
    return (
        <div className={styles.Time}>
            {`${hour}:${min}:${sec < 10 ? `0${sec}` : sec}`}
        </div>
    )
}

export default Time

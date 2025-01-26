import React from 'react'
import profilePic from '/dev.png'
import doc_editor_pic from '/doc_edit.png'
import styles from './FreelancerCard.module.css';
const CreatorTools = () => {
  return (
    <>
      <div className={styles.header}>
        <h3>Creator Tools</h3>
      </div>
      <div className={styles.cards}>
        <a href="http://localhost:3000/" style={{textDecoration: 'none'}}>
      <div className={styles.card}>
            <img className={styles['card-image']} src={profilePic} alt="Profile pic"></img>
            <h2 className={styles['card-title']}>Code Editor</h2>
            <p className={styles['card-text']}> Click here to access creator tools in shared Environment</p>
        </div>
        </a>
        <a href="http://localhost:5174/" style={{textDecoration: 'none'}}>
        <div className={styles.card}>
       
            <img className={styles['card-image']} src={doc_editor_pic} alt="Profile pic"></img>
            <h2 className={styles['card-title']}>Doc Editor</h2>
            <p className={styles['card-text']}> Click here to Edit documents in shared Environment</p>
        </div>
        </a>
        </div>
    </>
  )
}

export default CreatorTools

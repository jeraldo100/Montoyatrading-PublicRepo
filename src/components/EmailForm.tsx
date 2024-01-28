import React from 'react'
import styles from '@/styles/EmailForm.module.scss'
import { roboto300 } from '@/app/fonts'

function EmailForm() {
  return (
    <>
        <form>
            <div className={styles.form}>
                <div className={styles.nameContainer}>
                    <div className={styles.fnameContainer}>
                        <label htmlFor="fnameText" className={`${styles.labels} ${roboto300.className}`}>First name:</label>
                        <input className={`${styles.text} ${roboto300.className}`} type="text" name="fnameText" />
                    </div>
                    <div className={styles.lnameContainer}>
                        <label htmlFor="lnameText" className={`${styles.labels} ${roboto300.className}`}>Last name:</label>
                        <input className={`${styles.text} ${roboto300.className}`} type="text" name="lnameText" />
                    </div>
                </div>
                <div className={styles.emailContainer}>
                    <label htmlFor="emailText" className={`${styles.labels} ${roboto300.className}`}>Email:</label>
                    <input className={`${styles.text} ${roboto300.className}`} type="email" name="emailText" />
                </div>
                <div className={styles.categoryContainer}>
                    <label htmlFor="category" className={`${styles.labels} ${roboto300.className}`}>Category:</label>
                    <select className={`${styles.text} ${roboto300.className}`}>
                        <option value="option1">option1</option>
                        <option value="option2">option2</option>
                        <option value="option3">option3</option>
                    </select>
                </div>
                <div className={styles.questionContainer}>
                    <label htmlFor="question" className={`${styles.labels} ${roboto300.className}`}>Question:</label>
                    <textarea className={styles.question} />
                </div>
                <div className={styles.submitContainer}>
                    <div className={`${styles.submitButon} ${roboto300.className}`}>
                        Submit
                    </div>
                </div>
            </div>
        </form>
    </>
  )
}

export default EmailForm
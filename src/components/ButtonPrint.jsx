import React from 'react'
import styles from './ButtonPrint.module.css'

const ButtonPrint = () => {

	const print = () => {
		const details = document.querySelectorAll('details')
		Object.entries(details).map(detail => {
			// value.dataset.collapsed = 'false'
			// value.dataset.open = 'true'
			// value.toggleAttribute("data-collapsed")
			// console.log(value.dataset);
			console.log(detail);
			// detail[1].dataset.collapsed = 'false'
			// detail[1].open = 'true'
		})
		window.print()
	}


	return (
		<button className={styles.button} onClick={()=>print()}>Print Checklist</button>
	)
}

export default ButtonPrint

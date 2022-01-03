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
			detail[1].dataset.collapsed = 'false'
			detail[1].open = 'true'
		})

		const contents = document.querySelectorAll('summary + div')
		const newStyle = {
			display: 'block',
			overflow: 'visible',
			height: 'auto',
			willChange: 'height',
			transition: 'height 559ms ease-in-out 0s'
		}
		Object.entries(contents).map(([x,y]) => {
			y.style = newStyle
		})

		window.print()
	}


	return (
		<button className={styles.button} onClick={()=>print()}>Print Checklist</button>
	)
}

export default ButtonPrint

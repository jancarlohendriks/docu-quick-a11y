import React, {useEffect, useState} from 'react'
import levelA from './level-a.json'

const Checklist = ({list}) => {
	console.log(levelA);
	// const [jsonList, setPokemon] = useState(null)

	// useEffect(() => {
  //   const fetchPokemon = () => {
  //     fetch('/level-a.json')
  //       .then((result) => result.json())
  //       .then((data) => setPokemon(data))
  //   }
  //   fetchPokemon()
  // }, [])

	// console.log(jsonList);

	return (
		<table cellSpacing="0" cellPadding="0">
			<thead>
				<tr>
					<th>Num</th>
					<th>Guideline</th>
					<th>Summary</th>
					<th>Check</th>
				</tr>
			</thead>
			<tbody>
				{ levelA && levelA?.list.map((listItem, i) => {
					<tr key={i}>
						<td dir="ltr">{listItem.num}</td>
						<td dir="ltr">
							<div>{listItem.guideline}</div>
						</td>
						<td dir="ltr">
						<div>{listItem.summary}</div>
						</td>
						<td dir="ltr">
							<input type="checkbox" aria-label="Guideline is met" />
						</td>
					</tr>
				}) }
			</tbody>
		</table>
	)
}

export default Checklist

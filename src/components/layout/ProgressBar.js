import React from 'react'

const ProgressBar = ({ strokeWidth, percentage, strokeColor='#17a2b8' }) => {
	const radius = (50 - strokeWidth / 2)
    const pathDescription = `
      M 50,50 m 0,-${radius}
      a ${radius},${radius} 0 1 1 0,${2 * radius}
      a ${radius},${radius} 0 1 1 0,-${2 * radius}
    `

    const diameter = Math.PI * 2 * radius
    const progressStyle = {
			stroke: strokeColor,
  		strokeLinecap: 'round',
      strokeDasharray: `${diameter}px ${diameter}px`,
      strokeDashoffset: `${((100 - percentage) / 100 * diameter)}px`,
    }

    return (
      <svg
        className={'CircularProgressbar'}
        viewBox="0 0 100 100"
      >
        <path
          className="CircularProgressbar-trail"
          d={pathDescription}
          strokeWidth={strokeWidth}
          fillOpacity={0}
					style={{
						stroke: '#d6d6d6',
					}}
        />

        <path
          className="CircularProgressbar-path"
          d={pathDescription}
          strokeWidth={strokeWidth}
          fillOpacity={0}
          style={progressStyle}
        />

        <text
          className="CircularProgressbar-text"
          x={50}
          y={50}
					style={{
						fill: strokeColor,
  					fontSize: '24px',
  					dominantBaseline: 'central',
  					textAnchor: 'middle',
					}}
        >
          {`${percentage}%`}
        </text>
      </svg>
    )
}

export default ProgressBar
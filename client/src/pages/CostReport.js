import React from 'react'

function CostReport() {
  return (
    <div>
      <h2>CostReport</h2>
      <p>Survey Results:</p>
      <pre>{JSON.stringify(surveyResults, null, 4)}</pre>
    </div>
  )
}

export default CostReport
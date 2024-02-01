import React from 'react'

function CostReport({surveyResults, recommendation}) {
  return (
    <div>
      <h2>Cost Report</h2>
      <p>Survey Results:</p>
      
      <h3>Recommendation:</h3>
      {recommendation && (
        <div>
          <p>Cloud Provider: {recommendation.cloud_provider}</p>
          <p>Instance: {recommendation.instance}</p>
          <p>Cost: {recommendation.cost}</p>
        </div>
      )}
    </div>
  )
}

export default CostReport
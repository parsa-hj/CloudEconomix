import React from 'react'
import '../assets/styles/survey.css'
import CostReport from './CostReport'
import surveyJson from '../data/SurveyQuestions';
import { useCallback, useState, useRef } from 'react';

import 'survey-core/defaultV2.min.css';
import { LayeredDark } from "survey-core/themes/layered-dark";
import { Model } from 'survey-core';
import { Survey } from 'survey-react-ui';

import axios from 'axios';


function SurveyPage() {
  // useRef enables the Model object to persist between state changes
  const survey = useRef(new Model(surveyJson)).current;
  const [surveyResults, setSurveyResults] = useState("");
  const [isSurveyCompleted, setIsSurveyCompleted] = useState(false);

  const displayResults = useCallback((sender) => {
    setSurveyResults(JSON.stringify(sender.data, null, 4));
    setIsSurveyCompleted(true);

    // Sends survey results to Flask backend
    sendSurveyResults(sender.data);
  }, []);

  const sendSurveyResults = async (data) => {
    try {
      // Adjusts the URL to match your Flask backend endpoint
      const apiUrl = 'http://localhost:5000/api/recommend-cloud';

      // Sends a POST request to Flask with survey results
      const response = await axios.post(apiUrl, data);
      
      // Logs the response from the Flask backend
      console.log(response.data);
    } catch (error) {
      console.error('Error sending survey results:', error);
    }
  };


  survey.onComplete.add(displayResults);
  survey.applyTheme(LayeredDark);

  return (
    <div className='survey-container'>
      <Survey model={survey} id="surveyContainer" />
      {isSurveyCompleted && (
        // Explicitly passing surveyResults as a prop to CostReport
        <CostReport surveyResults={surveyResults} />
      )}
    </div>
  );
}

export default SurveyPage;
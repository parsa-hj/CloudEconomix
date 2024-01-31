import React from 'react'
import '../assets/styles/survey.css'
import CostReport from './CostReport'

import { useCallback, useState, useRef } from 'react';

import 'survey-core/defaultV2.min.css';
import { LayeredDark } from "survey-core/themes/layered-dark";
import { Model } from 'survey-core';
import { Survey } from 'survey-react-ui';

import axios from 'axios';

const surveyJson = {
  pages: [{
    elements: [{
      type: "html",
      html: "<h4>Fill out the information on the form below to find out the best cloud solutions for your business.</h4>"
    }]
  }, {
    elements: [
      {
        name: "organization-name",
        title: "What is the name of your organization?",
        type: "text",
        isRequired: true
      },
      {
        name: "organization-industry",
        title: "What industry does your organization operate in?",
        type: "text",
        isRequired: true
      },
      {
        name: "organization-size",
        title: "How would you describe the size of your organization?",
        type: "dropdown",
        choices: ["Small", "Medium", "Large"],
        isRequired: true
      }
    ],
    title: "Organization Details"
  },
  {
    elements: [
      {
        name: "cloud-usage",
        title: "Are you currently using cloud services?",
        type: "radiogroup",
        choices: ["Yes", "No"],
        isRequired: true
      },
      {
        name: "cloud-service-provider",
        title: "If yes, which cloud service provider(s) are you using?",
        type: "checkbox",
        choices: ["AWS", "Azure", "Google Cloud", "Other"]
      }
    ],
    title: "Current Cloud Usage",
  },],
  showQuestionNumbers: "off",
  pageNextText: "Forward",
  completeText: "Submit",
  showPrevButton: false,
  firstPageIsStarted: true,
  startSurveyText: "Take the Survey",
  completedHtml: "Thank you for your feedback!",
  showPreviewBeforeComplete: "showAnsweredQuestions"
};


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
        <>
          <p>Result JSON:</p>
          <code style={{ whiteSpace: 'pre' }}>
            {surveyResults}
          </code>
          <CostReport surveyResults={surveyResults} />
        </>
        )
      }
    </div>
  );
}

export default SurveyPage;
const surveyJson = {
    pages: [{
      elements: [{
        type: "html",
        html: "<h4>Fill out the information on the form below to find out the best cloud solutions for your business.</h4>"
      }]
    }, 
    {
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
    },
    {
      elements: [
        {
          name: "usage-workloads",
          title: "What type of workloads or services do you primarily run on the cloud?",
          type: "checkbox",
          choices: ["Web hosting", "Data storage", "Machine Learning"],
          isRequired: true
        },
        {
          name: "usage-scaleup",
          title: "How often do you scale your resources up or down based on demand?",
          type: "radiogroup",
          choices: ["Always", "Often", "Sometimes", "Never"],
          isRequired: true
        }
      ],
      title: "Usage Pattern",
    },
    {
      elements: [
        {
          type: "radiogroup",
          name: "billingModel",
          title: "Billing Preferences",
          description: "What billing model do you prefer?",
          choices: ["Pay-as-you-go", "Reserved instances"],
          isRequired: true
        },
        {
          type: "radiogroup",
          name: "exploreBillingOptions",
          title: "Billing Preferences",
          description: "Are you interested in exploring different billing options to optimize costs?",
          choices: ["Yes", "No"],
          isRequired: true
        }
      ]
    },
    {
      elements: [
        {
          type: "radiogroup",
          name: "budgetSet",
          title: "Budgeting",
          description: "Do you currently have a budget set for your cloud expenses?",
          choices: ["Yes", "No"],
          isRequired: true
        },
        {
          type: "text",
          name: "budgetReviewFrequency",
          title: "Budgeting",
          description: "If yes, what is your budget?",
          isRequired: true
        }
      ]
    },
    {
      elements: [
        {
          type: "radiogroup",
          name: "priceSensitivity",
          title: "Price Sensitivity",
          description: "How sensitive are you to changes in cloud pricing?",
          choices: ["Not sensitive at all", "Slightly sensitive", "Moderately sensitive", "Very sensitive", "Extremely sensitive"],
          isRequired: true
        },
        {
          type: "radiogroup",
          name: "switchCloudProviders",
          title: "Price Sensitivity",
          description: "Would you be willing to switch cloud providers for cost savings?",
          choices: ["Yes", "No"],
          isRequired: true
        }
      ]
    },
    {
      elements: [
        {
          type: "checkbox",
          name: "preferredFeatures",
          title: "Preferred Features",
          description: "What features or functionalities are most important to you when choosing a cloud provider?",
          choices: ["Scalability", "Reliability", "Performance", "Security", "Cost-effectiveness", "Flexibility", "Integration capabilities", "Other"],
          hasOther: true,
          isRequired: true
        }
      ]
    },
  ],
    showQuestionNumbers: "off",
    pageNextText: "Forward",
    completeText: "Submit",
    showPrevButton: false,
    firstPageIsStarted: true,
    startSurveyText: "Take the Survey",
    completedHtml: "Thank you for your feedback!",
    showPreviewBeforeComplete: "showAnsweredQuestions"
 };
  
  export default surveyJson;
// constants/Constants.js
export const STEP_FORM_LABELS = {
    STEP_1: {
      FIRST_NAME: 'First Name',
      LAST_NAME: 'Last Name',
      EMAIL: 'Email',
      COMPANY_NAME: 'Company Name',
      COMPANY_WEBSITE: 'Company Website',
      STATE: 'State',
      ZIP_CODE: 'Zip Code',
    },
    STEP_2: {
      COMPANY_FIELD: 'Company Field',
      EMPLOYEE_COUNT: 'Number of Employees',
      WFH_POLICY: 'WFH Policy',
    },
    STEP_3: {
      PLAN_TYPE: 'Plan Type',
    },
  };
  
  export const STEP_FORM_ERRORS = {
    STEP_1: {
      FIRST_NAME_REQUIRED: "First Name is required",
      LAST_NAME_REQUIRED: "Last Name is required",
      EMAIL_REQUIRED: "Email is required",
      EMAIL_INVALID: "Invalid email format",
      COMPANY_NAME_REQUIRED: "Company Name is required",
      COMPANY_WEBSITE_REQUIRED: "Company Website is required",
      COMPANY_WEBSITE_INVALID: "Invalid website format",
      STATE_REQUIRED: "State is required",
      ZIP_CODE_REQUIRED: "Zip Code is required",
      ZIP_CODE_INVALID: "Zip Code must be 5 digits",
    },
    STEP_2: {
      NUM_USERS_REQUIRED: "Number of employees is required",
      WFH_POLICY_REQUIRED: "WFH policy is required",
    },
    STEP_3: {
      PLAN_REQUIRED: "Plan type is required",
    },
  };
  
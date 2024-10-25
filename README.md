# Multi-Step Form

## Project Structure

The project is organized into the following folders:
/src 

├── components # Contains all the React components

│ ├── commonComponents # Common reusable components (e.g., CustomButton)

│ └── FormSteps # Individual step components for the multi-step form 

├── constants # Contains constants and configuration files 

├── store # Contains Redux store configuration and slices 

│ ├── index.js # Configures the Redux store 

│ └── formSlice.js # Slice for managing form data 

└── App.js # Main application component

**Clone the repository:**
git clone <repository-url>
cd <project-directory>

npm install
npm start

Features :
Multi-step form navigation
Dynamic pricing based on user selections
Redux for state management
Responsive design using Material-UI

Usage :
Fill in the required fields in each step of the form.
Click "Next" to proceed to the next step or "Back" to return to the previous step.
Review your selections and submit the form once completed.

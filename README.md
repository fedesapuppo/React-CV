# CV Builder

A simple CV builder application built with React. Create and edit your professional CV with a clean, user-friendly interface.

## Features

- **General Information Section**
  - Name, email, and phone number fields
  - Input validation for all fields
  - Email format validation
  - Phone number format validation (numbers only, optional + prefix)

- **Education Section**
  - Add multiple education entries
  - School name and title of study
  - Start and end dates
  - Date validation (end date must be after start date)
  - Add/remove education entries dynamically

- **Work Experience Section**
  - Add multiple work experience entries
  - Company name and position
  - Detailed responsibilities
  - Start and end dates
  - Date validation (end date must be after start date)
  - Add/remove experience entries dynamically

- **Form Validation**
  - Required field validation
  - Email format validation
  - Phone number format validation
  - Date range validation
  - At least one education entry required
  - At least one work experience entry required
  - All entries must be complete

- **Responsive Design**
  - Mobile-first approach
  - Responsive layout for all screen sizes
  - Minimum width for better readability on desktop
  - Clean UI

- **Preview Mode**
  - Generate CV preview
  - Edit functionality
  - Clean layout
  - Responsive design

## Technologies Used

- React
- Formik (Form handling)
- Yup (Form validation)
- CSS Modules
- Vite

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/fedesapuppo/react-cv
   ```

2. Navigate to the project directory:
   ```bash
   cd cv-builder
   ```

3. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

4. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open your browser and visit:
   ```
   http://localhost:5175
   ```

## Usage

1. Fill in your general information
2. Add your education history
3. Add your work experience
4. Click "Generate CV" to preview
5. Edit your CV if needed
6. Print or save your CV

## Form Validation Rules

- **Name**: Required, minimum 2 characters
- **Email**: Required, valid email format
- **Phone**: Required, numbers only with optional + prefix
- **Education**: At least one entry, all fields required
- **Experience**: At least one entry, all fields required
- **Dates**: End dates must be after start dates

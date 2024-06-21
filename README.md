# Weight Tracker

This Weight Tracker application allows users to monitor and track the weight of multiple entities, such as people and animals. The system provides functionalities to register new entities, add weight records, view data, generate graphs, and determine weight trends. The application includes both a backend API and a frontend built with React.

## Features

- **Register Entities:** Register new entities with relevant details.
- **Add Weight Records:** Add weight records for registered entities.
- **View Data:** View and compare weight data for entities with visual graphs.
- **Modify Entities:** Update details of registered entities.
- **Delete Entities:** Remove registered entities and their weight records.
- **Dark and Light Mode:** Toggle between dark and light themes.

## Backend Setup

### Requirements

- Python 3.x
- Flask
- Other dependencies listed in `requirements.txt`

### Installation

1. Clone the repository:
    ```bash
    git clone <repository-url>
    cd <repository-directory>
    ```

2. Set up a virtual environment and activate it:
    ```bash
    python -m venv venv
    source venv/bin/activate  # On Windows, use `venv\Scripts\activate`
    ```

3. Install the dependencies:
    ```bash
    pip install -r requirements.txt
    ```

4. Run the Flask server:
    ```bash
    flask run
    ```

### API Endpoints

- **Register Entity:** `POST /register`
- **Add Weight Record:** `POST /add-weight`
- **Get Data:** `GET /get-data`
- **Modify Entity:** `PUT /modify-entity`
- **Delete Entity:** `DELETE /delete-entity`

## Frontend Setup

### Requirements

- Node.js
- npm (Node Package Manager)

### Installation

1. Navigate to the React app directory:
    ```bash
    cd weight-tracker
    ```

2. Install the dependencies:
    ```bash
    npm install
    ```

3. Start the React development server:
    ```bash
    npm start
    ```

### Usage

1. Open your browser and navigate to `http://localhost:3000`.
2. Use the sidebar to navigate through different functionalities:
    - **Register:** Register a new entity.
    - **Add Weight:** Add weight records for registered entities.
    - **View Data:** View and compare weight data for entities.
    - **Modify Entity:** Update details of registered entities.
    - **Delete Entity:** Remove registered entities and their weight records.

## File Structure

- **Backend:**
  - `app.py`: Main application file.
  - `register.py`: Handles registration of new entities.
  - `addWeight.py`: Handles adding weight records.
  - `readData.py`: Handles retrieving data.
  - `modifyEntity.py`: Handles modifying entity details.
  - `deleteEntity.py`: Handles deleting entities.
  - `inclination.py`: Determines weight trend (gain/loss).

- **Frontend:**
  - `src/components`: Contains React components.
  - `src/components/WeightChart.js`: Component for displaying weight charts.
  - `src/components/ViewData.js`: Component for viewing and comparing data.
  - `src/components/RegisterEntity.js`: Component for registering new entities.
  - `src/components/AddWeightRecord.js`: Component for adding weight records.
  - `src/components/ModifyEntity.js`: Component for modifying entity details.
  - `src/components/DeleteEntity.js`: Component for deleting entities.
  - `src/components/ThemeToggle.js`: Component for toggling between dark and light themes.
  - `src/index.js`: Main entry point for the React application.
  - `src/index.css`: Global CSS styles, including theme variables.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.

## Acknowledgments

- Inspired by various fitness and health tracking applications.

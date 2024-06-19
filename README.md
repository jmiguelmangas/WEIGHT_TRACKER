# Weight Tracker API and React Application

### Project Overview

The Weight Tracker API and React Application help users track the weight of multiple entities, such as people and animals. Users can register entities, add weight records, view data, generate graphs, determine weight trends, and compare the weight of two entities. The React frontend offers an intuitive interface for interacting with the API.

### Features

- **Register Entities**: Add new entities to track.
- **Add Weight Records**: Record weight entries for each entity.
- **View Data**: Display the weight records of a selected entity.
- **Generate Graphs**: Visualize the weight trends over time.
- **Compare Entities**: Compare the weight of two entities in the same graph with different colors.
- **Modify Entity Names**: Update the name of an existing entity.
- **Delete Entities**: Remove an entity along with all its weight records.
- **Modify Weight Records**: Update an existing weight record for a specific entity and date.

### Installation and Setup

#### Backend (Weight Tracker API)

1. **Clone the repository**:
    ```bash
    git clone https://github.com/your_user/weight-tracker-api.git
    cd weight-tracker-api
    ```

2. **Set up a virtual environment and install dependencies**:
    ```bash
    python -m venv venv
    source venv/bin/activate  # On Windows use `venv\Scripts\activate`
    pip install -r requirements.txt
    ```

3. **Start the Flask application**:
    ```bash
    python main.py
    ```

#### Frontend (React Application)

1. **Navigate to the React application directory**:
    ```bash
    cd weight-tracker
    ```

2. **Install the dependencies**:
    ```bash
    npm install
    ```

3. **Start the React application**:
    ```bash
    npm start
    ```

### Endpoints

1. **Register entity**:
   - **URL**: `/register`
   - **Method**: `POST`
   - **Request Body**:
     ```json
     {
         "nombre": "EntityName"
     }
     ```
   - **Description**: Registers a new entity.

2. **Add record**:
   - **URL**: `/add`
   - **Method**: `POST`
   - **Request Body**:
     ```json
     {
         "nombre": "EntityName",
         "fecha": "YYYY-MM-DD",
         "peso": WeightInKg
     }
     ```
   - **Description**: Adds a new weight record for an entity.

3. **Read records**:
   - **URL**: `/data?nombre=Entity1&nombre=Entity2`
   - **Method**: `GET`
   - **Description**: Returns the records of the specified entities. If no entity is specified, returns all records.

4. **Create graph**:
   - **URL**: `/graph?nombre=Entity1&nombre=Entity2`
   - **Method**: `GET`
   - **Description**: Creates a graph of the weights for the specified entities. If no entity is specified, creates a graph for all entities.

5. **Determine trend**:
   - **URL**: `/trend?nombre=EntityName`
   - **Method**: `GET`
   - **Description**: Calculates and returns the weight trend for the specified entity.

6. **Modify entity name**:
   - **URL**: `/modify-entity`
   - **Method**: `PUT`
   - **Request Body**:
     ```json
     {
         "nombre_actual": "CurrentName",
         "nombre_nuevo": "NewName"
     }
     ```
   - **Description**: Modifies the name of an existing entity.

7. **Delete entity**:
   - **URL**: `/delete-entity`
   - **Method**: `DELETE`
   - **Request Body**:
     ```json
     {
         "nombre": "EntityName"
     }
     ```
   - **Description**: Deletes an entity along with all its weight records.

8. **Modify weight record**:
   - **URL**: `/modify-weight`
   - **Method**: `PUT`
   - **Request Body**:
     ```json
     {
         "nombre": "EntityName",
         "fecha": "YYYY-MM-DD",
         "peso_nuevo": WeightInKg
     }
     ```
   - **Description**: Modifies an existing weight record for a specific entity and date.

### React Components

1. **RegisterEntity**:
   - Allows the user to register a new entity.
   - Updates the dropdown list dynamically upon successful registration.

2. **AddWeightRecord**:
   - Allows the user to add a new weight record for an entity.
   - The entity can be selected from a dropdown list.

3. **ViewData**:
   - Allows the user to view the weight records of a selected entity.
   - Automatically updates the displayed data when the selected entity is changed.
   - Allows the user to compare the weight of two entities in the same graph with different colors.

4. **ModifyEntity**:
   - Allows the user to modify the name of an existing entity.
   - Updates the dropdown list dynamically upon successful modification.

5. **DeleteEntity**:
   - Allows the user to delete an entity along with all its weight records.
   - Updates the dropdown list dynamically upon successful deletion.

6. **ModifyWeightRecord**:
   - Allows the user to modify an existing weight record for a specific entity and date.
   - The entity can be selected from a dropdown list.

### Usage

1. **Register a new entity**:
   - Enter the name of the entity and click the "Register" button.

2. **Add a weight record**:
   - Select the entity from the dropdown list.
   - Enter the date and weight, then click the "Add Weight" button.

3. **View weight records**:
   - Select the entity from the dropdown list to automatically view its weight records.

4. **Compare entities**:
   - Select the first entity from the dropdown list.
   - Click the "Compare with another entity" button.
   - Select the second entity from the new dropdown list.
   - Choose different colors for each entity using the color pickers.
   - The graph will display the weight data for both entities.

5. **Modify an entity name**:
   - Select the current name of the entity from the dropdown list.
   - Enter the new name and click the "Modify Name" button.

6. **Delete an entity**:
   - Select the entity from the dropdown list and click the "Delete" button.

7. **Modify a weight record**:
   - Select the entity from the dropdown list.
   - Enter the date of the record to be modified and the new weight, then click the "Modify Weight" button.

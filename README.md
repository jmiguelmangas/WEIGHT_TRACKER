# Weight Tracker API

An API to track the weight of multiple entities, such as people and animals. This application allows you to register new entities, add weight records, read data, create graphs, and determine weight trends.

## Project Description

This API is designed to allow users to track the weight of multiple entities, whether they are people or animals. The API provides functionalities to register new entities, add weight records, read registered data, generate graphs, and determine weight trends (whether it is increasing or decreasing).

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/your_user/weight-tracker-api.git
    cd weight-tracker-api
    ```

2. Create a virtual environment and install dependencies:
    ```bash
    python -m venv venv
    source venv/bin/activate  # On Windows use `venv\Scripts\activate`
    pip install -r requirements.txt
    ```

3. Start the application:
    ```bash
    python main.py
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

## React Frontend

A React application that interacts with the Weight Tracker API to provide a user-friendly interface for managing entities and their weight records.

### Installation

1. Navigate to the React application directory:
    ```bash
    cd weight-tracker
    ```

2. Install the dependencies:
    ```bash
    npm install
    ```

3. Start the React application:
    ```bash
    npm start
    ```

### Components

1. **RegisterEntity**:
   - Allows the user to register a new entity.
   - Updates the dropdown list dynamically upon successful registration.

2. **AddWeightRecord**:
   - Allows the user to add a new weight record for an entity.
   - The entity can be selected from a dropdown list.

3. **ViewData**:
   - Allows the user to view the weight records of a selected entity.
   - Automatically updates the displayed data when the selected entity is changed.

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

4. **Modify an entity name**:
   - Select the current name of the entity from the dropdown list.
   - Enter the new name and click the "Modify Name" button.

5. **Delete an entity**:
   - Select the entity from the dropdown list and click the "Delete" button.

6. **Modify a weight record**:
   - Select the entity from the dropdown list.
   - Enter the date of the record to be modified and the new weight, then click the "Modify Weight" button.

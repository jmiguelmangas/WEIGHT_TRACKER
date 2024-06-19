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

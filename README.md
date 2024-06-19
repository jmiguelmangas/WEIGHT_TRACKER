# Weight Tracker API

Una API para rastrear el peso de múltiples entidades, como personas y animales. Esta aplicación permite registrar nuevas entidades, agregar registros de peso, leer datos, crear gráficos y determinar tendencias de peso.

## Descripción en Español

### Descripción del Proyecto

Esta API está diseñada para permitir a los usuarios rastrear el peso de múltiples entidades, ya sean personas o animales. La API ofrece funcionalidades para registrar nuevas entidades, agregar registros de peso, leer los datos registrados, generar gráficos y determinar la tendencia de peso (si está aumentando o disminuyendo).

### Instalación

1. Clona el repositorio:
    ```bash
    git clone https://github.com/tu_usuario/weight-tracker-api.git
    cd weight-tracker-api
    ```

2. Crea un entorno virtual e instala las dependencias:
    ```bash
    python -m venv venv
    source venv/bin/activate  # En Windows usa `venv\Scripts\activate`
    pip install -r requirements.txt
    ```

3. Inicia la aplicación:
    ```bash
    python main.py
    ```

### Endpoints

1. **Registrar entidad**:
   - **URL**: `/register`
   - **Método**: `POST`
   - **Cuerpo de la solicitud**:
     ```json
     {
         "nombre": "NombreDeLaEntidad"
     }
     ```
   - **Descripción**: Registra una nueva entidad.

2. **Agregar registro**:
   - **URL**: `/add`
   - **Método**: `POST`
   - **Cuerpo de la solicitud**:
     ```json
     {
         "nombre": "NombreDeLaEntidad",
         "fecha": "YYYY-MM-DD",
         "peso": PesoEnKg
     }
     ```
   - **Descripción**: Agrega un nuevo registro de peso para una entidad.

3. **Leer registros**:
   - **URL**: `/data?nombre=Entidad1&nombre=Entidad2`
   - **Método**: `GET`
   - **Descripción**: Devuelve los registros de las entidades especificadas. Si no se especifica ninguna entidad, devuelve todos los registros.

4. **Crear gráfica**:
   - **URL**: `/graph?nombre=Entidad1&nombre=Entidad2`
   - **Método**: `GET`
   - **Descripción**: Crea una gráfica de los pesos para las entidades especificadas. Si no se especifica ninguna entidad, crea una gráfica para todas las entidades.

5. **Determinar tendencia**:
   - **URL**: `/trend?nombre=NombreDeLaEntidad`
   - **Método**: `GET`
   - **Descripción**: Calcula y devuelve la tendencia de peso para la entidad especificada.

## English Description

### Project Description

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

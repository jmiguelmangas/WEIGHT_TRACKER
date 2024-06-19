from flask import Flask
from flask_cors import CORS

def create_app():
    app = Flask(__name__)
    CORS(app)  # Habilitar CORS para todas las rutas

    with app.app_context():
        from . import addData
        from . import readData
        from . import inclination
        from . import register
        from . import modifyEntity
        from . import deleteEntity
        from . import modifyWeight

        # Registrar rutas
        addData.init_app(app)
        readData.init_app(app)
        inclination.init_app(app)
        register.init_app(app)
        modifyEntity.init_app(app)
        deleteEntity.init_app(app)
        modifyWeight.init_app(app)

    return app

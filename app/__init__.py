from flask import Flask

def create_app():
    app = Flask(__name__)

    with app.app_context():
        from . import addData
        from . import readData
        from . import inclination
        from . import register

        # Registrar rutas
        addData.init_app(app)
        readData.init_app(app)
        inclination.init_app(app)
        register.init_app(app)

    return app

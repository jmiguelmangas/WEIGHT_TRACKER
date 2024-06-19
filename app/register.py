import json
from flask import Blueprint, request, jsonify

bp = Blueprint('register', __name__)

@bp.route('/register', methods=['POST'])
def registrar_entidad():
    data = request.get_json()
    nombre = data.get('nombre')
    
    nueva_entidad = {
        "nombre": nombre,
        "pesos": []
    }
    
    archivo = 'data.json'
    try:
        with open(archivo, 'r') as f:
            datos = json.load(f)
    except FileNotFoundError:
        datos = {"entities": []}
    
    datos["entities"].append(nueva_entidad)
    
    with open(archivo, 'w') as f:
        json.dump(datos, f, indent=4)
    
    return jsonify({"message": f"Entidad {nombre} registrada exitosamente"}), 201

def init_app(app):
    app.register_blueprint(bp)

import json
from flask import Blueprint, request, jsonify

bp = Blueprint('deleteEntity', __name__)

@bp.route('/delete-entity', methods=['DELETE'])
def eliminar_entidad():
    data = request.get_json()
    nombre = data.get('nombre')

    archivo = 'data.json'
    try:
        with open(archivo, 'r') as f:
            datos = json.load(f)
    except FileNotFoundError:
        return jsonify({"message": "Archivo de datos no encontrado"}), 404
    
    datos["entities"] = [entidad for entidad in datos["entities"] if entidad["nombre"] != nombre]
    
    with open(archivo, 'w') as f:
        json.dump(datos, f, indent=4)
    
    return jsonify({"message": f"Entidad {nombre} eliminada exitosamente"}), 200

def init_app(app):
    app.register_blueprint(bp)

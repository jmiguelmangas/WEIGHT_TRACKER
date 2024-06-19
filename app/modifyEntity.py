import json
from flask import Blueprint, request, jsonify

bp = Blueprint('modifyEntity', __name__)

@bp.route('/modify-entity', methods=['PUT'])
def modificar_nombre_entidad():
    data = request.get_json()
    nombre_actual = data.get('nombre_actual')
    nombre_nuevo = data.get('nombre_nuevo')

    archivo = 'data.json'
    try:
        with open(archivo, 'r') as f:
            datos = json.load(f)
    except FileNotFoundError:
        return jsonify({"message": "Archivo de datos no encontrado"}), 404
    
    for entidad in datos["entities"]:
        if entidad["nombre"] == nombre_actual:
            entidad["nombre"] = nombre_nuevo
            with open(archivo, 'w') as f:
                json.dump(datos, f, indent=4)
            return jsonify({"message": "Nombre de la entidad modificado exitosamente"}), 200
    
    return jsonify({"message": "Entidad no encontrada"}), 404

def init_app(app):
    app.register_blueprint(bp)

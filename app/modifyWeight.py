import json
from flask import Blueprint, request, jsonify

bp = Blueprint('modifyWeight', __name__)

@bp.route('/modify-weight', methods=['PUT'])
def modificar_registro_peso():
    data = request.get_json()
    nombre = data.get('nombre')
    fecha = data.get('fecha')
    peso_nuevo = data.get('peso_nuevo')

    archivo = 'data.json'
    try:
        with open(archivo, 'r') as f:
            datos = json.load(f)
    except FileNotFoundError:
        return jsonify({"message": "Archivo de datos no encontrado"}), 404
    
    for entidad in datos["entities"]:
        if entidad["nombre"] == nombre:
            for registro in entidad["pesos"]:
                if registro["fecha"] == fecha:
                    registro["peso"] = peso_nuevo
                    with open(archivo, 'w') as f:
                        json.dump(datos, f, indent=4)
                    return jsonify({"message": "Registro de peso modificado exitosamente"}), 200
    
    return jsonify({"message": "Entidad o registro no encontrado"}), 404

def init_app(app):
    app.register_blueprint(bp)

import json
from flask import Blueprint, request, jsonify

bp = Blueprint('addData', __name__)

@bp.route('/add', methods=['POST'])
def agregar_registro():
    data = request.get_json()
    nombre = data.get('nombre')
    fecha = data.get('fecha')
    peso = data.get('peso')

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
                    registro["peso"] = peso
                    entidad["pesos"].sort(key=lambda x: x["fecha"])  # Ordenar por fecha
                    with open(archivo, 'w') as f:
                        json.dump(datos, f, indent=4)
                    return jsonify({"message": "Registro actualizado exitosamente"}), 200
            entidad["pesos"].append({"fecha": fecha, "peso": peso})
            entidad["pesos"].sort(key=lambda x: x["fecha"])  # Ordenar por fecha
            with open(archivo, 'w') as f:
                json.dump(datos, f, indent=4)
            return jsonify({"message": "Registro agregado exitosamente"}), 201
    
    return jsonify({"message": "Entidad no encontrada"}), 404

def init_app(app):
    app.register_blueprint(bp)

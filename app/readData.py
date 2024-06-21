import json
from flask import Blueprint, request, jsonify

bp = Blueprint('readData', __name__)

@bp.route('/data', methods=['GET'])
def obtener_datos():
    archivo = 'data.json'
    try:
        with open(archivo, 'r') as f:
            datos = json.load(f)
    except FileNotFoundError:
        return jsonify({"message": "Archivo de datos no encontrado"}), 404
    
    nombres = request.args.getlist('nombre')
    if not nombres:
        return jsonify(datos["entities"])
    
    resultado = [entidad for entidad in datos["entities"] if entidad["nombre"] in nombres]
    return jsonify(resultado)

def init_app(app):
    app.register_blueprint(bp)

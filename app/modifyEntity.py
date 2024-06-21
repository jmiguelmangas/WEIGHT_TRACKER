import json
from flask import Blueprint, request, jsonify

bp = Blueprint('modifyEntity', __name__)

@bp.route('/modify-entity', methods=['PUT'])
def modificar_entidad():
    data = request.get_json()
    nombre_actual = data.get('nombre_actual')
    nombre_nuevo = data.get('nombre_nuevo')
    tipo = data.get('tipo')
    sexo = data.get('sexo')
    altura = data.get('altura')
    edad = data.get('edad')
    raza = data.get('raza')

    archivo = 'data.json'
    try:
        with open(archivo, 'r') as f:
            datos = json.load(f)
    except FileNotFoundError:
        return jsonify({"message": "Archivo de datos no encontrado"}), 404

    for entidad in datos["entities"]:
        if entidad["nombre"] == nombre_actual:
            entidad["nombre"] = nombre_nuevo
            entidad["tipo"] = tipo
            entidad["sexo"] = sexo
            if tipo == 'persona':
                entidad["altura"] = altura
                entidad["edad"] = edad
                if 'raza' in entidad:
                    del entidad['raza']
            elif tipo == 'perro':
                entidad["raza"] = raza
                if 'altura' in entidad:
                    del entidad['altura']
                if 'edad' in entidad:
                    del entidad['edad']
            break
    else:
        return jsonify({"message": "Entidad no encontrada"}), 404

    with open(archivo, 'w') as f:
        json.dump(datos, f, indent=4)

    return jsonify({"message": "Entidad modificada exitosamente"}), 200

def init_app(app):
    app.register_blueprint(bp)

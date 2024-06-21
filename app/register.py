import json
from flask import Blueprint, request, jsonify
from datetime import datetime

bp = Blueprint('register', __name__)

@bp.route('/register', methods=['POST'])
def registrar_entidad():
    data = request.get_json()
    nombre = data.get('nombre')
    tipo = data.get('tipo')
    fecha_alta = datetime.now().strftime('%Y-%m-%d')

    if not nombre or not tipo:
        return jsonify({"message": "Nombre and Tipo are required"}), 400

    if tipo == "persona":
        sexo = data.get("sexo")
        altura = data.get("altura")
        edad = data.get("edad")
        peso_actual = data.get("peso_actual")

        if not sexo or not altura or not edad or not peso_actual:
            return jsonify({"message": "All fields for persona are required"}), 400

        nueva_entidad = {
            "nombre": nombre,
            "tipo": tipo,
            "sexo": sexo,
            "altura": altura,
            "edad": edad,
            "pesos": [{"fecha": fecha_alta, "peso": peso_actual}]
        }

    elif tipo == "perro":
        sexo = data.get("sexo")
        raza = data.get("raza")
        peso_actual = data.get("peso_actual")

        if not sexo or not raza or not peso_actual:
            return jsonify({"message": "All fields for perro are required"}), 400

        nueva_entidad = {
            "nombre": nombre,
            "tipo": tipo,
            "sexo": sexo,
            "raza": raza,
            "pesos": [{"fecha": fecha_alta, "peso": peso_actual}]
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

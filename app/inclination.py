import json
from flask import Blueprint, request, jsonify
import numpy as np

bp = Blueprint('determineTrend', __name__)

@bp.route('/trend', methods=['GET'])
def determinar_tendencia():
    nombre = request.args.get('nombre')

    archivo = 'data.json'
    try:
        with open(archivo, 'r') as f:
            datos = json.load(f)
    except FileNotFoundError:
        return jsonify({"message": "Archivo de datos no encontrado"}), 404

    for entidad in datos["entities"]:
        if entidad["nombre"] == nombre:
            if len(entidad["pesos"]) < 2:
                return jsonify({"message": "No hay suficientes datos para determinar una tendencia"}), 400

            fechas = [registro["fecha"] for registro in entidad["pesos"]]
            pesos = [registro["peso"] for registro in entidad["pesos"]]

            # Convertir fechas a números
            fechas_num = np.arange(len(fechas))

            # Calcular la pendiente de la tendencia
            pendiente, _ = np.polyfit(fechas_num, pesos, 1)

            if pendiente > 0:
                tendencia = "ascendente"
            elif pendiente < 0:
                tendencia = "descendente"
            else:
                tendencia = "estable"

            return jsonify({"tendencia": tendencia})

    return jsonify({"message": "Entidad no encontrada"}), 404

def init_app(app):
    app.register_blueprint(bp)

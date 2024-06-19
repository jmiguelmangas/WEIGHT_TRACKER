from flask import Blueprint, request, jsonify

bp = Blueprint('inclination', __name__)

@bp.route('/trend', methods=['GET'])
def determinar_tendencia():
    nombre = request.args.get('nombre')
    
    archivo = 'data.json'
    try:
        with open(archivo, 'r') as f:
            datos = json.load(f)
    except FileNotFoundError:
        return jsonify({"message": "No hay datos para determinar la tendencia"}), 404

    for entidad in datos["entities"]:
        if entidad["nombre"] == nombre:
            if len(entidad["pesos"]) < 2:
                return jsonify({"message": "No hay suficientes datos para determinar la tendencia"}), 200
            
            peso_inicial = entidad["pesos"][0]['peso']
            peso_final = entidad["pesos"][-1]['peso']
            
            tendencia = "engordando" if peso_final > peso_inicial else "adelgazando"
            
            return jsonify({
                "nombre": nombre,
                "tendencia": tendencia
            }), 200
    
    return jsonify({"message": "Entidad no encontrada"}), 404

def init_app(app):
    app.register_blueprint(bp)

# from flask import Flask, jsonify, request
# from flask_migrate import Migrate
# from flask_marshmallow import Marshmallow
# from marshmallow_sqlalchemy import SQLAlchemyAutoSchema

# from models import Product, Cart, User, db


# app = Flask(__name__)

# # Change the database URI
# app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///shopstore.db'
# app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# db.init_app(app)
# ma = Marshmallow(app)
# migrate = Migrate(app, db)
# # Define schemas for serialization


# class ProductSchema(ma.SQLAlchemyAutoSchema):
#     class Meta:
#         model = Product
#         include_relationships = True
#         load_instance = True


# class CartSchema(ma.SQLAlchemyAutoSchema):
#     class Meta:
#         model = Cart
#         include_fk = True
#         include_relationships = True
#         load_instance = True

# # Error response function


# def error_response(message, status_code):
#     return jsonify({'error': message}), status_code

# # Routes


# @app.route('/')
# def home():
#     return "Welcome to our online shop API"

# # Get all books


# @app.route('/products', methods=['GET'])
# def get_products():
#     products = Product.query.all()
#     schema = ProductSchema(many=True)
#     return jsonify(schema.dump(products))

# # Get a specific product by ID


# @app.route('/products/<int:id>', methods=['GET'])
# def get_product(id):
#     product = Product.query.get(id)
#     if not product:
#         return error_response('Product not found', 404)
#     schema = ProductSchema()
#     return jsonify(schema.dump(product))

# # Add a product to the cart
# # Add a product to the cart


# @app.route('/cart/add', methods=['POST'])
# def add_to_cart():
#     data = request.json
#     product_id = data.get('product_id')
#     quantity = data.get('quantity', 1)
#     user_id = data.get('user_id')  # Ensure user_id is provided in the JSON

#     if not product_id:
#         return error_response('Product ID is required', 400)

#     product = Product.query.get(product_id)
#     if not product:
#         return error_response('Product not found', 404)

#     if not user_id:
#         return error_response('User ID is required', 400)

#     # Create a new cart item
#     cart_item = Cart(product_id=product_id, quantity=quantity, user_id=user_id)
#     db.session.add(cart_item)
#     db.session.commit()

#     return jsonify({'message': 'Product added to cart successfully', 'cart_item_id': cart_item.id}), 201

# # Route to retrieve a user's cart by user ID


# @app.route('/cart/<int:id>', methods=['GET'])
# def get_user_cart(id):
#     user = User.query.get(id)

#     if not user:
#         return error_response('User not found', 404)

#     # Assuming you have a relationship between User and Cart models
#     cart = user.cart

#     if not cart:
#         return jsonify({'message': 'User has no items in the cart', 'cart': []})

#     schema = CartSchema(many=True)
#     serialized_cart = schema.dump(cart)

#     # Calculate cart counter (if needed)
#     cart_counter = sum(item.quantity for item in cart)

#     return jsonify({'message': 'User cart retrieved successfully', 'cart': serialized_cart, 'cartCounter': cart_counter})


# if __name__ == '__main__':
#     app.run(debug=True)


from flask import Flask, jsonify, request
from flask_migrate import Migrate
from flask_marshmallow import Marshmallow
from marshmallow_sqlalchemy import SQLAlchemyAutoSchema

from models import Product, Cart, User, db  # Import the models

app = Flask(__name__)

# Change the database URI
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///shopstore.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db.init_app(app)
ma = Marshmallow(app)
migrate = Migrate(app, db)

# Define schemas for serialization


class ProductSchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = Product
        include_relationships = True
        load_instance = True


class CartSchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = Cart
        include_fk = True
        include_relationships = True
        load_instance = True

# Error response function


def error_response(message, status_code):
    return jsonify({'error': message}), status_code

# Routes


@app.route('/')
def home():
    return "Welcome to our online shop API"

# Get all products


@app.route('/products', methods=['GET'])
def get_products():
    products = Product.query.all()
    schema = ProductSchema(many=True)
    return jsonify(schema.dump(products))

# Get a specific product by ID


@app.route('/products/<int:id>', methods=['GET'])
def get_product(id):
    product = Product.query.get(id)
    if not product:
        return error_response('Product not found', 404)
    schema = ProductSchema()
    return jsonify(schema.dump(product))

# Add a product to the cart


@app.route('/cart/add', methods=['POST'])
def add_to_cart():
    data = request.json
    product_id = data.get('product_id')
    quantity = data.get('quantity', 1)
    user_id = data.get('user_id')

    if not product_id:
        return error_response('Product ID is required', 400)

    product = Product.query.get(product_id)
    if not product:
        return error_response('Product not found', 404)

    if not user_id:
        return error_response('User ID is required', 400)

    user = User.query.get(user_id)
    if not user:
        return error_response('User not found', 404)

    # Create a new cart item
    cart_item = Cart(product=product, quantity=quantity, user=user)
    db.session.add(cart_item)
    db.session.commit()

    return jsonify({'message': 'Product added to cart successfully', 'cart_item_id': cart_item.id}), 201

# Route to retrieve a user's cart by user ID


@app.route('/cart/<int:id>', methods=['GET'])
def get_user_cart(id):
    user = User.query.get(id)

    if not user:
        return error_response('User not found', 404)

    # Assuming you have a relationship between User and Cart models
    cart = user.carts

    if not cart:
        return jsonify({'message': 'User has no items in the cart', 'cart': []})

    schema = CartSchema(many=True)
    serialized_cart = schema.dump(cart)

    # Calculate cart counter (if needed)
    cart_counter = sum(item.quantity for item in cart)

    return jsonify({'message': 'User cart retrieved successfully', 'cart': serialized_cart, 'cartCounter': cart_counter})


if __name__ == '__main__':
    app.run(debug=True)

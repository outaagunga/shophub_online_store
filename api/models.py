# from flask_sqlalchemy import SQLAlchemy

# db = SQLAlchemy()

# # Models


# class Product(db.Model):
#     id = db.Column(db.Integer, primary_key=True)
#     title = db.Column(db.String(255), nullable=False)
#     price = db.Column(db.Float, nullable=False)
#     description = db.Column(db.Text)
#     image_url = db.Column(db.String(255))

#     # Define a relationship with Cart model
#     carts = db.relationship('Cart', back_populates='product', lazy=True)


# class User(db.Model):
#     id = db.Column(db.Integer, primary_key=True)
#     username = db.Column(db.String(255), nullable=False, unique=True)
#     description = db.Column(db.Text)

#     # Define a relationship with Cart model
#     carts = db.relationship('Cart', back_populates='user', lazy=True)

#     # Add other user-related fields as needed


# class Cart(db.Model):
#     id = db.Column(db.Integer, primary_key=True)
#     product_id = db.Column(db.Integer, db.ForeignKey(
#         'product.id'), nullable=False)
#     quantity = db.Column(db.Integer, nullable=False, default=1)
#     user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)

#     # Define relationships
#     product = db.relationship('Product', back_populates='carts')
#     user = db.relationship('User', back_populates='carts')

#     def __init__(self, product, quantity=1):
#         self.product = product
#         self.quantity = quantity
#         self.user = user

#     def __repr__(self):
#         return f"<Cart(product_id={self.product_id}, quantity={self.quantity}, user_id={self.user_id})>"


# from flask_sqlalchemy import SQLAlchemy

# db = SQLAlchemy()

# # Models


# class Product(db.Model):
#     id = db.Column(db.Integer, primary_key=True)
#     title = db.Column(db.String(255), nullable=False)
#     price = db.Column(db.Float, nullable=False)
#     description = db.Column(db.Text)
#     image_url = db.Column(db.String(255))

#     # Define a relationship with Cart model
#     carts = db.relationship('Cart', back_populates='product', lazy=True)


# class User(db.Model):
#     id = db.Column(db.Integer, primary_key=True)
#     username = db.Column(db.String(255), nullable=False, unique=True)
#     description = db.Column(db.Text)

#     # Define a relationship with Cart model
#     carts = db.relationship('Cart', back_populates='user', lazy=True)

#     # Add other user-related fields as needed


# class Cart(db.Model):
#     id = db.Column(db.Integer, primary_key=True)
#     product_id = db.Column(db.Integer, db.ForeignKey(
#         'product.id'), nullable=False)
#     quantity = db.Column(db.Integer, nullable=False, default=1)
#     user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)

#     # Define relationships
#     product = db.relationship('Product', back_populates='carts')
#     user = db.relationship('User', back_populates='carts')

#     def __init__(self, product, quantity=1, user=None):
#         self.product = product
#         self.quantity = quantity
#         self.user = user

#     def __repr__(self):
#         return f"<Cart(product_id={self.product_id}, quantity={self.quantity}, user_id={self.user_id})>"

from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

# Models


class Product(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    product_name = db.Column(db.String(255), nullable=False)
    product_description = db.Column(db.Text)
    unit_price = db.Column(db.Float, nullable=False)
    product_full_image = db.Column(db.String(255))
    product_thumbnail = db.Column(db.String(255))
    ranking = db.Column(db.Integer)
    created = db.Column(db.DateTime, default=db.func.current_timestamp())
    updated = db.Column(db.DateTime, default=db.func.current_timestamp(),
                        onupdate=db.func.current_timestamp())

    # Define a relationship with Cart model
    carts = db.relationship('Cart', back_populates='product', lazy=True)


class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(255), nullable=False, unique=True)
    description = db.Column(db.Text)

    # Define a relationship with Cart model
    carts = db.relationship('Cart', back_populates='user', lazy=True)

    # Add other user-related fields as needed


class Cart(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    product_id = db.Column(db.Integer, db.ForeignKey(
        'product.id'), nullable=False)
    quantity = db.Column(db.Integer, nullable=False, default=1)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)

    # Define relationships
    product = db.relationship('Product', back_populates='carts')
    user = db.relationship('User', back_populates='carts')

    def __init__(self, product, quantity=1, user=None):
        self.product = product
        self.quantity = quantity
        self.user = user

    def __repr__(self):
        return f"<Cart(product_id={self.product_id}, quantity={self.quantity}, user_id={self.user_id})>"

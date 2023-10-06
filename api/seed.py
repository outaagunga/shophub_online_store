# from app import app
# from models import Product, Cart, db


# def seed_products():
#     print("📚 Seeding products...")
#     products_data = [
#         {
#             "title": "Khaki Size 32",
#             "price": 10.99,
#             "description": "A classic long trouser that explores themes of wealth, love, and the American Dream in the 1920s.",
#             "image_url": "https://images.pexels.com/photos/256450/pexels-photo-256450.jpeg?auto=compress&cs=tinysrgb&w=400",
#         },
#         {
#             "title": "Hisense 48 inches Smart TV",
#             "price": 40000,
#             "description": "Discover Hisense's latest smart TV & entertainment system, appliances, and smartphones designed for your pleasure and convenience.",
#             "image_url": "https://images.pexels.com/photos/5202925/pexels-photo-5202925.jpeg?auto=compress&cs=tinysrgb&w=1600",
#         },
#         {
#             "title": "Wireless Bluetooth Earbuds",
#             "price": 49.99,
#             "description": "High-quality wireless earbuds with noise-canceling technology for an immersive audio experience.",
#             "image_url": "https://images.pexels.com/photos/8534088/pexels-photo-8534088.jpeg?auto=compress&cs=tinysrgb&w=400",
#         },
#         {
#             "title": "Designer Leather Handbag",
#             "price": 199.99,
#             "description": "Elegant leather handbag with multiple compartments, perfect for any occasion.",
#             "image_url": "https://images.pexels.com/photos/904350/pexels-photo-904350.jpeg?auto=compress&cs=tinysrgb&w=600",
#         },
#         {
#             "title": "Smartphone Stand and Charger",
#             "price": 29.99,
#             "description": "A versatile smartphone stand with a built-in wireless charger, ideal for keeping your device charged and accessible.",
#             "image_url": "https://images.pexels.com/photos/3919263/pexels-photo-3919263.jpeg?auto=compress&cs=tinysrgb&w=400",
#         },
#         {
#             "title": "Vintage Style Sunglasses",
#             "price": 19.99,
#             "description": "Classic vintage-style sunglasses that never go out of fashion.",
#             "image_url": "https://images.pexels.com/photos/701877/pexels-photo-701877.jpeg?auto=compress&cs=tinysrgb&w=1600",
#         },
#         {
#             "title": "Coffee Maker with Grinder",
#             "price": 89.99,
#             "description": "Enjoy freshly ground coffee with this coffee maker featuring a built-in grinder for the perfect cup every time.",
#             "image_url": "https://images.pexels.com/photos/6851001/pexels-photo-6851001.jpeg?auto=compress&cs=tinysrgb&w=1600",
#         },
#         {
#             "title": "Fitness Tracker Watch",
#             "price": 59.99,
#             "description": "Stay fit and active with this sleek fitness tracker watch that monitors your daily activities and heart rate.",
#             "image_url": "https://images.pexels.com/photos/3766111/pexels-photo-3766111.jpeg?auto=compress&cs=tinysrgb&w=600",
#         },
#         {
#             "title": "Gaming Keyboard and Mouse Combo",
#             "price": 79.99,
#             "description": "Enhance your gaming experience with this RGB gaming keyboard and mouse combo designed for precision and performance.",
#             "image_url": "https://images.pexels.com/photos/713831/pexels-photo-713831.jpeg?auto=compress&cs=tinysrgb&w=400",
#         },
#         {
#             "title": "Portable Bluetooth Speaker",
#             "price": 39.99,
#             "description": "Take your music with you wherever you go with this portable Bluetooth speaker featuring high-quality sound and long battery life.",
#             "image_url": "https://pictures-kenya.jijistatic.com/37461559_MzAwLTMwMy0wMzVjYmRmY2Iw.webp",
#         },
#     ]

#     with app.app_context():
#         for product_info in products_data:
#             product = Product(**product_info)
#             db.session.add(product)
#         db.session.commit()
#     print("📚 Products seeded successfully!")


# def seed_carts():
#     print("📚 Seeding carts...")
#     cart_data = [
#         {"product_id": 1, "quantity": 2},
#         {"product_id": 2, "quantity": 1},
#         {"product_id": 3, "quantity": 3},
#         # Add more cart items here as needed...
#     ]

#     with app.app_context():
#         for cart_info in cart_data:
#             cart_item = Cart(**cart_info)
#             db.session.add(cart_item)
#         db.session.commit()
#     print("📚 Carts seeded successfully!")


# if __name__ == "__main__":
#     with app.app_context():
#         db.create_all()
#     seed_products()
#     # seed_carts()
#     print("📚 Done seeding!")


from app import app
from models import Product, db
from datetime import datetime


def seed_products():
    print("📚 Seeding products...")
    products_data = [
        {
            "product_name": "Khaki Size 32",
            "unit_price": 999.99,
            "product_description": "A classic long trouser that explores themes of wealth, love, and the American Dream in the 1920s.",
            "product_full_image": "https://images.pexels.com/photos/256450/pexels-photo-256450.jpeg?auto=compress&cs=tinysrgb&w=400",
            "product_thumbnail": "https://images.pexels.com/photos/256450/pexels-photo-256450.jpeg?auto=compress&cs=tinysrgb&w=200",
            "ranking": 1,
            "created": datetime.utcnow(),
            "updated": datetime.utcnow(),
        },
        {
            "product_name": "Hisense 48 inches Smart TV",
            "unit_price": 40000,
            "product_description": "Discover Hisense's latest smart TV & entertainment system, appliances, and smartphones designed for your pleasure and convenience.",
            "product_full_image": "https://images.pexels.com/photos/5202925/pexels-photo-5202925.jpeg?auto=compress&cs=tinysrgb&w=1600",
            "product_thumbnail": "https://images.pexels.com/photos/5202925/pexels-photo-5202925.jpeg?auto=compress&cs=tinysrgb&w=200",
            "ranking": 2,
            "created": datetime.utcnow(),
            "updated": datetime.utcnow(),
        },
        {
            "product_name": "Blue Denim Jeans",
            "unit_price": 1499.99,
            "product_description": "Classic blue denim jeans for a timeless and stylish look.",
            "product_full_image": "https://images.pexels.com/photos/1485031/pexels-photo-1485031.jpeg?auto=compress&cs=tinysrgb&w=400",
            "product_thumbnail": "https://images.pexels.com/photos/1485031/pexels-photo-1485031.jpeg?auto=compress&cs=tinysrgb&w=400",
            "ranking": 1,
            "created": datetime.utcnow(),
            "updated": datetime.utcnow(),
        },
        {
            "product_name": "Wireless Bluetooth Earbuds",
            "unit_price": 1999.99,
            "product_description": "High-quality wireless earbuds with noise-cancellation technology.",
            "product_full_image": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
            "product_thumbnail": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
            "ranking": 2,
            "created": datetime.utcnow(),
            "updated": datetime.utcnow(),
        },
        {
            "product_name": "Smartphone Stand Holder",
            "unit_price": 2499.99,
            "product_description": "Adjustable smartphone holder for comfortable viewing and video calls.",
            "product_full_image": "https://media.istockphoto.com/id/1133746875/photo/smartphone-on-a-red-tripod-on-a-white-kitchen-background.webp?b=1&s=170667a&w=0&k=20&c=xm362JI4Bv0tPjsBfMEOfOErYFhcY9-_cE0ZIooQUoI=",
            "product_thumbnail": "https://media.istockphoto.com/id/1133746875/photo/smartphone-on-a-red-tripod-on-a-white-kitchen-background.webp?b=1&s=170667a&w=0&k=20&c=xm362JI4Bv0tPjsBfMEOfOErYFhcY9-_cE0ZIooQUoI=",
            "ranking": 3,
            "created": datetime.utcnow(),
            "updated": datetime.utcnow(),
        },
        {
            "product_name": "Stainless Steel Water Bottle",
            "unit_price": 499.99,
            "product_description": "Durable stainless steel water bottle to stay hydrated on the go.",
            "product_full_image": "https://media.istockphoto.com/id/1320906677/photo/thermos-flask.webp?b=1&s=170667a&w=0&k=20&c=ARm_aVWLj5QrnJMLyeiQOZROlvEDkoNlo_0U0yZyY6U=",
            "product_thumbnail": "https://media.istockphoto.com/id/1320906677/photo/thermos-flask.webp?b=1&s=170667a&w=0&k=20&c=ARm_aVWLj5QrnJMLyeiQOZROlvEDkoNlo_0U0yZyY6U=",
            "ranking": 4,
            "created": datetime.utcnow(),
            "updated": datetime.utcnow(),
        },
        {
            "product_name": "Wireless Gaming Mouse",
            "unit_price": 499.99,
            "product_description": "Precision wireless gaming mouse with customizable RGB lighting.",
            "product_full_image": "https://media.istockphoto.com/id/1077903942/photo/scrolling-and-clicking-through-a-world-of-opportunity.jpg?b=1&s=612x612&w=0&k=20&c=efbvSrzvenspg6xLqAy5__TcUoTptIedf4mBj_y65Yw=",
            "product_thumbnail": "https://media.istockphoto.com/id/1077903942/photo/scrolling-and-clicking-through-a-world-of-opportunity.jpg?b=1&s=612x612&w=0&k=20&c=efbvSrzvenspg6xLqAy5__TcUoTptIedf4mBj_y65Yw=",
            "ranking": 5,
            "created": datetime.utcnow(),
            "updated": datetime.utcnow(),
        },
        {
            "product_name": "Vintage Leather Backpack",
            "unit_price": 1999.99,
            "product_description": "A stylish and spacious leather backpack for everyday use.",
            "product_full_image": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFja3BhY2t8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
            "product_thumbnail": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFja3BhY2t8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
            "ranking": 6,
            "created": datetime.utcnow(),
            "updated": datetime.utcnow(),
        },
        {
            "product_name": "Smart Thermostat",
            "unit_price": 2400.99,
            "product_description": "Energy-efficient smart thermostat for climate control in your home.",
            "product_full_image": "https://media.istockphoto.com/id/1346046300/photo/latin-man-choosing-temperature-on-thermostat.jpg?b=1&s=612x612&w=0&k=20&c=rwJpDZfK3j_3d7j3yF85Fp9mIm18Gl4G_oZ6GvrgaCA=",
            "product_thumbnail": "https://media.istockphoto.com/id/1346046300/photo/latin-man-choosing-temperature-on-thermostat.jpg?b=1&s=612x612&w=0&k=20&c=rwJpDZfK3j_3d7j3yF85Fp9mIm18Gl4G_oZ6GvrgaCA=",
            "ranking": 7,
            "created": datetime.utcnow(),
            "updated": datetime.utcnow(),
        },
        {
            "product_name": "Digital Camera Kit",
            "unit_price": 7000.99,
            "product_description": "Complete digital camera kit for capturing high-quality photos and videos.",
            "product_full_image": "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=400",
            "product_thumbnail": "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=400",
            "ranking": 8,
            "created": datetime.utcnow(),
            "updated": datetime.utcnow(),
        },
        {
            "product_name": "Yoga Mat with Carrying Strap",
            "unit_price": 2999.99,
            "product_description": "Non-slip yoga mat with a convenient carrying strap for fitness enthusiasts.",
            "product_full_image": "https://media.istockphoto.com/id/520263673/photo/backpack.jpg?b=1&s=612x612&w=0&k=20&c=b5Vbnhqm412UyjTBdqPWT-3rNyhjFnZoKb_aQILgRuc=",
            "product_thumbnail": "https://media.istockphoto.com/id/520263673/photo/backpack.jpg?b=1&s=612x612&w=0&k=20&c=b5Vbnhqm412UyjTBdqPWT-3rNyhjFnZoKb_aQILgRuc=",
            "ranking": 9,
            "created": datetime.utcnow(),
            "updated": datetime.utcnow(),
        },
        {
            "product_name": "LED Desk Lamp with USB Charging Port",
            "unit_price": 2200.99,
            "product_description": "Adjustable LED desk lamp with built-in USB charging port for convenience.",
            "product_full_image": "https://media.istockphoto.com/id/943156040/photo/a-lighted-black-reading-lamp-in-front-of-white-background-with-copy-space.jpg?b=1&s=612x612&w=0&k=20&c=gUCQRaXRjTivnMcmuk16fxzx4MmcPl5v2T3jPqz_nGg=",
            "product_thumbnail": "https://media.istockphoto.com/id/943156040/photo/a-lighted-black-reading-lamp-in-front-of-white-background-with-copy-space.jpg?b=1&s=612x612&w=0&k=20&c=gUCQRaXRjTivnMcmuk16fxzx4MmcPl5v2T3jPqz_nGg=",
            "ranking": 10,
            "created": datetime.utcnow(),
            "updated": datetime.utcnow(),
        },
        # Add more product data here...
    ]

    with app.app_context():
        for product_info in products_data:
            product = Product(**product_info)
            db.session.add(product)
        db.session.commit()
    print("📚 Products seeded successfully!")


if __name__ == "__main__":
    with app.app_context():
        db.create_all()
    seed_products()
    print("📚 Done seeding!")

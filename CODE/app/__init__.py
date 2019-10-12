from flask import Flask
from flask_bcrypt import Bcrypt
from app.config import Config
from app.main.routes import main

bcrypt = Bcrypt()


def create_app(config_class=Config):
    app = Flask(__name__)
    app.config.from_object(Config)

    bcrypt.init_app(app)


    app.register_blueprint(main)



    return app
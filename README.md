### ReliefBackend

This is the backend for the video player application test

### How to run (node/express)

In the `relief-backend` directory run

```
cd v2
docker build -t video-player-api .
docker run -p 3000:3000 video-player-api
```

The development server will start at http://127.0.0.1:3000/

### How to run (django)

In the `relief-backend` directory run

```
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt
python videoPlayer/manage.py runserver
```

The development server will start at http://127.0.0.1:8000/

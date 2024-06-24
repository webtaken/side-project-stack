# Backend

Steps to deploy:

- Create virtual environment `python -m venv .venv` python (recommended >=11).
- Set in `runtime.txt` the python version.
- To install packages just type `pip install -r requirements.txt`.
- If you wanna recreate the `requirements.txt` install pipreqs: `pip install pipreqs` -> `pipreqs . --force --ignore .venv`.
- Create a `.env` file using the `.env.example` file as template.
- Push to main branch linked to Railway app.

# Libraries used

Use `pip install <library>`, and then `pip freeze > requirements.txt`.

```
Django
dj_rest_auth
dj_database_url
django_allauth
django_environ
djangorestframework
djangorestframework_simplejwt
django-cors-headers
psycopg2
uvicorn
gunicorn
whitenoise
```

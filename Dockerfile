FROM python:3.10
WORKDIR /ourchats
ENV PYTHONDONTWIRTEBYTECODE 1
ENV PYTHONUNBUFFERED 1
COPY Pipfile Pipfile.lock /ourchats/
RUN pip install pipenv && pipenv install --dev --system

docker build --no-cache -f SQL\Dockerfile.PostgreSql -t proba20-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t proba20-java/app ../../..

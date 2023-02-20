## Restore pg_dump into a docker

Command:
```bash
cat "dump file here" | docker exec -i postgres_container_name_here pg_restore -U db_username_here --dbname db_here -c
```
-c here is to delete stuff before recreating (Avoids error when importing tables that already exist)
[with the flags](https://hevodata.com/learn/postgresql-dump-import/#m21)

cat do dump
-> manda pra docker exec com nome do container do postgres
-> manda o comando pg_restore -U usuario_admin --dbname nome_do_banco -c (-c destroi as coisas antes de recrear, se não ele tenta recriar as tabelas de produção no seu ambiente local de dev e dá ruim)

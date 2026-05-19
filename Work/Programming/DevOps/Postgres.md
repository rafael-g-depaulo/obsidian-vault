## Deploy
[Neon](https://neon.tech/) — Serverless, Fault-Tolerant, Branchable Postgres

## Restore backup

with info from [this stackoverflow answer](https://stackoverflow.com/questions/2732474/restore-a-postgres-backup-file-using-the-command-line) and [this post in the official docs](https://www.postgresql.org/docs/8.1/backup.html) we can run the following command:

```sh
pg_restore -h "$PG_HOST" -U "$PG_USER" -d "$PG_DB" < "$BACKUP_FILE_LOCATION"
```

This will prompt for the postreg user's password, and after this things should be honky doory.

**OBS: The answer said to use `psql`, but if you're using a pg_dump style backup, you need to use pg_restore, as the code above uses**
![[Pasted image 20230514211554.png]]

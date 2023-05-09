## Restore backup

After `heroku login`, run

```sh
heroku pg:backups:restore b006 DATABASE_URL --app app-name
```
where b006 is the id of the backup that is already in heroku, and app-name is the app name
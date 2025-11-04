# Railway Environment Variables Setup

## Critical: Database Configuration

When you add a MySQL database in Railway, it provides these variables automatically:
- `MYSQLHOST`
- `MYSQLPORT`
- `MYSQLDATABASE`
- `MYSQLUSER`
- `MYSQLPASSWORD`

## Required Variables to Add Manually

In your Railway service settings, add these variables:

```bash
APP_NAME=Procode
APP_ENV=production
APP_KEY=base64:AM+lgifVOTzYhjVUd19FK55OnVkYbRvTorKVRQaRC6c=
APP_DEBUG=false
APP_URL=https://please-work-production-231a.up.railway.app

# Database - Use Railway's provided variables
DB_CONNECTION=mysql
DB_HOST=${{MYSQLHOST}}
DB_PORT=${{MYSQLPORT}}
DB_DATABASE=${{MYSQLDATABASE}}
DB_USERNAME=${{MYSQLUSER}}
DB_PASSWORD=${{MYSQLPASSWORD}}

# Session & Cache
SESSION_DRIVER=database
CACHE_STORE=database
QUEUE_CONNECTION=database

# Optional: Mail settings
MAIL_MAILER=log
MAIL_FROM_ADDRESS=noreply@procode.com
MAIL_FROM_NAME=Procode
```

## Important Notes:

1. **Railway Syntax**: Use `${{VARIABLE}}` NOT `${VARIABLE}` for variable references in Railway
2. **MySQL Service**: Make sure you have added a MySQL database service in your Railway project
3. **Service Variables**: These database variables are automatically created when you add MySQL
4. **Reference Variables**: In Railway's dashboard, when setting DB_HOST, use the reference syntax: `${{MYSQLHOST}}`

## Steps to Fix:

1. Go to Railway Dashboard → Your Project
2. Make sure MySQL database service exists (if not, add it via "New" → "Database" → "MySQL")
3. Go to your web service → "Variables" tab
4. Add all the variables listed above
5. For DB_HOST, DB_PORT, etc., use the `${{MYSQLHOST}}` syntax to reference the MySQL service variables
6. Redeploy your service

## Alternative: Simpler Database Setup

If you have MySQL service in the same project, Railway can automatically link them:

1. In your web service, go to "Settings"
2. Under "Service Variables", connect to your MySQL service
3. Railway will automatically provide all MySQL variables
4. You only need to set:
   ```
   DB_CONNECTION=mysql
   DB_HOST=${{MYSQLHOST}}
   DB_PORT=${{MYSQLPORT}}
   DB_DATABASE=${{MYSQLDATABASE}}
   DB_USERNAME=${{MYSQLUSER}}
   DB_PASSWORD=${{MYSQLPASSWORD}}
   ```

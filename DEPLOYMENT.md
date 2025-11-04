# Railway Deployment Guide

## Prerequisites
- Railway account ([railway.app](https://railway.app))
- GitHub repository connected to Railway
- MySQL database provisioned in Railway

## Quick Deployment Steps

### 1. Connect Your Repository
1. Go to [Railway Dashboard](https://railway.app/dashboard)
2. Click "New Project"
3. Select "Deploy from GitHub repo"
4. Choose your repository

### 2. Add MySQL Database
1. In your Railway project, click "New"
2. Select "Database" → "Add MySQL"
3. Railway will automatically set environment variables:
   - `MYSQLHOST`
   - `MYSQLPORT`
   - `MYSQLDATABASE`
   - `MYSQLUSER`
   - `MYSQLPASSWORD`

### 3. Configure Environment Variables
Add these required variables in Railway's "Variables" tab:

```bash
APP_NAME=Procode
APP_ENV=production
APP_KEY=           # Generate with: php artisan key:generate --show
APP_DEBUG=false
APP_URL=https://your-app.railway.app

# Database (automatically set by Railway MySQL)
DB_CONNECTION=mysql

# Session & Cache
SESSION_DRIVER=database
CACHE_STORE=database
QUEUE_CONNECTION=database

# Mail (configure with your SMTP provider)
MAIL_MAILER=smtp
MAIL_HOST=
MAIL_PORT=587
MAIL_USERNAME=
MAIL_PASSWORD=
MAIL_FROM_ADDRESS=noreply@procode.com
MAIL_FROM_NAME=Procode
```

### 4. Generate APP_KEY
Run locally to generate your application key:
```bash
php artisan key:generate --show
```
Copy the output and add it to Railway's `APP_KEY` variable.

### 5. Deploy
Railway will automatically:
1. Install PHP and Node.js dependencies
2. Build your Vite assets
3. Run database migrations
4. Cache configurations
5. Start the application

### 6. Post-Deployment
After successful deployment:
1. Visit your Railway-provided URL
2. The app should be running without the local error
3. Monitor logs in Railway dashboard

## Deployment Files

The following files have been created for Railway:

- **`railway.json`** - Railway build and deploy configuration
- **`Procfile`** - Process commands for Railway
- **`nixpacks.toml`** - Build environment configuration
- **`.env.production.example`** - Production environment template

## Troubleshooting

### Build Fails
- Check Railway logs for specific errors
- Verify all environment variables are set
- Ensure `APP_KEY` is generated and set

### Database Connection Issues
- Verify MySQL service is running in Railway
- Check that database credentials are correct
- Run migrations manually if needed: `php artisan migrate --force`

### Assets Not Loading
- Ensure `npm run build` completed successfully
- Check `public/build/manifest.json` exists
- Verify `APP_URL` matches your Railway domain

### JavaScript Errors
The local "Cannot access 'M' before initialization" error was due to dev server caching. 
In production:
- Fresh builds eliminate this issue
- Assets are properly minified and bundled
- No local cache conflicts

## Database Migrations

Railway runs migrations automatically on deploy via the start command:
```bash
php artisan migrate --force
```

To manually run migrations:
1. Go to Railway project settings
2. Open a shell in your service
3. Run: `php artisan migrate --force`

## Monitoring

- **Logs**: Available in Railway dashboard under "Deployments" → "View Logs"
- **Metrics**: Check CPU, Memory, and Network usage
- **Health**: Railway provides automatic health checks

## Scaling

To scale your application:
1. Go to project settings in Railway
2. Adjust resources (RAM, CPU)
3. Consider using Redis for cache and sessions in production

## Additional Notes

- **Storage**: For file uploads, consider using S3 or Railway's Volume feature
- **Queue Workers**: Add a separate service for queue processing
- **Scheduled Tasks**: Use Railway's cron jobs or external schedulers

## Support

- Railway Docs: https://docs.railway.app
- Laravel Docs: https://laravel.com/docs
- Project Issues: Create an issue in your repository

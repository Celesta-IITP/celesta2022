# Celesta 2022
[![Netlify Status](https://api.netlify.com/api/v1/badges/b07da026-7a2b-45a5-90e3-2cf244033806/deploy-status)](https://app.netlify.com/sites/celesta2022/deploys)

### For contributing
Create a .env file in the root directory and the file should contain the following fields

NODE_ENV = development<br>
PORT = 4500<br>
DB_URI = mongodb://localhost:27017/celesta<br>
JWT_SEC = jwtsecretdev<br>
EMAIL_USER = iitpapplication@gmail.com<br>
EMAIL_PASSWORD = password<br>


### Quick Start

```bash
# Install dependencies (Server & Client)
npm run add

# Run client build
npm run build

# Server + Static Build Client - http://localhost:4500
npm start
```

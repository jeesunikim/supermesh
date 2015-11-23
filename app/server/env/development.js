/*
    These environment variables are not hardcoded so as not to put
    production information in a repo. They should be set in your
    heroku (or whatever VPS used) configuration to be set in the
    applications environment, along with NODE_ENV=production

 */

module.exports = {
    "DATABASE_URI": 'mongodb://localhost:27017/supermesh',
    "SESSION_SECRET": 'Optimus Prime is my real dad'
}
module.exports = {
  apps : [{
    script: 'bin/www',
    watch: '.'
  }, ],

  deploy : {
    production : {
      user : 'shubham',
      host : '163.172.24.36',
      ref  : 'origin/master',
      repo : 'git@github.com:shubs/pm2DeployDemo.git',
      path : '/home/shubham/pm2Stuff',
      'pre-deploy-local': '',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production',
      'pre-setup': ''
    }
  }
};

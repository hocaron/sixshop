db.auth('root', 'root');

db = db.getSiblingDB('sixshop');

db.createUser({
  user: 'root',
  pwd: 'root',
  roles: [
    {
      role: 'readWrite',
      db: 'sixshop',
    },
  ],
});

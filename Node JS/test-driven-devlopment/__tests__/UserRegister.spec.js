const request = require('supertest');
const app = require('../src/app');
const { sequelize } = require('../src/models/User');
const User = require('../src/models/User');

beforeAll(() => {
  // wait
  return sequelize.sync();
});

beforeEach(() => {
  // otherwise you will get three records inserted
  return User.destroy({ truncate: true });
});

const postDummyUser = () =>
  request(app).post('/api/1/users').send({
    userName: 'user1',
    email: 'user1@gmail.com',
    password: 'Test@123',
  });

describe('User Registration', () => {
  it('return 200 ok when signup request is valid', (done) => {
    // async
    // request(app).post('/api/1/users')
    // .send({
    //     userName:'user1',
    //     email:'user1@gmail.com',
    //     password:'Test@123'
    // }).expect(200,done);

    postDummyUser().then((response) => {
      expect(response.status).toBe(200);
      done();
    });
  });

  it('return success message when signup is valid', (done) => {
    postDummyUser().then((response) => {
      expect(response.body.message).toBe('User Created');
      done();
    });
  });

  it('It saves the user to the database', (done) => {
    postDummyUser().then((response) => {
      User.findAll().then((userList) => {
        expect(userList.length).toBe(1);
        done();
      });
    });
  });

  it('It saves the username and password as same as passed to the database', (done) => {
    postDummyUser().then((response) => {
      User.findAll().then((userList) => {
        expect(userList[0].email).toBe('user1@gmail.com');
        expect(userList[0].password).toBe('Test@123');
        expect(userList[0].userName).toBe('user1');
        done();
      });
    });
  });
});

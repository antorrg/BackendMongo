import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({

  email: {
    type: String,
  required: true
  },
  nickname: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: false
  },
  usersurname: {
    type: String,
    required: false
  },
  password: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: false
  },
  role: {
    type: String,
    enum: ['admin', 'moderator', 'user'],
    //default: 'user'
  },
  enabled: {
    type: Boolean,
    default: true
  },
  deleted: {
    type: Boolean,
    default: false
  }
});

const User = mongoose.model('User', userSchema);

export default User;
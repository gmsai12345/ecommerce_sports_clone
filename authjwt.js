import jwt from 'jsonwebtoken';

const signToken = (user) => {
  return jwt.sign(
    {
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    },

    'login key',
    {
      expiresIn: '30d',
    }
  );
};

export { signToken };
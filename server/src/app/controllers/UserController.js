import User from '../schemas/User';

class UserController {
  async index(req, res) {
    const users = await User.find();

    return res.json({ users });
  }

  async store(req, res) {
    await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });

    return res.json({ ok: true });
  }
}

export default new UserController();

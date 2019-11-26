import Sponsor from '../schemas/Sponsor';

class SponsorController {
  async index(req, res) {
    const sponsors = await Sponsor.find();

    return res.json({ sponsors });
  }

  async store(req, res) {
    await Sponsor.create({
      name: req.body.name,
      email: req.body.email,
    });

    return res.json({ ok: true });
  }
}

export default new SponsorController();

import offer from '../schemas/Offer';

class OfferController {
  async store(req, res) {
    await offer.create({
      sponsor_id: req.body.sponsor_id,
      offer_description: req.body.offer_description,
      minimum_points: req.body.minimum_points,
    });

    return res.json({ ok: true });
  }
}

export default new OfferController();

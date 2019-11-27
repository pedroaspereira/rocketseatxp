import Offer from '../schemas/Offer';

class OfferController {

    async index(req, res) {
        const offer = await Offer.find();

        return res.json({ offer });
    }

    async store(req, res) {

        await Offer.create({
            sponsor_id: req.body.sponsor_id,
            offer_description: req.body.offer_description,
            minimum_points: req.body.minimum_points,
        });

        return res.json({ ok: true });
    }

}

export default new OfferController();

import * as Yup from 'yup';
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
    
    /*
    async update(req, res) {
        const schema = Yup.object().shape({

            sponsor_id: Yup.string(),
            offer_description: Yup.string(),
            minimum_points: Yup.number(),
            
        });

        if (!(await schema.isValid(req.body))) {
            return res.status(400).json({ error: 'Validation fails' });
        }

        const { sponsor_id, offer_description, minimum_points } = req.body;

        const offer = await offer.findByPk(req.offerId);        

        const data = await user.update(req.body);

        return data 
       

    }
    */
}

export default new OfferController();

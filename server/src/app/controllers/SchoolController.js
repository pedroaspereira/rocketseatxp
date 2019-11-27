import * as Yup from 'yup';
import School from '../schemas/School';

class SchoolController {
  async store(req, res) {
    const Schema = Yup.object().shape({
      name: Yup.string().required(),
      city: Yup.string().required(),
      region: Yup.string().required(),
    });
    if (!(await Schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation Fails' });
    }

    const { name, city, region } = await School.create(req.body).catch(err => {
      return res.status(400).json(err);
    });

    return res.status(200).json({ name, city, region });
  }

  async show(req, res) {
    const school = await School.find().catch(err => {
      res.status(400).json({ err });
    });
    return res.status(200).json({ school });
  }
}

export default new SchoolController();

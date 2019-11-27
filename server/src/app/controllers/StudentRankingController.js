import * as Yup from 'yup';
import StudentRanking from '../schemas/StudentRankingSchema';
import Student from '../schemas/User';
import School from '../schemas/School';

class StudentRankingController {
  async store(req, res) {
    const Schema = Yup.object().shape({
      student_id: Yup.string().required(),
      school_id: Yup.string().required(),
      total_points: Yup.string().required(),
      position: Yup.string().required(),
    });
    if (!(await Schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation Fail' });
    }

    const { student_id, school_id } = req.body;
    console.log(school_id);

    const student = await Student.findById({ _id: student_id });
    const school = await School.findById({ _id: school_id });

    if (!student) {
      return res
        .status(400)
        .json({ error: 'Does not have any Student with this ID' });
    }
    if (!school) {
      return res
        .status(400)
        .json({ error: 'Does not have any School with this ID' });
    }

    const StudentR = await StudentRanking.create(req.body).catch(err => {
      return res.status(400).json({ err });
    });

    return res.status(200).json({
      name: student.name,
      school: school.name,
      total_points: StudentR.total_points,
      position: StudentR.position,
    });
  }

  async show(req, res) {
    const StudentR = await StudentRanking.find();

    if (!StudentR) {
      return res.status(400).json({ error: 'Student Ranking is empty' });
    }
    const data = [];
    console.log('-');
    const promises = StudentR.map(async el => {
      const student = await Student.findById(el.student_id);
      const school = await School.findById(el.school_id);
      data.push({ el, name: student.name, school: school.name });
    });

    await Promise.all(promises);

    console.log(data);

    return res.status(200).json({
      data,
    });
  }
}

export default new StudentRankingController();

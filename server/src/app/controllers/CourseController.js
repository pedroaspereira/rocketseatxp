import Course from '../schemas/Course';

class CourseController {
  async index(req, res) {
    const courses = await Course.find();

    return res.json({ courses });
  }

  async store(req, res) {
    await Course.create({
      subject: req.body.subject,
      course_presentation_url: req.body.course_presentation_url,
      course_max_points: req.body.course_max_points,
    });

    return res.json({ ok: true });
  }
}

export default new CourseController();

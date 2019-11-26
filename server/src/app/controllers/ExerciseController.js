import Exercise from '../schemas/Exercise';

class ExerciseController {
  async index(req, res) {
    const exercises = await Exercise.find();

    return res.json({ exercises });
  }

  async store(req, res) {
    await Exercise.create({
      course_id: req.body.course_id,
      exercise_presentation_url: req.body.exercise_presentation_url,
      exercise_points: req.body.exercise_points,
    });

    return res.json({ ok: true });
  }
}

export default new ExerciseController();

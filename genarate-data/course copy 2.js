let faker = require("faker");

function generateCourses(number) {
  let courses = [];

  Array.from(new Array(number)).forEach(() => {
    const course = {
      id: faker.random.uuid(),
      ten: faker.lorem.words(),
      diachi: faker.lorem.paragraph(),
      sdt: faker.image.technics(),
      mail: faker.image.people(),
      tuoi: faker.name.findName(),

      // coursesDetail: [{}],
    };
    courses.push(course);
  });
  return courses;
}
module.exports = generateCourses;

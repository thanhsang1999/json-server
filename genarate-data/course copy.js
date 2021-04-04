let faker = require("faker");

function generateCourses(number) {
  let courses = [];

  Array.from(new Array(number)).forEach(() => {
    const course = {
      id: faker.random.uuid(),
      ten: faker.lorem.words(),
      theloai: faker.lorem.paragraph(),
      hinhanh: faker.image.technics(),
      mota: faker.image.people(),
      trangthai: faker.name.findName(),
      iduser: Math.random() * 5,

      // coursesDetail: [{}],
    };
    courses.push(course);
  });
  return courses;
}
module.exports = generateCourses;

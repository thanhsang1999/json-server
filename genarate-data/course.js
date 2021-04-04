let faker = require("faker");

function generateCourses(number) {
  let courses = [];

  Array.from(new Array(number)).forEach(() => {
    const course = {
      id: faker.random.uuid(),
      title: faker.lorem.words(),
      description: faker.lorem.paragraph(),
      thumbnail: faker.image.technics() + "/" + faker.random.number(),
      imgAvatar: faker.image.people(),
      nameAuthor: faker.name.findName(),
      rateStar: Math.random() * 5,
      bought: faker.random.number(10000),
      price: faker.random.number(10000000),
      createdAt: Date.parse(faker.date.past()),
      updateAt: Date.parse(faker.date.past()),
      // coursesDetail: [{}],
    };
    courses.push(course);
  });
  return courses;
}
module.exports = generateCourses;

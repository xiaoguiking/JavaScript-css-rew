/**
 * 需求  形成test.json 结构  保存到leimu.json 文件里面
 * 回调地狱版本
 */

const fs = require("fs");

let uid = 3;

fs.readFile("./data/user.json", "utf8", function (err, data) {
  const userData = JSON.parse(data),
    userInfo = userData.filter((item) => item.id === uid)[0];
  //   console.log(userData, userInfo, "userData");

  fs.readFile("./data/userCourse.json", "utf8", function (err, data) {
    console.log(data);
    const userCourseData = JSON.parse(data),
      userId = userInfo.id,
      userCourse = userCourseData.filter((item) => item.uid === userId)[0];
    console.log(userCourse, "userCourse");

    fs.readFile("./data/course.json", "utf8", function (err, data) {
      const courseData = JSON.parse(data),
        useCourses = userCourse.courses;

      let _arr = [];
      useCourses.map((item) => {
        console.log(item, "item");
        courseData.map((i) => {
          if (i.id === item) {
            _arr.push(i);
          }
        });
      });

      const userCourseInfo = {
        username: userInfo.username,
        courses: _arr,
      };

      fs.writeFileSync(
        `./data/${userInfo.username}.json`,
        JSON.stringify(userCourseInfo)
      );
    });
  });
});

/**
 * promise 版
 */
const fs = require("fs");

let uid = 1;

function readFile(path, prevData) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, "utf8", function (err, data) {
      if (err) {
        reject(err);
      }

      const resData = JSON.parse(data);

      resolve({
        prevData,
        resData,
      });
    });
  });
}

readFile("./data/user.json")
  .then((res) => {
    const { resData } = res;
    const userInfo = resData.filter((item) => item.id === uid)[0];

    throw new Error("失败");
    return readFile("./data/userCourse.json", userInfo);
  })
  .then((res) => {
    const { prevData, resData } = res;
    const userId = prevData.id,
      userCourse = resData.filter((item) => item.uid === userId)[0];
    // console.log(userCourse, "--------userCourse--------->");

    return readFile("./data/course.json", {
      username: prevData.username,
      userCourse,
    });
  })
  .then((res) => {
    const { prevData, resData } = res;
    console.log(prevData, "1111");
    const userCourses = prevData.userCourse.courses;
    // console.log(userCourses, "-----prevData----->");

    let _arr = [];
    userCourses.map((item) => {
      resData.map((i) => {
        if (item === i.id) {
          _arr.push(i);
        }
      });
    });
    // console.log(_arr);

    const userCourseInfo = {
      username: prevData.username,
      courses: _arr,
    };

    fs.writeFileSync(
      `./data/${userCourseInfo.username}.json`,
      JSON.stringify(userCourseInfo)
    );
  })
  .catch((err) => {
    console.log(err);
  });

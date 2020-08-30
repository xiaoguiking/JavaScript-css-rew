## es-cli 脚手架

### 面向对象

#### 语言发展史

机器语言----- 汇编语言（简单英文单词）----- 低级语言（面向过程） ------ 高级语言（面向对象）------模块系统 ------- 框架--------------系统接口 api

#### es5 面向对象

- 没有统一写法

  ```js
  <!--函数形式写对象 既是构造函数又是类 -->
  function Person(name, age){
      this.name = name;
      this.age = age;
  }

  <!-- 方法挂载到原型 -->
    Person.prototype.showName = function(){
        alert(this.name);
    }

    Person.prototype.showAge = function(){
        alert(this.age)
    }

    let p = new Person('blue', 23)

    p.showName();
    p.showAge();
  ```

- Es6 面向对象

  ```js
  <!-- 单独的类声明和构造函数声明 -->
  class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }

    showName() {
      alert(this.name);
    }

    showAge() {
      alert(this.age);
    }
  }

  let p = new Person("blue", 23);

  p.showName();
  p.showAge();
  ```

  #### 继承

        ```js
        <!-- es5继承 -->
        function worker(name, age, job){
            Person.call(this, name, age);
            this.job = job;
        }

        worker.prototype = new Person();
        worker.prototype.constructor = worker;

        worker.prototype.showJob = function() {
            alert(this.job)
        }

        let ws = new worker('继承', 23, '天行漂流')

        ws.showAge();
        ws.showName();
        ws.showJob();

        ```


        ```js
        ES6继承

        class  类声明
        constructor 构造函数
        extends 继承
        super  超类/父类
        class Worker extends Person{
            constructor(name,age, job){
                super(name, age);
                this.job = job;
            }

            showJob() {
                alert(this.job);
            }
        }

        let w = new Worker('blue', 323, "es6继承");

        w.showName();
        w.showAge();
        w.showJob();

        ```

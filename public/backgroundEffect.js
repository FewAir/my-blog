// import webAnimation from 'https://cdnjs.cloudflare.com/ajax/libs/web-animations/2.3.2/web-animations.min.js';
// 星空粒子数
let starCount = 600;
//动画时长
let maxTime = 60;

let getStar = document.getElementById("starBox");
let w = window;

let width = w.innerWidth;
let height = w.innerHeight;

let speed;

//生成粒子
for (let i = 0; i < starCount; i++) {

  // 随机高度
  let randomHeight = Math.round(Math.random() * height)
  // console.log(randomHeight);
  let stars = document.createElement("div")

  //时间范围
  speed = 1400 * (Math.random() * maxTime + 1)

  //设置粒子属性
  stars.setAttribute("class", "star" + (3 - Math.floor(speed / 1000 / 8)))
  // stars.style.background = "red";
  //随机颜色
  // const r = Math.round(Math.random() * 255);
  // const g = Math.round(Math.random() * 255);
  // const b = Math.round(Math.random() * 255);
  // const a = ((Math.random() * 5 + 5) / 10).toFixed(2)
  //随机颜色返回的是一个0.5到1 的两位小数;如果生成的0-1就直接是const a =Math.random()
  // const color = `rgba(${r},${g},${b},${a})`
  stars.style.backgroundColor = "white"

  //添加粒子到主体
  getStar.appendChild(stars);

  // 设置动画
  stars.animate(
    [
      // 起始位置
      {
        transform: "translate3d(" + width + "px," + randomHeight + "px,0)",

      },
      // 结束位置
      {
        transform: "translate3d(-" + Math.random() * 256 + "px," + randomHeight + "px,0)"
      }
    ],
    // 设置动画属性
    {
      delay: Math.random() * -speed,
      duration: speed,
      iterations: 1000
    }
  )
}


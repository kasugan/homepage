// 定义列表页
var web_list = [
  ["https://www.zhihu.com/", "知乎"],
  ["http://www.bilibili.com/", "bili"],
  ["https://cubox.pro/web/save/inbox", "cubox"],
  ["https://www.wolai.com/", "我来"],
  ["https://www.imooc.com/u/index/allcourses", "慕课"],
  ["https://leetcode-cn.com", "力扣"],
  ["https://juejin.cn", "掘金"],
];

let p = document.getElementsByClassName("minibox");
let i = 0;
for (const webKey of p) {
  const n = `${web_list[i][0]}`;
  webKey.onclick = () => {
    location.href = n;
  };
  i++;
}
i = 0;
for (const webName of p) {
  let pName = document.createElement("p");
  const n = `${web_list[i][1]}`;
  pName.innerHTML = n;
  pName.className = "radial";
  webName.append(pName);
  i++;
}

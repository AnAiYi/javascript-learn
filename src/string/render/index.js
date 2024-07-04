const template = 'my name is ${name}';
const data = {
  name: 'Missy'
};
/**
 * 解析模板字符串
 * @author Missy
 * @param {string} template 
 * @param {object} data 
 * @returns {*}
 */
function render(template,data) {
  const reg = /\$\{(\w+)\}/; // 模板字符串占位符正则

  // 判断字符串里是否存在占位符
  if(template.test(template)) {
    // 获取占位符包含的变量名
    const key = reg.exec(template)[1]; 
    // 替换占位符
    template = template.replace(reg,data[key]); 
    // 递归调用,继续查找下一个占位符
    return render(template);
  }
  return template;
}
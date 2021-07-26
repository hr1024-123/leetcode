import install, { getInstance, printExample } from './src';

function run() {
  const instance = getInstance();
  const inputList = document.querySelectorAll('.input-list .input');
  const params = [];
  for (let i = 0; i < inputList.length; i += 1) {
    const input = inputList[i];
    const paramString = input.value.trim();
    let param;
    try {
      param = JSON.parse(paramString);
    } catch {
      alert('数据有误');
      return;
    }
    if (params !== undefined) params.push(param);
  }
  const result = instance(...params);
  const output = document.querySelector('.output');
  output.innerHTML = result;
}

function createMenu() {
  const menu = document.createElement('div');
  menu.className = 'menu';
  const title = document.createElement('h2');
  title.className = 'title';
  title.textContent = '菜单';
  const ul = document.createElement('ul');
  ul.id = 'list';
  install(ul);
  menu.appendChild(title);
  menu.appendChild(ul);
  return menu;
}

function createInput() {
  const inputList = document.querySelector('.input-list');
  const input = document.createElement('textarea');
  input.className = 'input';
  inputList.appendChild(input);
}

function deleteParams() {
  const inputList = document.querySelectorAll('.input-list .input');
  if (!inputList.length) return;
  inputList[inputList.length - 1].remove();
}

function createAdd() {
  const add = document.createElement('div');
  add.textContent = '新增参数';
  add.className = 'btn add';
  add.addEventListener('click', createInput);
  return add;
}

function createDelete() {
  const deleteBtn = document.createElement('div');
  deleteBtn.textContent = '删除参数';
  deleteBtn.className = 'btn delete';
  deleteBtn.addEventListener('click', deleteParams);
  return deleteBtn;
}

function createSubmit() {
  const button = document.createElement('div');
  button.textContent = '执行';
  button.className = 'submit btn';
  button.addEventListener('click', run);
  return button;
}

function createOutput() {
  const output = document.createElement('div');
  output.className = 'output';
  return output;
}

function createLine() {
  const line = document.createElement('div');
  line.className = 'line';
  return line;
}

function append(fragment, nodes) {
  for (let i = 0; i < nodes.length; i += 1) {
    fragment.appendChild(nodes[i]);
  }
}

export default function init() {
  const menu = createMenu();
  const fragment = document.createDocumentFragment();
  const inputList = document.createElement('div');
  inputList.className = 'input-list';
  const add = createAdd();
  const deleteBtn = createDelete();

  const line = createLine();

  const submit = createSubmit();

  const p = document.createElement('p');
  p.textContent = '执行结果：';

  const output = createOutput();

  append(fragment, [inputList, add, deleteBtn, line, submit, p, output]);

  const container = document.createElement('div');
  container.className = 'container';
  container.appendChild(fragment);

  const app = document.querySelector('#app');

  append(app, [menu, container]);
  printExample();
}

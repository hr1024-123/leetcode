/* eslint-disable no-unused-vars */
import array from './array';
import './style.css';

export const collection = [array];

export const path = [];

export function getInstance() {
  let arr = collection;
  let instance = () => '';
  for (let i = 0; i < path.length; i += 1) {
    const result = arr.find((v) => v.name === path[i]);
    if (!result) {
      break;
    } else if (i === path.length - 1) {
      instance = result;
    } else {
      arr = result;
    }
  }
  return instance;
}

export function printExample() {
  const example = document.querySelector('.example') ?? document.createElement('div');
  example.className = 'example';
  example.innerHTML = getInstance().example.replaceAll('\n', '<br>') || '';
  const parentNode = document.querySelector('.container');
  const referenceNode = document.querySelector('.input-list');
  parentNode.insertBefore(example, referenceNode);
}

function computePath() {
  const { pathname } = window.location;
  const [full, sub, item] = /^\/([A-z]+)\/([A-z]+)/g.exec(pathname) ?? [];
  while (path.length) {
    path.pop();
  }
  path.push(sub, item);
}

function toggleMenu() {
  const node = this.nextSibling;
  if ([...this.classList].includes('sub-menu-open')) {
    this.classList.remove('sub-menu-open');
    node.classList.add('sub-list-hide');
  } else {
    this.classList.add('sub-menu-open');
    node.classList.remove('sub-list-hide');
  }
}

let lastItem = null;
function selectMenu(sub, item) {
  return function () {
    if (lastItem === this) return;
    const inputList = document.querySelector('.input-list');
    inputList.innerHTML = '';
    const output = document.querySelector('.output');
    output.innerHTML = '';
    if (lastItem) {
      lastItem.classList.remove('selected');
    }
    this.classList.add('selected');
    lastItem = this;
    window.history.pushState({}, '', `/${sub.name}/${item.name}`);
    computePath();
    printExample();
  };
}

function installItem(li, item) {
  const [last, match] = path;
  if (match === item.name) {
    li.className = 'menu-item selected';
    lastItem = li;
  } else {
    li.className = 'menu-item';
  }
}

function createLi(itemTemp) {
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < itemTemp.length; i += 1) {
    const li = document.createElement('li');
    li.textContent = itemTemp[i].chineseName;
    installItem(li, itemTemp[i]);
    li.addEventListener('click', selectMenu(itemTemp, itemTemp[i]).bind(li));
    fragment.appendChild(li);
  }
  return fragment;
}

function installSub(div, ul, item) {
  const [match] = path;
  if (match === item.name) {
    div.className = 'sub-menu sub-menu-open';
    ul.className = 'sub-list';
  } else {
    div.className = 'sub-menu';
    ul.className = 'sub-list sub-list-hide';
  }
}

export default function install(parent) {
  computePath();
  const fragment = document.createDocumentFragment();
  // 循环一级菜单
  for (let i = 0; i < collection.length; i += 1) {
    const li = document.createElement('li');
    // 创建一级菜单名称
    const div = document.createElement('div');
    div.textContent = collection[i].chineseName;
    div.addEventListener('click', toggleMenu);
    const span = document.createElement('span');
    span.className = 'arrow';
    div.appendChild(span);

    const ul = document.createElement('ul');
    installSub(div, ul, collection[i]);
    const liFragment = createLi(collection[i]);
    ul.appendChild(liFragment);
    li.appendChild(div);
    li.appendChild(ul);
    fragment.appendChild(li);
  }
  parent.appendChild(fragment);
}

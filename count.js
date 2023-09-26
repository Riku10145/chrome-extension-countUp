const textarea = document.querySelector('textarea');
const p = document.querySelector('p');

// localStorageからtextareaの内容を復元,textarea,pに復元
const savedText = localStorage.getItem('savedText') || '';
textarea.value = savedText;
p.textContent = savedText.length;

// 文字数カウント
textarea.addEventListener('input', () => {
  const text = textarea.value;
  p.textContent = text.length;
  
// 入力内容をlocalStorageに保存
  localStorage.setItem('savedText', text);
});

// コピーボタン
document.querySelector('#copybtn').addEventListener('click', () => {
  navigator.clipboard.writeText(textarea.value);
});

// 消去ボタン, textarea初期化, p初期化
document.querySelector('#deletebtn').addEventListener('click', () => {
  textarea.value = '';
  p.textContent = 0;
  
// localStorageから保存された内容を削除
  localStorage.removeItem('savedText');
});

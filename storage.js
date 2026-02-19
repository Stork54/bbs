<button onclick="showStorage()">查看</button>
<button onclick="deleteKey()">刪除指定</button>
<button onclick="clearAll()">全部清空</button>

<script>
function showStorage(){
  let output = "";
  for(let i = 0; i < localStorage.length; i++){
    let key = localStorage.key(i);
    output += key + " = " + localStorage.getItem(key) + "\n";
  }
  alert(output || "目前是空的");
}

function deleteKey(){
  let key = prompt("輸入要刪除的key名稱");
  if(key){
    localStorage.removeItem(key);
    alert("已刪除：" + key);
  }
}

function clearAll(){
  localStorage.clear();
  alert("全部資料已清空");
}
</script>

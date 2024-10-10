// HTML öğelerine erişim
const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskButton');
const taskList = document.getElementById('taskList');

// Görev ekleme işlemi
addTaskButton.addEventListener('click', () => {
  const taskText = taskInput.value;

  // Boş görev eklenmesini engelle
  if (taskText.trim() === '') {
    alert('Lütfen bir görev girin.');
    return;
  }

  // Yeni bir 'li' öğesi oluştur
  const taskItem = document.createElement('li');
  taskItem.textContent = taskText;

  // Görev tamamlandığında üstünü çizmek için tıklama olayı
  taskItem.addEventListener('click', () => {
    taskItem.classList.toggle('completed');
  });

  // Silme butonu ekle
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Sil';
  deleteButton.classList.add('delete');
  
  deleteButton.addEventListener('click', () => {
    taskList.removeChild(taskItem);
  });

  taskItem.appendChild(deleteButton);
  taskList.appendChild(taskItem);

  // Girdi alanını temizle
  taskInput.value = '';
});

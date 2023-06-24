var fileInput = document.getElementById('file-input');
var fileList= [];
fileInput.addEventListener('change',function(event){
    fileList = [];
    for(var i=0; i < fileInput.files.length;i++){
        fileList.push(fileInput.files[i]);
    }
}
);

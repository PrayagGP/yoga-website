<<<<<<< HEAD
//mvcmodel\middleware\upload
const multer= require('multer');
const storage=  multer.memoryStorage();
const upload= multer({storage:storage});
=======
//mvcmodel\middleware\upload
const multer= require('multer');
const storage=  multer.memoryStorage();
const upload= multer({storage:storage});
>>>>>>> 2013c7f895fbeb786f63f9a81d3c67a6cf249f89
module.exports= upload;
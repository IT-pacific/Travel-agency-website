import multer from 'multer';

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    const uniquePrefix = Date.now();
    const ext = file.originalname.split('.')[1];
    cb(null, uniquePrefix + '.' + ext);
  },
});

const upload = multer({ storage: storage });

export const uploadSingle = (field) => {
  return upload.single(field);
};

export const uploadMany = (fields, count) => {
  return upload.array(fields, count);
};

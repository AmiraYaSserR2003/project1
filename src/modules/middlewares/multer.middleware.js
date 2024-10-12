import multer from "multer";

export const multerMiddleware = () => {
    //diskstorage 
    const storage = multer.diskStorage({
        destination:(req, file,cb) =>{
            cb(null, "src/uploads");
        },
    })
    return multer({storage});

}
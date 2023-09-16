import  jwt  from "jsonwebtoken"

const generarToken = (correo,contrasena) => {
    return new Promise((resolve, reject) => {
        const payload={correo,contrasena};
        jwt.sign(payload,process.env.SECRETOR_KEY,{
            expiresIn: '1h'
        },(err, token)=>{
             if(err){
                reject('No se puede generar el token.')
             }else{
                resolve(token);
             }
        })

    })
}
export  {generarToken};
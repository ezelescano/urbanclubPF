// const { swal } = require("sweetalert")

//ERROR MESSAGE
const EM_NO_USER_ID = "No se encontró ningún usuario con ese ID" //EM Error Message
const EM_SYNTAX_ID = "la sintaxis de entrada no es válida para tipo integer"


const EM_CORREO_INV = "Ingrese un correo electrónico válido"
const EM_PASS_INV = "Ingrese la contraseña"
const EM_NOMBRE_INV = "Se requiere Nombre"
const EM_APELLIDO_INV = "Se requiere Apellido"
const EM_ALIAS_INV = "Se requiere un Alias"
const EM_PASS_CARACT = "Se requiere password con al menos 8 caracteres"
const EM_OCUPAT_SEL1 = "Se requiere al menos una ocupación"
const EM_USER_NOT_CR = "No se pudo crear el usuario"
//SUCCESS MESSAGE
const SM_USER_CREATED = "Usuario creado con éxito"

//TITLE ALERT
const TLE_ERROR = "ERROR "
const TLE_WARNING = "ADVERTENCIA "
const TLE_SUCCESS = "INFORMACION "
const TLE_INFORMATION = "INFORMACIÖN "
//ICONO ALERT
const ICO_ERROR = "error"
const ICO_WARN = "warning"
const ICO_SUCCESS = "success"
const ICO_INFO = "info"
const ICO_QUESTION = "question"

//BUTTON TEXT ALERT
const BTX_YES = "Si"
const BTX_NO = "No"
const BTX_CANCEL = "Cancelar"
const BTX_ACEPTAR = "Aceptar"

// const swalCust = (text, title = TLE_SUCCESS, icon = ICO_INFO, buttonOk = BTX_ACEPTAR, buttonNo = null)=>{
//     //
//     swal({
//         title,
//         text,
//         icon,
//         buttons: buttonOk//[buttonOk, buttonNo]
//       })
// }

module.exports = {EM_NO_USER_ID,EM_SYNTAX_ID, EM_CORREO_INV, EM_PASS_INV, EM_NOMBRE_INV, EM_APELLIDO_INV, EM_ALIAS_INV,
                    EM_PASS_CARACT, EM_OCUPAT_SEL1,EM_USER_NOT_CR, SM_USER_CREATED,
                    TLE_ERROR,TLE_WARNING,TLE_SUCCESS, TLE_INFORMATION,
                    ICO_ERROR,ICO_WARN,ICO_SUCCESS,ICO_INFO,ICO_QUESTION,
                    BTX_YES,BTX_NO,BTX_CANCEL,BTX_ACEPTAR} 
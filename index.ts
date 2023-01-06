import { FindCursor } from "mongodb";
import { ABMService } from "./abmService.js";


const abmService = new ABMService()

await abmService.insertar({monto: 130.50})
    .then(result => console.log(result.insertedId))
    .catch( err => console.error(err));

await abmService.insertar({monto: 220.63})
    .then(result => console.log(result.insertedId))
    .catch( err => console.error(err));

let totalItems: any[] = []

await abmService.listar()
    .then((result: FindCursor) => result.forEach(e => {totalItems.push(e)}))
    .catch( err => console.error(err));

await abmService.eliminar(totalItems[0]._id)

console.log("Fin del programa")

process.exit();



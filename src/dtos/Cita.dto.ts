import { Consultorio } from "./Consultorio.dto";
import { Doctor } from "./Doctor.dto";

export interface Cita{

  id: number;
  consultorio: Consultorio;
  doctor: Doctor;
  horario_consulta: string;
  nombre_paciente: string;

}

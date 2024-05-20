import { useState, useEffect } from 'react'
import Alerta from './Alerta'
import usePacientes from '../hooks/usePacientes';

const Formulario = () => {

    const [nombre, setNombre] = useState('');
    const [propietario, setPropietario] = useState('');
    const [email, setEmail] = useState('');
    const [fecha, setFecha] = useState('');
    const [sintomas, setSintomas] = useState('');
    const [id, setId] = useState(null);

    const [alerta, setAlerta] = useState({});

    const { guardarPaciente, paciente } = usePacientes();
    

    useEffect(()=> {

        if(paciente?.nombre){
            setNombre(paciente.nombre)
            setPropietario(paciente.propietario)
            setEmail(paciente.email)
            setFecha(paciente.fecha)
            setSintomas(paciente.sintomas)
            setId(paciente._id)
        }

    }, [paciente])

    const handleSubmit = e => {
        e.preventDefault();

        // Validar el formulario
        if ([nombre, propietario, email, fecha, sintomas].includes('')) {
            setAlerta({
                msg: 'Todos los campos son Obligatorios',
                error: true
            })
            return;
        }
        setAlerta({})

        guardarPaciente({ nombre, propietario, email, fecha, sintomas, id })
        setAlerta({ msg: 'Guardado Correctamente'})
        setNombre('')
        setPropietario('')
        setEmail('')
        setFecha('')
        setSintomas('')
        setId('')
    }

    const { msg } = alerta;

    return (
        <>
        <h2 className="font-black text-3xl text-center"> Administrador de Pacientes </h2>
            <p className="text-xl mt-5 mb-10 text-center"> Añade tus pacientes y {''}
                <span className="text-indigo-600 font-bold"> Administralos </span>
            </p>

            {msg && <Alerta alerta={alerta} />}

            <form onSubmit={handleSubmit} className="bg-white py-10 px-5 mb-10 lg:mb-0 shadow-md rounded-md">
                <div className="mb-5">
                    <label htmlFor="nombre" className="uppercase font-bold">Nombre Mascota</label>
                    <input
                        id="nombre"
                        type="text"
                        placeholder="Nombre de la Mascota"
                        className="border-2 w-full pt-2 mt-2 placeholder-gray-400 rounded-md"
                        value={nombre}
                        onChange={e => setNombre(e.target.value)}

                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="propietario" className="uppercase font-bold">Nombre Propietario</label>
                    <input
                        id="propietario"
                        type="text"
                        placeholder="Nombre del Propietario"
                        className="border-2 w-full pt-2 mt-2 placeholder-gray-400 rounded-md"
                        value={propietario}
                        onChange={e => setPropietario(e.target.value)}

                    />
                </div>

                <div className="mb-5">
                    <label htmlFor="email" className="uppercase font-bold">Email</label>
                    <input
                        id="email"
                        type="text"
                        placeholder="Email del Propietario"
                        className="border-2 w-full pt-2 mt-2 placeholder-gray-400 rounded-md"
                        value={email}
                        onChange={e => setEmail(e.target.value)}

                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="fecha" className="uppercase font-bold">Fecha de Alta</label>
                    <input
                        id="fecha"
                        type="date"
                        className="border-2 w-full pt-2 mt-2 placeholder-gray-400 rounded-md"
                        value={fecha}
                        onChange={e => setFecha(e.target.value)}

                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="sintomas" className="uppercase font-bold">Síntomas</label>
                    <input
                        id="sintomas"
                        type="textarea"
                        placeholder="Describe los sintomas"
                        className="border-2 w-full pt-2 mt-2 placeholder-gray-400 rounded-md"
                        value={sintomas}
                        onChange={e => setSintomas(e.target.value)}

                    />
                </div>
                <input
                    type="submit"
                    className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-800 cursor-pointer transition-colors"
                    value={id ? 'Guardar Cambios' : 'Agregar Paciente'}

                />
            </form>
        </>
    )
}

export default Formulario;
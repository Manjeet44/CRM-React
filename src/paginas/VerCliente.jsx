import { useEffect, useState } from 'react';
import { useParams} from 'react-router-dom'
import Spinner from '../components/Spinner';

const VerCliente = () => {

    const [cliente, setCliente] = useState({});
    const [cargando, setCargando] = useState(true);

    const {id} = useParams();

    useEffect(() => {
        const obtenerClienteAPI = async () => {
            try {
                const url = `${import.meta.env.VITE_API_URL}/${id}`;
                const respuesta = await fetch(url);
                const resultado = await respuesta.json();
                setCliente(resultado);
            } catch (error) {
                console.log(error)
            }
            setCargando(!cargando);
        }   
        obtenerClienteAPI();
    }, [])

    const {nombre, empresa, email, telefono, notas } = cliente;

    return (
        cargando ? <Spinner/> : 
        Object.keys(cliente).length === 0 ? <p>No hay Resultados</p> : (
            <div>
                <>
                    <h1 className='font-black text-4xl text-blue-900'>Ver Cliente: {nombre}</h1>
                    <p className='mt-3'>Informacion del Cliente</p>

                    <p className='text-gray-600 text-2xl mt-10'>
                        <span className='text-gray-800 uppercase font-bold'>Cliente:</span> {nombre}
                    </p>
                    <p className='text-gray-600 text-2xl mt-4'>
                        <span className='text-gray-800 uppercase font-bold'>Email:</span> {email}
                    </p>
                    {telefono && (
                        <p className='text-gray-600 text-2xl mt-4'>
                        <span className='text-gray-800 uppercase font-bold'>Telefono:</span> {telefono}
                        </p>
                    )}
                    <p className='text-gray-600 text-2xl mt-4'>
                        <span className='text-gray-800 uppercase font-bold'>Empresa:</span> {empresa}
                    </p>
                    {notas && (
                        <p className='text-gray-600 text-2xl mt-4'>
                        <span className='text-gray-800 uppercase font-bold'>Notas:</span> {notas}
                        </p>
                    )}
                </>
                
            </div>
        )
        
    )
}

export default VerCliente
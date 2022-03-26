import {useNavigate} from 'react-router-dom';

const Cliente = ({cliente}) => {
    const navigate = useNavigate();

    const {nombre, empresa, email, telefono, notas, id } = cliente;

    return (
        <tr className='border-b hover:bg-gray-100'>
            <td className='p-3 text-center'>{nombre}</td>
            <td className='p-3'>
                <p><span className='text-gray-800 uppercase font-bold'>Email:</span> {email}</p>
                <p><span className='text-gray-800 uppercase font-bold'>Tel:</span> {telefono}</p>
            </td>
            <td className='p-3 text-center'>{empresa}</td>
            <td className='p-3'>
                <button 
                    type='button' 
                    className='bg-green-700 hover:bg-green-800 block mt-2 w-full text-white p-2 uppercase font-bold text-xs rounded-md'
                    onClick={() => navigate(`/clientes/${id}`)}
                >Ver</button>
                <button type='button' className='bg-blue-600 hover:bg-blue-700 block mt-2 w-full text-white p-2 uppercase font-bold text-xs rounded-md'>Editar</button>
                <button type='button' className='bg-red-600 hover:bg-blue-700 block mt-2 w-full text-white p-2 uppercase font-bold text-xs rounded-md'>Eliminar</button>
            </td>
        </tr>
    )
}

export default Cliente
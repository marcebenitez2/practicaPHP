import React, { useState, useEffect } from 'react';

function Solucion8() {
    const [autos, setAutos] = useState([]);

    const fetchData = async () => {
        try {
            const response = await fetch('http://localhost/ejercicio8.php');
            const data = await response.json();
            setAutos(data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    const handleReload = () => {
        window.location.reload(); // Recargar la página entera
    };

    return (
        <main className='w-1/2 mt-8 text-white text-center'>
            <table className='w-full bg-black '>
                <thead>
                    <tr className='bg-gray-500'>
                        <th>Marca</th>
                        <th>Capital</th>
                    </tr>
                </thead>
                <tbody>
                    {autos.map((auto, index) => (
                        <tr key={index}>
                            <td>{auto.Marca}</td>
                            <td>{auto.CapitalAcumulado}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button className='text-cyan-400 font-semibold mt-6' onClick={handleReload}>Recargar</button>
        </main>
    );
}

export default Solucion8;

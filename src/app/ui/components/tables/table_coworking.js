export default function Table_coworking ( {} ) {
  return (
    <div>
        <p className='font-extrabold text-2xl mb-5'>Valores Cool2work - Spotmarkt</p>

        <table className="table-auto w-full font-Montserrat">
            <thead>
                <tr className="p-3 border-b-2 border-blue-crea-400/20">
                <th></th>
                <th className="p-3 text-center border-x-2 border-blue-crea-400/20 font-extrabold text-lg text-blue-crea-400">Valor atual</th>
                <th className="p-3 text-center font-extrabold text-lg text-blue-crea-400">Parceria CREA</th>
                </tr>
            </thead>

            <tbody className="font-medium">

                <tr>
                    <td className="p-3 ">Diária (mesa compartilhada)</td>
                    <td className="p-3 text-center border-x-2 border-blue-crea-400/20">R$60,00</td>
                    <td className="p-3 text-center">R$30,00</td>
                </tr>

                <tr>
                    <td className="p-3 ">Plano mensal integral</td>
                    <td className="p-3 text-center border-x-2 border-blue-crea-400/20">R$650,00</td>
                    <td className="p-3 text-center">R$325,00</td>           
                </tr>

                <tr>
                    <td className="p-3 ">Sala de reunião</td>
                    <td className="p-3 text-center border-x-2 border-blue-crea-400/20">R$40,00</td>
                    <td className="p-3 text-center">R$20,00</td>
                </tr>

                <tr>
                    <td className="p-3 ">Sala privativa 6 posições</td>
                    <td className="p-3 text-center border-x-2 border-blue-crea-400/20 ">R$1.500,00</td>
                    <td className="p-3 text-center">R$3.000,00</td>
                </tr>

                <tr>
                    <td className="p-3 ">Endereço fiscal (taxa de adesão no mesmo valor)</td>
                    <td className="p-3 text-center border-x-2 border-blue-crea-400/20">R$140,00</td>
                    <td className="p-3 text-center">R$70,00</td>
                </tr>

            </tbody>

        </table>

        <p className="text-sm text-red-500 mt-5">*Valores válidos até dia 15/08/24.</p>
    </div>
  );
}
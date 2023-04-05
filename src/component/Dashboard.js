import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Dashboard = () => {
  const [rm1, setRm1] = useState(10);
  const [rm2, setRm2] = useState(10);
  const [fp1, setFp1] = useState(0);
  const [fp2, setFp2] = useState(0);

  const makeFP1 = () => {

    console.log('rm1', rm1);
    console.log('rm2', rm2);
    if (rm1 >= 8 && rm2 >= 5) {
      setRm1(rm1 - 8)
      setRm2(rm2 - 5)
      setFp1(fp1 + 1)

      toast.success("FP-1 has been made successfully!");
    } else {
      toast.error("Not enough raw material to make FP-1!");
    }
  }

  const makeFP2 = () => {
    console.log('rm1', rm1, 'rm2', rm2);
    if (rm1 >= 7 && rm2 >= 10) {
      // Subtract raw material for FP-2
      setRm1(rm1 - 7)
      setRm2(rm2 - 10)
      setFp2(fp2 + 1)

      toast.success("FP-2 has been made successfully!");
    } else {
      toast.error("Not enough raw material to make FP-2!");
    }
  }

  const handelChangeRM1Add = () => {
    setRm1(rm1 + 1);
  }
  const handelChangeRM1Sub = () => {
    setRm1((rm1 > 0) ? rm1 - 1 : 0);
  }
  const handelChangeRM2Add = () => {
    setRm2(rm2 + 1);
  }
  const handelChangeRM2Sub = () => {
    setRm2((rm2 > 0) ? rm2 - 1 : 0);
  }

  return (
    <>
      <div className='container'>
          <table className='w-full table-auto md:table-fixed border border-black'>
            <thead className='border border-black'>
              <tr>
                <th className='p-3 m-2 bg-gray-500 text-white  text-lg font-bold' colSpan={3}>Raw Material</th>
              </tr>
            </thead>
            <tbody>
              <tr className='border border-black hover:bg-gray-100'>
                <td className='p-3 m-2  text-lg font-bold'>RM-1</td>
                <td className=' text-lg font-bold'>{rm1}</td>
                <td><button onClick={handelChangeRM1Add} className='bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full'>+</button> <button onClick={handelChangeRM1Sub} className='bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full'>-</button></td>
              </tr>
              <tr className='border border-black hover:bg-gray-100'>
                <td className='p-3 m-2  text-lg font-bold'>RM-2</td>
                <td className=' text-lg font-bold'>{rm2}</td>
                <td><button onClick={handelChangeRM2Add} className='bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full'>+</button> <button onClick={handelChangeRM2Sub} className='bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full'>-</button></td>
              </tr>
            </tbody>
          </table>
          <table className='w-full table-auto md:table-fixed border border-black mt-20'>
            <thead className='border border-black'>
              <tr className='hover:bg-gray-100'>
                <th className='p-3 m-2 bg-purple-500 text-white  text-lg font-bold' colSpan={4}>Finish Product</th>
              </tr>
            </thead>
            <tbody>
              <tr className='border border-black hover:bg-gray-100'>
                <td className='p-3 m-2  text-lg font-bold'>FP-1</td>
                <td className=' text-lg font-bold'>{fp1}</td>
                <td><button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={makeFP1} >Make FP-1</button></td>
                <td className='text-sm'>Required : RM1-8, RM2-5</td>
              </tr>
              <tr className='border border-black hover:bg-gray-100'>
                <td className='p-3 m-2  text-lg font-bold'>FP-2</td>
                <td className=' text-lg font-bold'>{fp2}</td>
                <td><button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={makeFP2} >Make FP-2</button></td>
                <td className='text-sm'>Required : RM1-7, RM2-10</td>
              </tr>
            </tbody>
          </table>
        <ToastContainer />
      </div>
    </>
  )
}

export default Dashboard
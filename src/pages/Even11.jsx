import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { PiLineVerticalThin, PiPlus, PiPlusBold } from 'react-icons/pi'
import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverFooter,
    PopoverArrow,
    PopoverCloseButton,
    PopoverAnchor,
    Button
} from '@chakra-ui/react'

const Even11 = () => {
    const [data, setData] = useState([])
    const [homework, setHomework] = useState("")
    const [vocabulary, setVocabulary] = useState("")
    const [id, setId] = useState("")
    const [name, setName] = useState("")

    const getData = async () => {
        try {
            const response = await axios.get('https://aabd2a0302baf66f.mokky.dev/Even_11')
            setData(response.data)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getData()
    }, [])

    const handleData = (e) => {
        e.preventDefault()

        const putData = async () => {
            try {
                const response = await axios.patch(`https://aabd2a0302baf66f.mokky.dev/Even_11/${id}`, {
                    homework,
                    vocabulary,
                })
                console.log(response.data);
            } catch (error) {
                console.log(error);
            }
        }

        putData()

        setHomework("")
        setVocabulary("")
        setId("")
    }

    const handleAdd = (e) => {
        e.preventDefault()

        const putData = async () => {
            try {
                const response = await axios.post('https://aabd2a0302baf66f.mokky.dev/Even_11', {
                    name: name,
                    homework: "0",
                    vocabulary: "0",
                    vocAll: 0,
                    homeAll: 0,
                })
                console.log(response.data);
            } catch (error) {
                console.log(error);
            }
        }

        putData()

        setName("")
    }

    const handleDelete = (id) => {
        const deleteData = async () => {
            try {
                const response = await axios.delete(`https://aabd2a0302baf66f.mokky.dev/Even_11/${id}`)
                console.log(response.data);
            } catch (error) {
                console.log(error);
            }
        }

        deleteData()
    }

    return (
        <div className='max-w-[1250px] mx-auto mt-36 max-sm:px-5'>
            <div className='flex items-center justify-center max-sm:justify-between max-sm:flex-col-reverse'>
                <h1 className='text-2xl font-medium pr-96 max-sm:pr-0 max-sm:text-center hidden max-sm:inline-block'><span className='font-bold text-red-500'>Eslatma:</span> Agar o'quvchining Vocabulary xatolari 70 dan oshsa, o'quvchi avtomatik tarzda o'chirib tashlanadi!</h1>
                <div className='flex items-center gap-3 max-sm:mb-5'>
                    <Popover className="bg-gray-200 z-50">
                        <PopoverTrigger>
                            <Button className='px-5 py-1 rounded-xl bg-gray-200 text-blue-600 text-xl font-medium'>Add student</Button>
                        </PopoverTrigger>
                        <PopoverContent className='bg-gray-200 rounded-xl p-5 z-50'>
                            <PopoverArrow />
                            <PopoverHeader className='flex items-center justify-between border-b-2 border-black pb-2 mb-2'>
                                O'quvchi qo'shish
                                <PopoverCloseButton />
                            </PopoverHeader>
                            <PopoverBody>
                                <form className='grid gap-2 ' onSubmit={handleAdd}>
                                    <h1 className='text-2xl mt-2 font-medium text-blue-600 text-center'>Student's Name</h1>
                                    <input onChange={(e) => setName(e.target.value)} value={name} name='name' type="text" placeholder="O'quvchining ismi..." className='w-full px-5 py-1 rounded-xl border-2 border-gray-500' />
                                    <button className='text-center text-lg rounded-xl hover:shadow-md hover:shadow-blue-500 transition-all active:bg-blue-700 font-medium text-white px-5 py-2 mt-5 bg-blue-600'>Submit!</button>
                                </form>
                            </PopoverBody>
                        </PopoverContent>
                    </Popover>
                </div>
            </div>
            <table className="w-full text-center text-sm font-light mt-12 rounded-xl border-2 border-blue-500">
                <thead className="border-b bg-blue-500 font-medium text-white">
                    <tr>
                        <th scope="col" className="px-6 max-sm:px-[1px] py-4">#</th>
                        <th scope="col" className="px-6 max-sm:px-[1px] py-4">Name</th>
                        <th scope="col" className="px-6 max-sm:px-[1px] py-4">Handle</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((product) => {
                        return (
                            <tr key={product.id} className="border-b-2 border-blue-500 text-lg font-medium max-sm:text-sm">
                                <td className="whitespace-nowrap px-6 max-sm:ml-[5px] py-4 font-medium">{product.id}</td>
                                <td className="whitespace-nowrap px-6 max-sm:px-[5px] py-4">{product.name}</td>
                                <td className="whitespace-nowrap px-6 max-sm:px-[5px] py-4">
                                    <div>
                                        <Popover className="bg-gray-200">
                                            <PopoverTrigger>
                                                <Button className='px-5 py-1 rounded-xl bg-gray-200 text-blue-600 max-sm:mr-[5px]'>Edit</Button>
                                            </PopoverTrigger>
                                            <PopoverContent className='bg-gray-200 rounded-xl p-5 max-sm:mr-10'>
                                                <PopoverArrow />
                                                <PopoverHeader className='flex items-center justify-between border-b-2 border-black pb-2 mb-2'>
                                                    Bugungi xatolari
                                                    <PopoverCloseButton />
                                                </PopoverHeader>
                                                <PopoverBody>
                                                    <form className='grid gap-2 ' onSubmit={handleData}>
                                                        <h1 className='text-2xl mt-2 font-medium text-blue-600 text-center'>Homework</h1>
                                                        <input required onChange={(e) => setHomework(e.target.value)} value={homework} name='home' type="text" placeholder='Homework xatolari...' className='w-full px-5 py-1 rounded-xl border-2 border-gray-500' />
                                                        <h1 className='text-2xl mt-2 font-medium text-blue-600 text-center'>Vocabulary</h1>
                                                        <input required onChange={(e) => setVocabulary(e.target.value)} value={vocabulary} name='voc' type="text" placeholder='Vocabulary xatolari...' className='w-full px-5 py-1 rounded-xl border-2 border-gray-500' />
                                                        <h1 className='text-2xl mt-2 font-medium text-blue-600 text-center'>Student's ID</h1>
                                                        <input required onChange={(e) => setId(e.target.value)} value={id} name='id' type="text" placeholder="O'quvchi idsi..." className='w-full px-5 py-1 rounded-xl border-2 border-gray-500' />
                                                        <button className='text-center text-lg rounded-xl hover:shadow-md hover:shadow-blue-500 transition-all active:bg-blue-700 font-medium text-white px-5 py-2 mt-5 bg-blue-600'>Submit!</button>
                                                    </form>
                                                    <button onClick={() => handleDelete(product.id)} className='text-center text-lg rounded-xl hover:shadow-md hover:shadow-red-500 transition-all active:bg-red-700 font-medium text-white px-5 py-2 mt-5 bg-red-600 w-full'>Delete</button>
                                                </PopoverBody>
                                            </PopoverContent>
                                        </Popover>
                                    </div>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default Even11

// PiLineVerticalThin
// transition-all px-10 py-1 rounded-xl bg-blue-600 text-lg font-medium text-white hover:shadow-md hover:shadow-blue-500 active:bg-blue-800
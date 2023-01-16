import React, { useState, useEffect } from 'react'
import { message, } from 'antd'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { logoutUser } from '../../store/userSlice/userSlice'
import { REACT_APP_NASA_API_KEY } from '../../utils/appdetails'
import { imageInterface } from './dashboard-interface'
import {
  LoadingOutlined,
} from '@ant-design/icons';

const Dashboard = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [loading, setLoading] = useState(false)
  const [image, setImage] = useState<imageInterface>()

  const getImage = async () => {
    setLoading(true)

    try {
      const res = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=${REACT_APP_NASA_API_KEY}`)

      setLoading(true)

      setImage(res.data)


    } catch (error) {
      setLoading(true)
      message.error("Something went wrong: Get Image")
    }
  }

  useEffect(() => {
    getImage()

    // eslint-disable-next-line
  }, [])


  return (
    <div className='my-5'>
      <h1 className="mb-16 text-base font-semibold text-center font-ibmplexsans text-appcolorblack">
        Coding Challange
      </h1>

      <div className='flex justify-between w-11/12 mx-auto md:3/12 lg:w-5/12'>
        <h1 className="text-2xl font-semibold text-center mb-4 font-ibmplexsans text-appcolorblue">
          Dashboard
        </h1>


        <div>
          <span className='font-semibold text-center mb-4 font-ibmplexsans text-appcolorblue cursor-pointer'
            onClick={() => {
              navigate('/signin')
              dispatch(logoutUser())
            }}
          >
            Logout
          </span>
        </div>
      </div>

      <div className='w-11/12 mx-auto md:3/12 lg:w-5/12'>
        <h1 className="font-semibold text-center mb-4 font-ibmplexsans">
          View daily NASA iamge
        </h1>
      </div>

      <div className="flex justify-center w-11/12 mx-auto md:3/12 lg:w-5/12">


        {
          loading && <div>
            <LoadingOutlined
              className='text-2xl my-10'
            />
          </div>
        }

        {
          image != null &&
          <>
            <div>
              {
                image?.url &&
                <img src={image?.url} alt={image?.title} />
              }

              {
                image?.title &&
                <div className='text-xl w-11/12 mx-auto md:3/12 lg:w-5/12 mt-4'>
                  <h1 className="font-semibold text-center mb-4 font-ibmplexsans">
                    {image?.title}
                  </h1>
                </div>
              }

            </div>

          </>
        }


      </div>
    </div>
  )
}

export default Dashboard
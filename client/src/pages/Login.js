import React,{useState,useEffect} from 'react'
import {Form,Input,message} from 'antd';
import { Link,useNavigate } from 'react-router-dom';
import axios from 'axios';
import Spinner from '../components/Spinner';
import '../styles/Login.css';

const Login = () => {
    const [loading,setLoading] = useState(false);
    const navigate = useNavigate();
    const submitHandler = async(values) =>{
        try
        {
            setLoading(true);
           const {data} = await axios.post('/users/login',values);
           message.success('LogIn Successfull');
           setLoading(false);
           localStorage.setItem('user',JSON.stringify({...data.user,password:''}));
           navigate('/');

        }
        catch(error)
        {
           setLoading(false);
            message.error('Something Went Wrong');
        }
    }
    useEffect(()=>{
        if(localStorage.getItem('user'))navigate('/');
    },[navigate])
    return (
        <>
        <section className="vh-100" style={{backgroundColor: '#eee'}}>
  <div className="container h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-lg-12 col-xl-11">
        <div className="card text-black" style={{borderRadius: 25}}>
          <div className="card-body p-md-5">
            <div className="row justify-content-center">
              <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Log In</p>
                {loading && <Spinner/>}
                
                <Form className="mx-1 mx-md-4" layout='vertical'  onFinish={submitHandler} >
                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-user fa-lg me-3 fa-fw" />
                   
                  </div>
                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-envelope fa-lg me-3 fa-fw" />
                    <div className="form-outline flex-fill mb-0">
                    <Form.Item label='Your Email' name='email' required={true} >
                        <Input type='email'/>
                    </Form.Item>
                    </div>
                  </div>
                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-lock fa-lg me-3 fa-fw" />
                    <div className="form-outline flex-fill mb-0">
                    <Form.Item label='Password' name='password' required={true} >
                        <Input type='password' />
                    </Form.Item>
                    </div>
                  </div>
             
                  <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                      <div className='d-flex justify-content-between' >
                        <button type='submit' className='btn btn-primary'>Log-In</button>
                      </div>
                  </div>
                  <div className='lnk' >
                  <Link to='/register' className='' >Not Registered ? Click Here to Register</Link>
                  </div>

                </Form>
              </div>
              <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
            <img src="https://img.freepik.com/premium-vector/personal-income-expense-management-family-budget-strategy-planning_251235-357.jpg?w=2000" className="img-fluid" alt="Phone image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>









        </>
    )
}
export default Login
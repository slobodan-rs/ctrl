import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import { login } from '../services/services.js'

const Login = ({ setUser }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [check, setCheck] = useState(false)
    const [error, setError] = useState(false)
    const history = useHistory()

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            user: email,
            password: password,
        }
        login(data).then(res => {
            const token = res.data.Token;
            if (token) {
                check ? localStorage.setItem("Token", token) : sessionStorage.setItem("Token", token)
                setUser(true)
            }
            else {
                setError(true)
                setUser(false)
                setEmail('')
                setPassword('')
                setTimeout(() => {
                    setError(false)
                }, 2000)
            }
        }).catch(err => {
            console.log(err)
        })
    }

    return (

        <Wrapper>
            <Form onSubmit={handleSubmit}>
                <H1>Login</H1>
                <Par>Welcome to StockCTRL solutions</Par>
                <Par>Please Login or make an account by</Par>
                <Par padding>Signing up following the sign up form bellow.</Par>
                <Input type="text" placeholder="Email" required onChange={(e) => setEmail(e.target.value)} spanColor={error ? 1 : 0} value={email} />
                <Input type="password" placeholder="Password" required onChange={(e) => setPassword(e.target.value)} spanColor={error ? 1 : 0} value={password} />
                <CheckBox>
                    <input type="checkbox" id="remember-me" name="remember-me" onChange={() => check ? setCheck(false) : setCheck(true)} />
                    <label htmlFor="remember-me">Remember Me</label>
                </CheckBox>
                <Par redirect onClick={() => history.push(`/recover-password/`)}>Forgot password?</Par>
                <StyledDiv>
                    <Par>Don’t have an account?</Par>
                    <Par redirect onClick={() => history.push(`/sign-up/`)}>Create account</Par>
                </StyledDiv>
                <Button type="submit" spanColor={error ? 1 : 0}>Log In</Button>
                {error ? <Par redirect>Invalid email or password</Par> : null}
            </Form>
        </Wrapper>
    )
}

export default Login

// Styled Components
const Wrapper = styled.section`
    width: 100vw;
    height: 100vh;
    background-color: #E53A0D;
`
const Form = styled.form`
    position: absolute;
    margin: auto;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    text-align: center;
    width: 45rem;
    height: 60rem;
    background-color: #fff;

    @media(min-width: 320px) and (max-width: 568px){
        height: 55rem;
    }
    @media(max-width: 768px){
        width: 85%;
    }
`
const H1 = styled.h1`
    margin: 0;
    padding: 8rem 0 2rem 0;
    font-size: 4rem;

    @media(max-width: 768px){
        padding: 5rem 0 2rem 0;
    }
`
const Par = styled.p`
     font-size: 1.4rem;
     margin: 0.3rem;
     padding-bottom: ${({ padding }) => padding ? '2rem' : ''};
     color: ${({ redirect }) => redirect ? ' #E53A0D' : ''};
     cursor: ${({ redirect }) => redirect ? 'pointer' : ''};
`
const Input = styled.input`
    width: 35rem;
    padding: 1.5rem;
    margin: 1rem;
    border : ${({ spanColor }) => spanColor ? '1px solid red' : '1px solid black'};

    @media(max-width: 768px){
        width: 80%;
    }
`
const CheckBox = styled.div`
    text-align: left;
    padding: 1rem 3rem 2rem 3rem;
    
    input {
        vertical-align: middle;
    }
    label{
        font-size: 1.2rem;
        color: #E53A0D;
        font-weight: 500;
        padding-left: 0.6rem;
        vertical-align: middle;
    }
    @media(max-width: 768px){
        width: 80%;
        padding: 1rem 1rem 2rem 1.5rem;
    }
`
const StyledDiv = styled.div`

    p{
        display: inline-block;
    }
`
const Button = styled.button`
    margin: 2rem;
    width: 13rem;
    height: 5rem;
    background-color: ${({ spanColor }) => spanColor ? '#676b6d' : '#E53A0D'};
    color: #fff;
    border-radius: 0.7rem;
    border: none;
    font-size: 1.6rem;
    cursor: pointer;
`
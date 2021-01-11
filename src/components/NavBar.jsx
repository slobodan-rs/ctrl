import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import styled from 'styled-components'
import logo from '../img/logo.png'

const NavBar = ({ setUser, userName, user }) => {
    const history = useHistory()

    const handleClick = () => {
        window.localStorage.clear()
        window.sessionStorage.clear()
        setUser(false)
        history.push('/login')
    }

    return (
        <Wrapper user={user}>
            <Ul>
                <Li><Logo src={logo} alt="StockCTRL" /></Li>
                <Li rightFloat><button onClick={handleClick}>Log Out</button></Li>
                <Li rightFloat><div>Welcome {userName}</div></Li>
            </Ul>
            <AssideMenu>
                <Ul asside>
                    <Li asside><StyledLink to='/pregled-artikla'>Pregled Artikla</StyledLink></Li>
                    <Li asside><StyledLink to='/pregled-po-objektima'>Pregled Po Objektima</StyledLink></Li>
                    <Li asside><StyledLink to='/svi-objekti'>Svi Objekti</StyledLink></Li>
                    <Li asside><StyledLink to='/parametri'>Parametri</StyledLink></Li>
                </Ul>

            </AssideMenu>
        </Wrapper>
    )
}

export default NavBar

// Styled Components
const Wrapper = styled.header`
    display: ${({ user }) => user ? '' : 'none'};
`
const Ul = styled.ul`
    width: 100%;
    height: 5.5rem;
    margin: 0;
    padding: 0;
    background-color: ${({ asside }) => asside ? '' : '#e53a0d'};
    list-style-type: none;
    font-size: 2rem;

    @media(max-width: 768px){
        font-size: 1.6em;
    }
    @media(min-width: 769px) and (max-width: 1024px){
        font-size: 1.8em;
    }
`
const Li = styled.li`
    float: ${({ rightFloat }) => rightFloat ? 'right' : 'left'};
    display: ${({ asside }) => asside ? '' : 'block'};
    color: ${({ asside }) => asside ? 'black' : 'white'};
    width: ${({ asside }) => asside ? '100%' : ''};
    text-align: left;
    text-decoration: none;
    margin: 0;
    padding: 0;

    button {
        width: 12rem;
        height: 5.5rem;
        padding: 0;
        margin: 0;
        border: none;
        color: white;
        background-color: black;
        font-size: 1.8rem;

        :hover {
            cursor: pointer;
        }
        @media(max-width: 768px){
            font-size: 1em;
            width: 8rem;
        }
        @media(min-width: 769px) and (max-width: 1024px){
                font-size: 1em;
        }
    }
    div {
        padding: 1.7rem 2rem;

        @media(min-width: 0px) and (max-width: 320px){
            :nth-child(1){
                display: none;
            }
        }
        
    }
`
const Logo = styled.img`
    height: 5.5rem;
    padding-left: 2rem;
`
const AssideMenu = styled.div`
    width: 27rem;
    height: calc(100vh - 5.5rem);
    background-color: #a3abbb80;
    padding: 0;
    margin: 0;
    position: absolute;
    z-index: 1; 

    @media(max-width: 768px){
        width: 100%;
        height: 20.5em;
    }
    @media(min-width: 769px) and (max-width: 1024px){
        width: 20rem;
    }
`
const StyledLink = styled(Link)`
    width: 25rem;
    padding : 1.6rem 0rem 1.6rem 2rem;
    color: black;
    text-decoration: none;
    display: block;
    :focus {
        color: #e53a0d;
        background-color: #fff;
        border: 2px solid  #e53a0d;
    }
    @media(max-width: 768px){
        width: 99%;
        padding : 1.6rem 0rem 1.6rem 0rem;
        text-align: center;
    }

    @media(min-width: 769px) and (max-width: 1024px){
        width: 19rem;
        padding : 1.6rem 0rem 1.6rem 1rem;
            
    }

`
import React, { useState } from 'react'
import styled from 'styled-components'
import { Plus } from '@styled-icons/boxicons-regular/Plus'
import { DotsVerticalRounded } from '@styled-icons/boxicons-regular/DotsVerticalRounded'
import { postNewProduct } from '../services/services'


const AddProduct = () => {
    const [name, setName] = useState('')
    const [number, setNumber] = useState(0)
    const [dayFrom, setDayFrom] = useState(0)
    const [dayTo, setDayTo] = useState(0)
    const [barcode, setBarcode] = useState(0)
    const [manufacturer, setManufacturer] = useState('')
    const [mainPackage, setMainPackage] = useState(0)
    const [transportPackage, setTransportPackage] = useState(0)
    const [unit, setUnit] = useState(0)
    const [res, setRes] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        let token
        if (localStorage.getItem("Token") !== null) {
            token = localStorage.getItem("Token")
        }
        if (sessionStorage.getItem("Token") !== null) {
            token = sessionStorage.getItem("Token")
        }
        const data = {
            "token": token,
            "name": name,
            "supplierCode": number,
            "barcode": barcode,
            "manufacturer": manufacturer,
            "iDumTradePacking": mainPackage,
            "iDumTransportPacking": transportPackage,
            "ratioTranspTradePack": unit,
            "weightTradePack": 0
        }

        postNewProduct(data).then(res => {
            res.data.Success ? setRes('Artikl je uspešno dodat') : setRes('Došlo je do greške')
            setTimeout(() => {
                setRes('')
            }, 2000)
        }).catch(err => {
            setRes(err)
        })
        // setName('')
        // setNumber(0)
        // setDayTo(0)
        // setDayFrom(0)
        // setBarcode(0)
        // setManufacturer('')
        // setMainPackage(0)
        // setTransportPackage(0)
        // setUnit(0)
    }

    return (
        <Wrapper>
            <Info>
                <InfoRight>Apoteka Lilly 142<Dots /></InfoRight>
                <InfoLeft><OrangePlus />Spremi predlog za dopunu</InfoLeft>
                <Form onSubmit={handleSubmit}>
                    <H3>Dodavanje Artikla</H3>
                    <Button type="submit">Dodaj</Button>
                    <Section>
                        <Left>
                            <H4>Obavezne Informacije</H4>
                            <Label htmlFor="name">Naziv*</Label>
                            <Input type="text" required id="name" onChange={(e) => setName(e.target.value)} />
                            <Label htmlFor="number">Šifra*</Label>
                            <Input type="number" required id="number" onChange={(e) => setNumber(e.target.value)} />
                        </Left>
                        <Right>
                            <H4>Dodatne Informacije</H4>
                            <Label htmlFor="day">Zalihe za dana(parametar)</Label><br />
                            <Input days type="number" id="day" onChange={(e) => setDayFrom(e.target.value)} />
                            <Label daysDash htmlFor="dash">-</Label>
                            <Input days type="number" id="day" onChange={(e) => setDayTo(e.target.value)} /><br />
                            <Label htmlFor="barcode">Barkod</Label>
                            <Input type="number" id="barcode" onChange={(e) => setBarcode(e.target.value)} />
                            <Label htmlFor="manufacturer">Proizvođač</Label>
                            <Input type="text" id="manufacturer" onChange={(e) => setManufacturer(e.target.value)} />
                            <Label htmlFor="package">Trgovačko Pakovanje</Label>
                            <Input type="text" id="package" onChange={(e) => setMainPackage(e.target.value)} />
                            <Label htmlFor="transportPackage">Transportno Pakovanje</Label>
                            <Input type="text" id="transportPackage" onChange={(e) => setTransportPackage(e.target.value)} />
                            <Label htmlFor="unit">Jedinica Mere</Label>
                            <Input type="text" id="unit" onChange={(e) => setUnit(e.target.value)} />
                        </Right>
                    </Section>
                </Form>
                <Message>{res}</Message>
            </Info>
        </Wrapper>
    )
}

export default AddProduct

//Styled Components
const Wrapper = styled.article`
    width: calc(100vw - 27rem);
    margin-left: 27rem;

    @media(max-width: 768px){
        width: 100vw;
        margin-left: 0;
        margin-top: 20.5em;
    }
    @media(min-width: 769px) and (max-width: 1024px){
        width: calc(100vw - 20rem);
        margin-left: 20em;
    }
`
const Info = styled.section`
    width: 100%;
    height: 8rem;
    display: inline-block;
    font-size: 2.6rem;
    border-bottom: 2px solid #e53a0d;
    padding: 0;

    @media(max-width: 768px){
        height: 3em;
        font-size: 1.8em;
        border: none;
    }
    @media(min-width: 769px) and (max-width: 1024px){
        height: 8rem;
    }
`
const InfoLeft = styled.div`
    display: inline-block;
    width: 50rem;
    padding: 2rem;

    @media(max-width: 768px){
        width: 97.5%;
        font-size: 0.7em;
        padding: 0;
        border-bottom: 2px solid #e53a0d;
        padding: 0 0 1em 0.8em;
    }
    @media(min-width: 769px) and (max-width: 1024px){
        width: 15em;
    }
`
const InfoRight = styled.div`
    float: right;
    border-left: 2px solid #e53a0d;
    padding: 2rem;
    color: #e53a0d;

    @media(max-width: 768px){
        float: none;
        padding: 1em 0 0 1em;
        border-left: none;
        
    }
    @media(min-width: 769px) and (max-width: 1024px){
        padding: 2rem 2rem 2rem 3rem; 
    }
`
const OrangePlus = styled(Plus)`
    color: #e53a0d;
    width: 3.5rem;
    padding: 0 2rem;

    @media(max-width: 768px){
        padding: 0;
        width: 2em;
    }
`
const Dots = styled(DotsVerticalRounded)`
    width: 4rem;
    padding: 0 0rem 0 4rem;
    color: #111;

    @media(max-width: 768px){
        width: 1.8em;
        margin: -0.4em 0 0 1em;
        float: right;
    }
`
const Form = styled.form`
    width: 100%;
    display: inline-block;

    @media(max-width: 768px){
        display: flex;
        flex-wrap: wrap;
    }

`
const H3 = styled.h3`
    display: inline-block;
    font-weight: 400;
    padding: 0 3rem;

    @media(max-width: 768px){
        width: 100%;
        text-align: center;
        padding: 1em 3em 0em 3em;
    }
`
const Button = styled.button`
    float: right;
    padding: 1rem 8rem;
    font-size: 2.3rem;
    border: none;
    background-color:#e53a0d;
    color: #fff;
    font-family: 'Zaha Hadid Sans';
    margin: 3rem 4rem;

    &:hover{
        cursor:pointer;
    }

    @media(max-width: 768px){
        text-align: center;
        float: none;
        margin: 0 auto;
        font-size: 1.2em;
        position: relative;
        top: 870px;
    }
`
const Section = styled.section`
    display: flex;
    flex-wrap: wrap;
    padding: 0 3rem;
    width: 90%;

    @media(max-width: 768px){
        padding: 1em;
    }
`
const Left = styled.div`
    width: 30rem;
    padding: 0 20rem 0 0;
   
    @media(max-width: 768px){
        padding: 0;
        width: 100%;
    }

`
const Right = styled.div`
    width: 30rem;

    @media(max-width: 768px){
        padding: 0;
        width: 100%;
        height: 90%;
    }

`
const H4 = styled.h4`
    color:#e53a0d;
    font-weight: 200;
`
const Input = styled.input`
    width: ${({ days }) => days ? '3rem' : '100%'};
    padding: ${({ days }) => days ? '1rem 0.5rem' : '1rem'};
    text-align: ${({ days }) => days ? 'center' : ''};
    border-radius: 1rem;
    background-color: #a3abbb80;
    border: none;
    margin: 1rem 0;
    font-size: 1.8rem;
    font-family: 'Zaha Hadid Sans';

    ::-webkit-inner-spin-button{
        -webkit-appearance: none; 
        margin: 0; 
    }
    ::-webkit-outer-spin-button{
        -webkit-appearance: none; 
        margin: 0; 
    }
    @media(max-width: 767px){
        width: ${({ days }) => days ? '3rem' : '94%'};
    }

    @media(min-width: 768px) and (max-width: 920px){
        width: ${({ days }) => days ? '3rem' : '100%'};
    }
    

`
const Label = styled.label`
    font-size: 1.8rem;
    padding: ${({ daysDash }) => daysDash ? '0 1rem' : ''};
`
const Message = styled.h5`
    text-align: center;
    font-weight: 200;
    color: #e53a0d;

    @media(max-width: 767px){
       margin-top: 5em;
    }
`

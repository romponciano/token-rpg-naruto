import React from 'react'
import styled from 'styled-components'

const Token: React.FC<{ userId: string }> = ({ userId }) => {

    const generateBasicInfo = (prepend: string, type: string) => {
        return (
            <div className="col-md-2 col-sm-4 col-6">
                <div className="input-group mb-2">
                    <div className="input-group-prepend">
                        <div className="input-group-text">{prepend}</div>
                    </div>
                    <input type={type} className="form-control" />
                </div>
            </div>
        )
    }

    const generateAttribute = (prepend: string) => {
        return (
            <div className="col-6">
                <div className="input-group mb-2">
                    <div className="input-group-prepend">
                        <div className="input-group-text">{prepend}</div>
                    </div>
                    <input type="text" className="form-control" />
                </div>
            </div>
        )
    }

    const generateElement = (element: string) => {
        return (
            <>
                <div className="row">
                    <div className="col-2">
                        <input type="checkbox" className="form-check-input" />
                    </div>
                    <div className="col-3">
                        <label>{element}</label>
                    </div>
                    <div className="col-4 p-0">
                        <select className="custom-select custom-select-sm">
                            <option selected>0%</option>
                            <option>25%</option>
                            <option>50%</option>
                            <option>75%</option>
                            <option>100%</option>
                        </select>
                    </div>
                    <div className="col-3 p-0"><span>200%</span></div>
                </div>
            </>
        )
    }

    return (
        <form>
            <div className="row">
                {generateBasicInfo("Nome", "text")}        
                {generateBasicInfo("Clã", "text")}    
                {generateBasicInfo("Jogador", "text")}
                {generateBasicInfo("Aldeia", "text")}        
                {generateBasicInfo("Nivel", "text")}    
                {generateBasicInfo("Level", "text")}
            </div>

            <div className="row">

                <div className=" col-md-3">
                    <div className="card">
                        <h5 className="card-header">Vida</h5>
                        <div className="card-body p-0">
                            <div className="input-group mb-2">
                                <input type="text" className="form-control" />
                                <div className="input-group-prepend">
                                    <div className="input-group-text">/</div>
                                </div>
                                <input type="text" className="form-control" />
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <h5 className="card-header">Chakra</h5>
                        <div className="card-body p-0">
                            <div className="input-group mb-2">
                                <input type="text" className="form-control" />
                                <div className="input-group-prepend">
                                    <div className="input-group-text">/</div>
                                </div>
                                <input type="text" className="form-control" />
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="card col-md-3 p-0">
                    <h5 className="card-header">Atributos</h5>
                    <div className="card-body p-0">
                        <div className="row">
                            {generateAttribute("FOR")}
                            {generateAttribute("RES")}
                            {generateAttribute("DES")}
                            {generateAttribute("ESP")}
                            {generateAttribute("CAR")}
                            {generateAttribute("INT")}
                        </div>
                    </div>
                </div>

                <div className="card col-md-3 p-0">
                    <h5 className="card-header">Elementos</h5>
                    <div className="card-body p-0">
                        <Row>{generateElement("Água")}</Row>
                        <Row>{generateElement("Fogo")}</Row>
                        <Row>{generateElement("Terra")}</Row>
                        <Row>{generateElement("Trovão")}</Row>
                        <Row>{generateElement("Vento")}</Row>
                    </div>
                </div>

                <div className="card col-md-3 p-0">
                    <h5 className="card-header">Missões</h5>
                    <div className="card-body py-0">
                        <div className="row">
                            {generateAttribute("S+")}
                            {generateAttribute("S")}
                            {generateAttribute("A")}
                            {generateAttribute("B")}
                            {generateAttribute("C")}
                            {generateAttribute("D")}
                        </div>
                    </div>
                </div>
         
            </div>
        </form>
    )
}

export default Token

const Row = styled.div`
    input {
        margin: 5px 15px 0px 10px;
    }
    label {
        margin: auto;
    }
`
export { IToken, IPlayer, IJutsu, ICharacteristic, IBasicInfo, ILevel, IAttributes, ISkills, IElements, IMissions }

interface IToken {
    basic: IBasicInfo
    life: number
    chakra: number
    attributes: IAttributes
    skills: ISkills
    elements: IElements
    advantages: ICharacteristic[]
    disadvantages: ICharacteristic[]
    missions: IMissions
}

interface IPlayer {
    id: String
    token: IToken[]
}

interface IJutsu {
    id: String
    name: String
    description: String
    cost: String
}

interface ICharacteristic {
    id: String
    name: String
    description: String
    value: number
}

interface IBasicInfo {
    name: String
    clan: String
    village: String
    level: ILevel
    nivel: String
}

interface ILevel {
    value: number
    unity: String
}

interface IAttributes {
    strenght: number
    spirit: number
    resistence: number
    carism: number
    dexterity: number
    intelligence: number
}

interface ISkills {
    ninjutsu: number
    igakujutsu: number
    genjutsu: number
    bukijutsu: number
    taijutsu: number
    fuinjutsu: number
    ichizoku: number
    senjutsu: number
}

interface IElements {
    water: number
    fire: number
    earth: number
    thunder: number
    wind: number
    main: String[]
}

interface IMissions {
    sPlus: number
    s: number
    a: number
    b: number
    c: number
    d: number
}

import React, { useState, useEffect } from 'react'
import {
    numbers,
    upperCaseLetters,
    lowerCaseLetters,
    specialCharacters,
} from '@Components/Characters'
import { toast } from 'react-toastify'

const Generator = () => {
    const [password, setPassword] = useState('')
    const [passwordLength, setPasswordLength] = useState(12)
    const [includeUppercase, setIncludeUppercase] = useState(false)
    const [includeLowercase, setIncludeLowercase] = useState(false)
    const [includeNumbers, setIncludeNumbers] = useState(false)
    const [includeSymbols, setIncludeSymbols] = useState(false)

    const GetCharacterList = () => {
        var charList : string = "";

        if(includeLowercase)
            charList = charList + lowerCaseLetters;

        if(includeUppercase)
            charList = charList + upperCaseLetters;

        if(includeNumbers)
            charList = charList + numbers;

        if(includeSymbols)
            charList = charList + specialCharacters;

        return charList;
    }

    const GeneratePassword = async () => {
        const charList = await GetCharacterList();
        const charListLength = charList.length;

        var pswd : string = "";

        if(charListLength <= 0) {
            toast.error("NO!")
            return;
        }

        for (let i = 0; i < passwordLength; i++) {
            const characterIndex = Math.round(Math.random() * charListLength)
            pswd = pswd + charList.charAt(characterIndex)
        }

        setPassword(pswd);
    }

    return (
        <React.Fragment>
            <p>{password}</p>
            <button onClick={GeneratePassword}>Generate Password</button>
        </React.Fragment>
    );
}

export default Generator;
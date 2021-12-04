import React, { useState } from 'react'
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
    const [includeUppercase, setIncludeUppercase] = useState(true)
    const [includeLowercase, setIncludeLowercase] = useState(true)
    const [includeNumbers, setIncludeNumbers] = useState(true)
    const [includeSymbols, setIncludeSymbols] = useState(true)

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
            <div>
                <input min="1" max="40" type="range" onChange={e => setPasswordLength(parseInt(e.target.value))} />
            </div>
            <div>
                <label>Include lowercase</label>
                <input type="checkbox" 
                    checked={includeLowercase}
                    onChange={e => setIncludeLowercase(e.target.checked)}
                />
            </div>
            <div>
                <label>Include uppercase</label>
                <input type="checkbox"
                    checked={includeUppercase}
                    onChange={e => setIncludeUppercase(e.target.checked)}
                />
            </div>
            <div>
                <label>Include numbers</label>
                <input type="checkbox" 
                    checked={includeNumbers}
                    onChange={e => setIncludeNumbers(e.target.checked)}
                />
            </div>
            <div>
                <label>Include special characters</label>
                <input type="checkbox" 
                    checked={includeSymbols}
                    onChange={e => setIncludeSymbols(e.target.checked)}
                />
            </div>
            <p>{password}</p>
            <button onClick={GeneratePassword}>Generate Password</button>
        </React.Fragment>
    );
}

export default Generator;
// import { Link } from "react-router-dom"
import { DewCont, Link, Text } from "./DewCont.style"

export const Developer = () => {
    return(
    <Link
        href="https://github.com/Olena1010"
        target="_blank" rel="noreferrer"
    >
        <DewCont>
            <Text>© Phonebook </Text>
            <Text> | | </Text>
            <Text>Developed by Olena Boichenko</Text>
        </DewCont>
    </Link>
    )
}
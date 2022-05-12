import { Box } from "@mui/material";
import NavBar from "./NavBar";

type Props = {
    content: JSX.Element
}

const skeleton = ({content}: Props) => {
    return (
        <Box>
            <NavBar/>
            {content}
        </Box>
    )
}

export default skeleton;
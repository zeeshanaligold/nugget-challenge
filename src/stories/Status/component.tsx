import React, {useState} from "react";
import styled from 'styled-components'

enum StatusEnum  {
    Active = "Active",
    Draft = "Draft"
}


const Status = {
    [StatusEnum.Active] : {
        name: "Active", 
        color: "black"
    },
    "Draft" : {
        name: "Draft", 
        color: "black"
    },
    "Complete" : {
        name: "Complete", 
        color: "black"
    },
    "Archive" : {
        name: "Archive", 
        color: "black"
    }
}


export const StatusWrapper = styled.div`
display: flex;
`



// Top Half

export const ButtonWrapper = styled.div`
display: flex;
flex-direction: column;
`;


export const StyledChevron = styled.button`
background-color: ${({ backgroundColour }: {backgroundColor: string}) => backgroundColour};
padding: 20px 11px 18px 13px;
`



export const StyledButton = styled.button`
background-color: ${({ backgroundColour }: {backgroundColor: string}) => backgroundColour};
height: 47px;
padding: 13px 34px;
`

//Dropdown 
export const DropdownWrapper = styled.div`
display: flex;
`

export const StyledDropdown = styled.select`
`

export const StyledListItem = styled.li`
`

export const Button = ({name, colour}) => {
    return (<Button>
        {name}
    </Button>)
}
export const StatusDropdown = ({ initialStatus}: {initialStatus: StatusEnum}) => {
const [button, setButton ] = useState(initialStatus)
const [showDropdown, toggleDropdown] = useState(false); 

const {name, colour} = button;
return (<StatusWrapper>
    <ButtonWrapper>
    <Button name={name} colour={colour}/>
   <StyledChevron backgroundColor={colour} onClick={() => toggleDropdown(!showDropdown)}/>
   </ButtonWrapper>
   {showDropdown && (<DropdownWrapper>
    <StyledDropdown>
    {Object.keys(Status).map(({name, colour}: {name: string, colour: string}) => {
        return (<StyledListItem>

        </StyledListItem>)
    })}
</StyledDropdown>

   </DropdownWrapper>)}
   
   </StatusWrapper>)

}


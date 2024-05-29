import styled from 'styled-components'
const InputField = ({width,heigth,label,placeholder,type}) => {
    return (
        <InputContainer width={width} heigth={heigth}>
            <div className='label'>
            <label htmlFor={label}>{label}</label>
            </div>
            <input type={type}  placeholder={placeholder} />
        </InputContainer>
    );
};

export default InputField;

const InputContainer=styled.div`
    width:${props=>props.width?props.width:"408px"};
    height: ${props=>props.heigth?props.heigth:"60px"} ;
    display: flex;
    flex-direction: column;
    gap: 8px;
    .label{
        display: flex;
        align-items: start;
        justify-content: start;
        justify-self: start;
        align-self: flex-start;
        font-size: 12px;
        color: black;
    }
    input{
        border: 1px solid #7c7c80;
       width: 100%;
       height: 38px;
       border-radius: 8px;
       padding: 10px 12px;
    }
`

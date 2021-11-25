import React, { useState, useRef, useContext, createContext } from 'react';
import { Wrapper, Icon, Control, SelectedValue, Label, Option, Options } from './styles'
import { Info1 } from '../Typography';
import chevron from '../../assets/icons/chevron-down.svg'
import { COLOR } from '../../tokens/colors';
import { useEffect } from 'react';



export const Select = ({ value, options, prompt, onChange, label, style, ...rest }) => {

    console.log(value)
    const [ isOpen, setIsOpen ] = useState(false)
    const ref = useRef(null)

   
    useEffect(() => {
        document.addEventListener('click', close)
        return () => document.removeEventListener('click', close)
    },[])

    function close(e) {
        setIsOpen( e && e.target === ref.current)
    }
 
    return (
        <>
            { label && <Label>{label}</Label>}
            <Wrapper>
                <Control ref={ref} onClick={(e) => {
                    e.stopPropagation()
                    setIsOpen(!isOpen)
                }} style={style} {...rest}>
                    <SelectedValue >
                        { value ? value : prompt}
                    </SelectedValue>
                    <Icon className={`${isOpen ? "open" : null}`}>
                        <img src={chevron} alt="chevron-down" />
                    </Icon>

                </Control>
                <Options className={`${isOpen ? "open" : null}`}>
                    { options.map((item,index) => {
                        return (
                            <Option
                            key={index}
                            onClick={() => {
                                onChange(item)
                                setIsOpen(false)
                            }}
                            className={`${value === item ? 'selected' : null}`}
                            >{item}</Option>
                        )
                    })}
                </Options>
             
            </Wrapper>  

           
        </>

    )
}

// export const Select = ({ text, options, children, placeholder, selectedItem, onChange, label, ...rest}) => {

//     const [ isOpen, setIsOpen ] = useState(false)
//     const [ isSelected, setIsSelected ] = useState(false)
//     const [ selectedText, setSelectedText ] = useState('')
//     const [ elementClassName, setElementClassName ] = useState('')




//     let el = useRef('el')
   
//     document.addEventListener('click', event => {

//         const check1 = event.target.hasAttribute('class');
//         const check2 = event.target.hasAttribute('className');
   
//         if (check1 && check2) {
         
//             if (event.target.className !== el.current.className) {
//                 setIsOpen(false)
//             }

//         }

//     })

 

//     const handleClick = (e) => {
//         const currentIndex = e.currentTarget.dataset.index;

//        for ( const [index,item] of Object.entries(data) ) {
        
//         if (index === currentIndex) {
//             item.selected = true
//             setIsSelected(true)
//             setSelectedText(item.title)
//         } else {
//             item.selected = false
//         }
        
//        }

//     }

//     return (
//         <>
//             { label && <Label>{label}</Label>}

//             <Wrapper {...rest} ref={el} type="button" onClick={
//                 () => {
//                     return setIsOpen(!isOpen)
//                 }
//             }>

//                 { !isSelected && <Info1 color={ COLOR.gray90 }>{ placeholder }</Info1> }
//                 { isSelected && <Info1>{ selectedText }</Info1> }

//                 <Icon>
//               <img src={chevron} alt="chevron-down" />
//                 </Icon>

//                 { isOpen &&
//                     <SelectDrawer>
//                         { options.map((item,index) => {
//                       return (
//                         <Option text={item} key={index} data-index={index} onClick={handleClick}/>
//                       )
//                     })}
//                     </SelectDrawer>
//                 }
//             </Wrapper>  
           
     
           
//         </>

//     )
// }



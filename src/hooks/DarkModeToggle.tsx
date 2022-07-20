import {FunctionComponent, useState, useEffect} from 'react'
import styled from '@emotion/styled'
import MoonIcon from "../../static/assets/moon-svgrepo-com.svg";
import SunIcon from "../../static/assets/sun-svgrepo-com.svg";

const updateTheme = (isDarkEnabled:boolean) => {
 console.log("todo change theme")
 if (isDarkEnabled) {
  document.documentElement.setAttribute('color-theme', 'dark');
} else {
  document.documentElement.setAttribute('color-theme', 'light');
}
};

interface toggle {
  toggle: boolean;
}

const Root = styled.div`
  position: fixed;
  margin: 30px;
  right: 0;
  bottom: 0;
  z-index: 1;
  box-sizing: border-box;
  --black: #333333;
  --white: #f5f5f5;
  --background: var(--white);
  --foreground: var(--black);
	--transition: 0.5s ease;
`

const ToggleWrapper = styled.label`
   width: 130px;
  display: block;
  
`

const Toggle = styled.div<toggle>`
  height: 65px;
  width: 130px;
  background: var(--black);
  border-radius: 40px;
  padding: 12px;
  position: relative;
  margin: auto; 
  cursor: pointer;
  

  &::before{
  content: "";
  display: block;
  height: 41px;
  width: 41px;
  border-radius: 30px;
  position: absolute;
  z-index: 2;
  transform: ${ props => props.toggle ? 'translateX(0)' : 'transLateX(65px)'};
  background: var(--background);
	transition: transform var(--transition), background var(--transition);
  :not(:disabled){
    cursor: pointer;
  }
}
`

const ToggleInput = styled.input`
	top: 0;
	position: absolute;
  opacity: 0;
`

const Hidden = styled.span`
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`

const Icons = styled.div`
    display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  margin: 0 5px;

`

const Img = styled.img`
  
  fill: var(--white);
  font-size: 14px;
  height: 30px;
  width: 30px;
  padding: 5px;
  border-radius: 50%;
  z-index: 0;
`


const DarkModeToggle: FunctionComponent = () => {
  
  const [isEnabled, setIsEnabled] = useState(false);

  useEffect(() => {
    updateTheme(isEnabled)
  }, [isEnabled]);

  const toggleState = () => {
    setIsEnabled((prevState) => !prevState);
  };

  return (
  <Root>
    <ToggleWrapper htmlFor="toggle">
      <Toggle toggle={isEnabled}>
      <Hidden>
      {isEnabled ? "Enable Light Mode" : "Enable Dark Mode"}
      </Hidden>
      <Icons>
        <Img src={SunIcon} alt='SI' />
        <Img src={MoonIcon} alt='MI' />
      </Icons>
      <ToggleInput
        id="toggle"
        name="toggle"
        type="checkbox"
        checked={isEnabled}
        onClick={toggleState}
      />
      </Toggle>
    </ToggleWrapper>
  </Root>

);
}

export default DarkModeToggle;
import { FunctionComponent, useState, useEffect, useCallback} from 'react'
import styled from '@emotion/styled'
import MoonIcon from "../../static/assets/moon-svgrepo-com.svg";
import SunIcon from "../../static/assets/sun-svgrepo-com.svg";



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
const isBrowser = typeof window !== "undefined"

const DarkModeToggle: FunctionComponent = ({ changeTheme }:any) => {
  if(isBrowser) {

 
  const [isEnabled, setIsEnabled] = useState(false);

  const setDark = useCallback(() => {
    localStorage.setItem("theme", "Dark");
    document.documentElement.setAttribute("data-theme", "Dark");
    if (changeTheme !== undefined) changeTheme();
  }, [changeTheme]);

  const setLight = () => {
    localStorage.setItem("theme", "Light");
    document.documentElement.setAttribute("data-theme", "Light");
    if (changeTheme !== undefined) changeTheme();
  };

  const storedTheme = localStorage.getItem("theme");
  
  const prefersDark =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: Dark)").matches

  const defaultDark =
    storedTheme === "Dark" || (storedTheme === null && prefersDark);

  const toggleState = (e:any) => {
    if (e.target.checked) {
      setDark();
    } else {
      setLight();
    }
    setIsEnabled((prevState) => !prevState);
  };

  useEffect(() => {
    if (defaultDark) {
    setDark();
    }
  }, [defaultDark, setDark]);

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
        onClick={toggleState}
        defaultChecked={defaultDark}
      />
      </Toggle>
    </ToggleWrapper>
  </Root>

);
}
}

export default DarkModeToggle;
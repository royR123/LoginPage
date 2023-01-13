import styled from "styled-components";
import pic from '../images/Picture.jpg'
import unseen from '../images/unseen.jpg'
const Container = styled.div`
    display: flex;
    /* flex-direction: column; */
    justify-content:  space-around;
    /* align-items: center; */
`
const Wrapper = styled.div`
    margin-top: 20px;
    margin-left: 20px;
    height: 80vh;
    width: 50vw;
    /* background-color: aliceblue; */
    box-shadow: 2px 2px 20px grey;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    
`
const Heading = styled.div`
    font-weight: bolder;
    font-size: 2rem;
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Label = styled.div`
    margin: 10px;
    font-weight: bolder;
    display: flex;
    align-items: center;
`
const Input = styled.input`
    height: 30px;
    padding: 4px;
    margin: 10px;
`
const Anchor = styled.a`

    color: orange;
`
const Span = styled.span`
    /* display: block;
    overflow: hidden;
    padding: 0px 4px 0px 6px; */
`
const Button = styled.div`
    font-weight: lighter;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    background-color: blue;
    color: white;
    width: 70%;
    height: 30px;
    border-radius: 10px;
    padding: 6px;
`
const Wrapper1 = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const Wrapper2 = styled.div`
    border: 0.8px solid black;
    height: 30px;
    padding: 4px;
    margin: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const SmallImg = styled.img`
    height: 50%;
    width: 20px;
`
const Input2 = styled.input`
    border: none;
    &:focus{
        outline : none;
    }
`

const Image  = styled.img`
    height: 55vh;
`

const Picture = styled.div`
    margin-top: 100px;
`

const Login = () => {
    return (
        <Container>
            <Picture>
                <Image src={pic} />
            </Picture>

            <Wrapper>
                <Heading>Login</Heading>
                <Label>
                    Login ID
                </Label>
                <Input type='text' placeholder="Enter Login ID" />
                <Label>
                    Password
                </Label>
                <Wrapper2>
                <Input2 type='password' placeholder="Enter Password" />
                <SmallImg src={unseen} />
                </Wrapper2>

                <Label>
                    <Input type='checkbox' />Remember Me
                </Label>

                <Label>
                    <Input type='checkbox' />Agree To
                    <Anchor href="google.com">
                        Terms & Conditions
                    </Anchor>
                </Label>
                <Wrapper1>
                    <Button>
                        Login
                    </Button>
                    <Span>
                        Don't have an account?
                        <Anchor href="https://google.com">Register Here</Anchor>
                    </Span>


                </Wrapper1>

            </Wrapper>

        </Container>
    );
}
export default Login;
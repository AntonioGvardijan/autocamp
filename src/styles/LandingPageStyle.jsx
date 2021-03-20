import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    max-width: 1800px;
    margin: 0 auto;
    height: 100vh;
    padding-bottom: 20px;

    & > .styles {
        height: 100%;
        z-index: -2;
        margin: 0 20px 20px;
        filter: brightness(.5);
        margin-bottom: 20px;

        @media screen and (max-width: 1200px) {
            height: 80vh;
        }
    }
`

export const Wrapper = styled.div`
    width: 100%;
`
export const Scroll = styled.div`
    height: 3000px;
`

export const Title = styled.div`
    font-size: 3rem;
    width: 88%;
    text-align: center;
    color: white;
    font-weight: 500;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);

    @media screen and (max-width: 650px){
        font-size: 2rem;
        top: 45%;
    }
`

export const Subtitle = styled.div`
    font-size: 1.6rem;
    margin-bottom: 50px;

    @media screen and (max-width: 650px){
        font-size: 1.3rem;
    }
`
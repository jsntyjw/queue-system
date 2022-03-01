import styled from "styled-components";

export const ModalContent = styled.div`
	padding: 2rem;
	height: 10rem;
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

export const OptionContainer = styled.div`
    display: flex;
    :not(:last-of-type) {
        margin-bottom: 1rem;
    }
`;

export const Label = styled.label`
    margin-left: 1rem;
`;

import { connect, styled } from "frontity";

const Footer = () => {
  return (
    <>
      <FooterContainer>
        <FooterContent>
          <FooterCol>miao</FooterCol>
          <FooterCol>bao</FooterCol>
          <FooterCol>ciao</FooterCol>
        </FooterContent>
      </FooterContainer>
    </>
  );
};

// Connect the Footer component to get access to the `state` in it's `props`
export default connect(Footer);

const FooterContainer = styled.div`
  display:flex;
  background: #dedede;
  color: black;
  padding: 50px 0;
  justify-content: center;
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 848px;
  width: 100%;
`;

const FooterCol = styled.div`
  display: block;
`;
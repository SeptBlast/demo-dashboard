import * as React from "react";
import styled from "styled-components";
import Typography from "@mui/material/Typography";

const FooterContainer = styled.div`
    text-align: center;
    position: absolute;
    bottom: 0;
    width: 100% !important;
    width: 100px !important;
    background-color: #f5f5f5;
`;

function StickyFooter() {
    return (
        <FooterContainer>
            <Typography variant="title">Copyright © {new Date().getFullYear()} - Made with ❤️ in India 🇮🇳</Typography>
        </FooterContainer>
    );
}

export default StickyFooter;

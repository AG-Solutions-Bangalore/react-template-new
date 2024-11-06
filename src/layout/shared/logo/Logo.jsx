
import { styled } from "@mui/material";

import { Link } from "react-router-dom";

const LinkStyled = styled(Link)(() => ({
  height: "38px",
  width: "180px",
  overflow: "hidden",
  display: "block",
}));

const Logo = () => {
  return (
    <LinkStyled href="/">
      <img src="/images/logos/logo-dark.svg" alt="logo" height={70} width={174} priority />
    </LinkStyled>
  );
};

export default Logo;

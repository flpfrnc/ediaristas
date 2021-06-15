import { styled } from "@material-ui/core/styles";
import { Container, Typography } from "@material-ui/core";

export const FooterStyled = styled("footer")`
  background-color: ${({ theme }) => theme.palette.primary.main};
  color: ${({ theme }) =>
    theme.palette.getContrastText(theme.palette.primary.main)};
  padding: ${({ theme }) => theme.spacing(4)} 0;
`;

export const FooterContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing(2)};
  flex-wrap: wrap;

  ${({ theme }) => theme.breakpoints.down("md")} {
    gap: ${({ theme }) => theme.spacing(5)};
  }
`;

export const FooterTitle = styled((props) => (
  <Typography component={"h2"} variant={"body2"} {...props} />
))`
  font-weight: bold;
`;

export const AppList = styled("ul")`
  display: flex;
  list-style: none;
  padding: 0;
  gap: ${({ theme }) => theme.spacing()};

  img {
    width: 122px;
  }
`;

export const FooterTitleCentered = styled("div")`
  display: flex;
  justify-content: center;

  ${({ theme }) => theme.breakpoints.down("md")} {
    justify-content: flex-start;
  }
`;

import styled from "styled-components";
import { laptop } from "./breakpoints";

export const PlanContainer = styled.div`
  width: 22rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 1rem 2rem 0;

  @media ${laptop} {
    margin-right: 0rem;
  }

  & h2 {
    font-weight: 700;
    font-size: 1.5rem /* 24px */;
    line-height: 2rem /* 32px */;
    width: 20rem /* 320px */;
    align-self: flex-start;

    & span {
      color: rgb(251 146 60);
    }

    @media ${laptop} {
      font-size: 1.25rem /* 20px */;
      line-height: 1.75rem /* 28px */;
    }
  }
`;

import { css, lighten, shade, styled } from '~/modules';
import { pxToRem } from '~/utils';

interface FormProps {
  hasError: boolean;
}

export const Title = styled.h1`
  font-size: ${pxToRem(48, 16)};
  color: #eee;
  max-width: 450px;
  line-height: 56px;
  margin-top: 80px;
`;

export const Form = styled.form<FormProps>`
  margin-top: 40px;
  max-width: 700px;

  display: flex;

  input {
    background: ${lighten(0.1, '#202024')};
    flex: 1;
    height: 70px;
    padding: 0 24px;
    border-radius: 5px 0 0 5px;
    color: #eee;
    border: 2px solid ${lighten(0.1, '#202024')};
    border-right: 0;

    ${props => {
      return (
        props.hasError &&
        css`
          border-color: #c53030;
        `
      );
    }}

    &&::placeholder {
      color: #a8a8b3;
    }
  }

  button {
    width: 210px;
    height: 74px;
    background: #6c63ff;
    border-radius: 0px 5px 5px 0px;
    border: 0;
    color: #fff;
    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.2, '#6C63FF')};
    }
  }
`;

export const Error = styled.span`
  display: block;
  color: #c53030;
  margin-top: 8px;
`;

export const Repositories = styled.div`
  margin-top: 80px;
  max-width: 700px;
  a {
    background: ${lighten(0.1, '#202024')};
    border-radius: 5px;
    display: block;
    padding: 24px;
    text-decoration: none;

    display: flex;
    align-items: center;

    transition: transform 0.2s;

    &:hover {
      transform: translateX(10px);
    }

    & + a {
      margin-top: 16px;
    }

    img {
      width: 64px;
      height: 64px;
      border-radius: 50%;
    }

    div {
      margin: 0 16px;
      flex: 1;

      overflow: auto;

      strong {
        font-size: ${pxToRem(20)};
        color: #e1e1e6;
      }

      p {
        font-size: ${pxToRem(18)};
        color: #a8a8b3;
        margin-top: 4px;
      }
    }
    svg {
      margin-left: auto;
      color: #cbcbd6;
    }
  }
`;

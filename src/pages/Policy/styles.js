import { styled } from 'styled-components';

export const ContentWrapper = styled.section`
  padding: 70px 0;

  .imprint__container {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }
`;

export const TitlePage = styled.h5`
  font-size: 32px;
  font-weight: 700;
  line-height: 1.1;
  /* text-align: center; */
`;

export const Title = styled.h5`
  font-size: clamp(20px, 1.339vw + 15.712px, 26px);
  font-weight: 700;
`;

export const BlockInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Text = styled.p`
  font-size: clamp(15.008px, 0.67vw + 12.864px, 18px);
  line-height: 1.4;

  a {
    text-decoration: underline;
    color: ${({ theme }) => theme.colors.secondary};
    transition: opacity ${({ theme }) => theme.constant.transition};
  }

  a:hover {
    opacity: 80%;
  }

  a:active,
  a:visited {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

export const ListWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  list-style: none;
  padding: 0 30px;

  ${({ $inSide }) =>
    $inSide &&
    ` 
	 	list-style: inside;
  		list-style-type: circle;
  		list-style-position: inside;
	`};
`;

export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  margin-bottom: 8px;
  gap: 10px;
`;

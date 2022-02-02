import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
`;

export const WrapperList = styled.div`
  margin-left: 30px;
`;

export const Button = styled.div`
  display: block;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.875;
  text-align: center;
  letter-spacing: 0.06em;
  width: 60px;
  // height: 30px;
  color: #ffff;
  background: rgb(0, 0, 238);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  padding: 5px;
  border: none;
  cursor: pointer;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const MainTitle = styled.h2`
  margin-top: 0;
  color: rgb(0, 0, 238);
`;

export const OverviewTitle = styled.h3`
  color: rgb(0, 0, 238);
`;

export const Overview = styled.p`
  width: 500px;
`;

export const GenresTitle = styled.h4`
  color: rgb(0, 0, 238);
`;

export const GenreList = styled.ul`
  display: flex;
`;

export const GenreListItem = styled.li`
  margin-right: 15px;
  list-style: none;
`;

export const AddlInformation = styled.p`
  font-weight: bold;
  font-size: 24px;
  line-height: 1.875;
  color: rgb(0, 0, 238);
`;

export const CastLink = styled.span`
  font-weight: 700;
  font-size: 18px;
  line-height: 1.875;
  text-decoration: none;
  color: rgb(0, 0, 238);
  margin-right: 10px;
`;

export const ReviewsLink = styled.span`
  font-weight: 700;
  font-size: 18px;
  line-height: 1.875;
  text-decoration: none;
  color: rgb(0, 0, 238);
`;

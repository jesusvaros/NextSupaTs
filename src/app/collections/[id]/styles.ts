'use client';
import { styled } from "styled-components";

export const Container = styled.div`
  padding: 20px;
`;

export const Header = styled.div`
  margin-bottom: 30px;
`;

export const Title = styled.h1`
  color: ${({theme}) => theme.colors.text.primary };
  margin-bottom: 10px;
`;

export const Description = styled.p`
  color: ${({theme}) => theme.colors.text.primary };;
  font-size: 16px;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
  padding: 20px 0;
`;
import styled from 'styled-components';

export const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

export const Heading = styled.h1`
  font-size: 36px;
  color: #333;
  text-align: center;
  margin-bottom: 20px;
`;

export const SuccessMessage = styled.p`
  color: green;
`;

export const FormContainer = styled.div`
  background-color: #f9f9f9;
  border-radius: 8px;
  padding: 20px;
`;

export const FormLabel = styled.label`
  display: block;
  font-size: 18px;
  margin-bottom: 10px;
`;

export const FormInput = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 20px;
`;

export const FormTextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 20px;
`;

export const Button = styled.button`
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

export const PhotoListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
`;

export const PhotoItem = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 10px;
`;

export const PhotoImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
`;

export const PhotoTitle = styled.h3`
  font-size: 18px;
  margin-top: 10px;
`;

export const PhotoDescription = styled.p`
  font-size: 16px;
  margin-top: 5px;
`;

export const DeleteButton = styled.button`
  background-color: #dc3545;
  color: white;
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #c82333;
  }
`;

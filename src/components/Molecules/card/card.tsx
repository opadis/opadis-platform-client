import { Text } from "../../atoms/text/text";
import { Button } from "../../atoms/button/button";

export interface CardProps {
  title: string;
  description: string;
}

export const Card = ({ title, description }: CardProps) => {
  return (
    <div className="card">
      <Text label={title} type="title"></Text>
      <Text label={description} type="body"></Text>
      <Button className="card-button">ver mas</Button>
    </div>
  );
};

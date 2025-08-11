import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ReactNode } from "react";

type ServiceCardProps = {
  icon: ReactNode;
  title: string;
  description: string;
  priceHint?: string;
};

export default function ServiceCard({ icon, title, description, priceHint }: ServiceCardProps) {
  return (
    <Card className="h-full">
      <CardHeader>
        <div className="mb-2 text-primary">{icon}</div>
        <CardTitle className="text-lg">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      {priceHint ? (
        <CardContent>
          <Badge variant="secondary">{priceHint}</Badge>
        </CardContent>
      ) : null}
    </Card>
  );
}



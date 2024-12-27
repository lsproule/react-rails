import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Wifi, Server, Headphones } from "lucide-react";

export const LandingPage: React.FC = () => {
  return (
    <>
      <main className="flex-grow">
        <section className="bg-primary text-primary-foreground py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-4">
              Managed VoIP and Internet Services for Small Businesses
            </h1>
            <p className="text-xl mb-8">
              Boost your communication and connectivity with our all-in-one
              solutions
            </p>
            <Button size="lg">Get Started</Button>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Our Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <FeatureCard
                icon={<Phone className="h-12 w-12 text-primary" />}
                title="VoIP Solutions"
                description="Crystal-clear voice calls and advanced features for your business communications."
              />
              <FeatureCard
                icon={<Wifi className="h-12 w-12 text-primary" />}
                title="High-Speed Internet"
                description="Reliable and fast internet connectivity to keep your business running smoothly."
              />
              <FeatureCard
                icon={<Server className="h-12 w-12 text-primary" />}
                title="Network Equipment"
                description="Top-quality routers and switches for optimal network performance."
              />
              <FeatureCard
                icon={<Headphones className="h-12 w-12 text-primary" />}
                title="24/7 Support"
                description="Round-the-clock technical support to ensure your systems are always operational."
              />
            </div>
          </div>
        </section>

        <section className="bg-secondary py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Upgrade Your Business Communications?
            </h2>
            <p className="text-xl mb-8">
              Contact us today for a free consultation and custom quote.
            </p>
            <Button size="lg" variant="secondary">
              Contact Us
            </Button>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4 max-w-md">
            <h2 className="text-3xl font-bold text-center mb-8">
              Stay Updated
            </h2>
            <form className="flex space-x-2">
              <Input type="email" placeholder="Enter your email" />
              <Button type="submit">Subscribe</Button>
            </form>
          </div>
        </section>
      </main>
    </>
  );
};

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex flex-col items-center space-y-4">
          {icon}
          <span>{title}</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-center text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
};

